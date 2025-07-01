const { Client } = require('pg');
const express = require('express');
const cors = require('cors');
const multer = require("multer");
const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');
const bodyParser = require('body-parser'); // 新增 body-parser 来解析请求主体
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // 使用 body-parser 解析 JSON 请求

// 配置数据库连接（member 数据库）
const poolMember = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'member',
  password: '1111',
  port: 5433,
});

// 配置文件上传目录

app.use(cors({
  origin: 'http://localhost:5173', // 允許來自前端的請求
}));


const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

app.use('/images', express.static(path.join(__dirname, 'images')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesDir);
  },
  filename: function (req, file, cb) {

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({
    storage: storage
}).fields([
    { name: 'pictures', maxCount: 10 },  // 處理 'pictures' 文件字段，最多10個文件
    { name: 'photos', maxCount: 10 }     // 處理 'photos' 文件字段，最多10個文件
]);



app.post('/login', async (req, res) => {
  const { id, password } = req.body;


  try {
    const result = await poolMember.query(
      'SELECT * FROM employee.login WHERE id = $1 AND password = $2',
      [id, password]
      );
    if (result.rows.length > 0){
      res.send(result.rows);
    }
    else {
      res.send({ message: 'Wrong id/password combination!'});
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error quering the database');
  }

});

app.post('/search', async (req, res) => {
  const { entrynumber } = req.body;


  try {
    const result = await poolMember.query(
      'SELECT * FROM employee.signup WHERE entrynumber = $1',
      [entrynumber]
      );
    if (result.rows.length > 0){
      res.send(result.rows);
    }
    else {
      res.send({ message: 'Wrong entrynumber combination!'});
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error quering the database');
  }

});


app.post('/create', async (req, res) => {
  const { id, password } = req.body;

  try {
    const result = await poolMember.query(
      'INSERT INTO employee.login (id, password) VALUES ($1, $2)',
      [id, password]
    );
    res.send('Values Inserted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting values');
  }
});

app.post('/bookinfo', async (req, res) => {
  const { checkIn, checkOut, people, name, owner, price } = req.body;

  try {
    const result = await poolMember.query(
      'INSERT INTO employee.bookinfo (checkIn, checkOut, people, name, owner, price) VALUES ($1, $2, $3, $4, $5, $6)',
      [checkIn, checkOut, people, name, owner, price]
    );
    res.send('Values Inserted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting values');
  }
});

app.post('/signup', async (req, res) => {
  const { name, phone, date, id, email, entrynumber, checkIn, checkOut, people, houseId, gender } = req.body;
  try {
    const result = await poolMember.query(
      'INSERT INTO employee.signup(name, phone, date, id, email, entrynumber, checkin, checkout, people, houseid, gender) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
      [name, phone, date, id, email, entrynumber, checkIn, checkOut, people, houseId, gender]
    );
    res.status(200).json({ success: true, message: '資料插入成功' });
  } catch (err) {
    console.error('執行查詢時發生錯誤：', err.stack);
    res.status(500).json({ success: false, message: '插入資料時出錯' });
  }
});
 

app.get('/lodgings', async (req, res) => {
  try {
    const result = await poolMember.query("SELECT * FROM employee.lodging");
    const lodgings = result.rows.map(lodging => ({
      ...lodging,
      pictures: JSON.parse(lodging.pictures)
    }));
    res.send(lodgings);
  } catch (err) {
    console.error(err);
    res.status(500).send('獲取住宿資料時出錯');
  }
});

app.post('/lodging', upload, (req, res) => {
    const pictures = req.files['pictures'] ? req.files['pictures'].map(file => file.filename) : [];
    const photos = req.files['photos'] ? req.files['photos'].map(file => file.filename) : [];
    const { userId, name, owner, phone, address, describe, price } = req.body;
    poolMember.query(
        "INSERT INTO employee.lodging (id, name, owner, phone, address, describe, price , pictures, photos) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", 
        [userId, name, owner, phone, address, describe, price, JSON.stringify(pictures), JSON.stringify(photos)],
        (err, result) => {
            if (err) {
                console.error('Error executing query', err.stack);
                res.status(500).send("Error inserting values");
            } 
            else {
                res.send("Values Inserted");
            }
        }
    );
});

/*
app.get('/reviews', async (req, res) => {
  const { tag } = req.query;

  try {
    let query = 'SELECT * FROM employee.comment WHERE 1=1';
    const params = [];

    if (tag) {
      query += ` AND tags::text LIKE $1`;
      params.push(`%"${tag}"%`);
    }

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
*/
/*
app.get('/reviews', async (req, res) => {
  try {
    const result = await poolMember.query('SELECT * FROM employee.com;');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
*/

// 取得整體星級平均
app.get('/reviews/average', async (req, res) => {
  try {
    const query = `
      SELECT COALESCE(AVG(rating), 0) AS average_rating
      FROM employee.comment
    `;
    const result = await pool.query(query);
    res.json({ averageRating: parseFloat(result.rows[0].average_rating).toFixed(1) });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// 新增評論
/*
app.post('/reviews', async (req, res) => {
  const { name, rating, tags, content } = req.body;

  try {
    const query = `
      INSERT INTO employee.comment (name, rating, tags, content)
      VALUES ($1, $2, $3, $4)
    `;
    await pool.query(query, [name, rating, JSON.stringify(tags), content]);
    res.status(201).send('Review added');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
*/


app.get('/messages', async (req, res) => {
  try {
    const { houseId } = req.query;  // 使用 req.query 獲取查詢參數
    const result = await poolMember.query('SELECT * FROM employee.comment WHERE houseid = $1', [houseId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


app.post('/messages', async (req, res) => {
  const { name, rating, content, houseId } = req.body;
  try {
    await poolMember.query(
      'INSERT INTO employee.comment(name, rating, content, houseid) VALUES ($1, $2, $3, $4)',
      [name, rating, content, houseId]
    );
    res.status(201).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

/*

app.post('/messages', async (req, res) => {
  const { name, rating, content } = req.body;

  try {
    const result = await poolMember.query(
      'INSERT INTO employee.comment (name, rating, content) VALUES ($1, $2, $3)',
      [name, rating, content]
    );
    res.send('Values Inserted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting values');
  }
});
*/

/*
app.get('/houses', (req, res) => {
    const query = 'SELECT * FROM employee.lodging'; // 定義 SQL 查詢語句

    pool.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Error executing query');
        }

        // 解析 pictures 和 photos 字段
        const houses = results.rows.map(house => ({
            ...house,
            photos: JSON.parse(house.photos), // 將 photos 字段從 JSON 字符串轉換為陣列
            pictures: JSON.parse(house.pictures) // 將 pictures 字段從 JSON 字符串轉換為陣列
        }));

        res.json(houses); // 返回查詢結果的數據
    });
});
*/

app.get('/houses', async (req, res) => { // 添加 async 關鍵字

    const query = ("SELECT * FROM employee.lodging WHERE status = '審核通過'"); // 定義 SQL 查詢語句
   poolMember.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Error executing query');
      }
      // 解析 pictures 字段
      const houses = results.rows.map(house => ({
        ...house,
        photos: JSON.parse(house.photos),
        pictures: JSON.parse(house.pictures) // 將字符串轉換為陣列
      }));
      res.json(houses); // 返回查詢結果的數據
    });
  
}); 

app.get('/provides', async (req, res) => { // 添加 async 關鍵字

    const query = ("SELECT * FROM employee.lodging"); // 定義 SQL 查詢語句
   poolMember.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Error executing query');
      }
      // 解析 pictures 字段
      const provides = results.rows.map(provide => ({
        ...provide,
        photos: JSON.parse(provide.photos),
        pictures: JSON.parse(provide.pictures) // 將字符串轉換為陣列
      }));
      res.json(provides); // 返回查詢結果的數據
    });
  
});

app.post('/update-status', async (req, res) => {
  const { name, status } = req.body;

  try {
    await poolMember.query('UPDATE employee.lodging SET status = $1 WHERE name = $2', [status, name]);
    res.send('Status Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating status');
  }
});



app.get('/newlodging', async (req, res) => {
  try {
    const results = await poolMember.query('SELECT * FROM employee.lodging'); // 使用 async/await 進行查詢
    const newlodgings = results.rows.map(newlodging => ({
      ...newlodging,
      pictures: JSON.parse(newlodging.pictures), // 將 pictures 欄位的 JSON 字符串轉換為數組
      photos: JSON.parse(newlodging.photos) // 將 photos 欄位的 JSON 字符串轉換為數組
    }));

    res.status(200).json(newlodgings); // 成功查詢後返回資料
  } catch (err) {
    console.error('獲取住宿信息時出錯：', err.message); // 打印錯誤訊息
    res.status(500).send('獲取住宿信息時出錯'); // 返回 500 錯誤狀態碼
  }
});

// 路由：member 数据库操作
app.post('/member-login', async (req, res) => {
  const { account, password } = req.body;

  try {
    const result = await poolMember.query(
      'SELECT * FROM employee.manager WHERE account = $1 AND password = $2',
      [account, password]
    );
    if (result.rows.length > 0) {
      res.send(result.rows);
    } else {
      res.status(401).send({ message: 'Wrong account/password combination!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error querying the database');
  }
});


const drawnParticipants = new Set(); // 全局集合，儲存所有已抽中的參賽者

// 房間名稱和 houseId 對應關係
const houseIds = {
  '活動中心地舖區-300席': 6,
  '光電球場帳蓬露營-40頂': 7,
  '活動中心1F地舖區-300席': 8,
  '活動中心2F-50席': 9,
  '活動中心3F(限女性)-50席': 10,
  '川石園帳蓬露營-50頂': 11,
  '帳蓬露營-80頂': 12,
  '地舖區90席': 13,
  '選手村居民住宿-田中老街335': 14,
  '選手村居民住宿-田中老街723': 15
};

// 根據 houseId 抽籤參賽者
app.get('/draw/:houseName', (req, res) => {
  const houseName = req.params.houseName;
  const houseId = houseIds[houseName];
  
  if (!houseId) {
    return res.status(400).send('無效的房間名稱');
  }

  const houseDrawLimits = {
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
    14: 1,
    15: 1
  };

  const drawLimit = houseDrawLimits[houseId]; // 根據 houseId 獲取抽取上限

  let query = 'SELECT entrynumber FROM employee.signup WHERE houseid = $1';
  const queryParams = [houseId];

  // 如果是活動中心3F房間，限制為女性
  if (houseId === 5) {
    query = 'SELECT entrynumber FROM employee.signup WHERE houseid = $1 AND gender = $2';
    queryParams.push('female');
  }

  poolMember.query(query, queryParams, (err, result) => {
    if (err) {
      console.error('Error fetching participants', err);
      return res.status(500).send('Error fetching participants');
    }

    const participants = result.rows.map(row => row.entrynumber);
    if (participants.length < drawLimit) {
      return res.status(400).send(`參賽者數量不足，至少需要 ${drawLimit} 名參賽者`);
    }

    // 抽籤邏輯
    const winners = [];
    while (winners.length < drawLimit) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const winner = participants[randomIndex];
      if (!drawnParticipants.has(winner)) {
        winners.push(winner);
        drawnParticipants.add(winner);
      }
    }

    res.json({ winners }); // 返回抽中的參賽者號碼
  });
});


app.get('/resetDrawnParticipants', async (req, res) => {
  try {
    // 使用 SQL 語句將所有 status 欄位重設為空值
    const updateQuery = 'UPDATE employee.signup SET status = NULL';

    // 執行更新查詢
    await poolMember.query(updateQuery);
    drawnParticipants.clear(); // 清空全局集合

    res.status(200).send('所有 status 欄位已成功重設為空值，已重置抽籤結果');
  } catch (err) {
    console.error('重設 status 欄位時發生錯誤:', err);
    res.status(500).send('重設 status 欄位時發生錯誤');
  }
});

app.post('/confirmWinners', async (req, res) => {
  const { houseId, winners } = req.body;

  // 檢查 houseId 和 winners 是否存在
  if (!houseId || !winners || winners.length === 0) {
    return res.status(400).json({ message: 'House ID 或得獎者清單缺失' });
  }

  try {
    // 更新資料庫中每位得獎者的狀態
    const updateQuery = `
      UPDATE employee.signup
      SET status = 'confirmed'
      WHERE houseid = $1 AND entrynumber = ANY($2::varchar[])
    `;

    // 執行查詢，更新狀態
    await poolMember.query(updateQuery, [houseId, winners]);
    res.status(200).json({ message: '得獎者已成功確認' });
  } catch (err) {
    console.error('確認得獎者時發生錯誤:', err);
    res.status(500).json({ message: '確認得獎者時發生錯誤' });
  }
});


app.post('/com1', async (req, res) => {
  const { overallRating, advantages, disadvantages, tags, houseid, name } = req.body;

  try {
    // 如果 tags 是陣列，需將其轉換為 JSON 字符串以存儲在資料庫中
    const tagsString = JSON.stringify(tags);

    // 插入資料庫
    await poolMember.query(
      'INSERT INTO employee.com (overallrating, advantages, disadvantages, tags, houseid, name) VALUES ($1, $2, $3, to_json($4::text[]), $5, $6);',
      [overallRating, advantages, disadvantages, tags, houseid, name]
    );

    res.status(201).send('評論已成功存儲！');
  } catch (err) {
    console.error('資料插入失敗:', err.message);
    res.status(500).send('伺服器錯誤');
  }
});

app.get('/average-rating', async (req, res) => {
  const { houseid } = req.query; // 從查詢參數中獲取 houseid
  if (!houseid) {
    return res.status(400).send('缺少 houseid');
  }
  try {
    const result = await poolMember.query('SELECT AVG(overallrating) AS averageRating FROM employee.com WHERE houseid=$1',
      [houseid]
      );
    const averageRating = result.rows[0]?.averagerating || 0; // 確保有值，若無資料則返回 0
    res.status(200).json({ averageRating }); // 返回 JSON 格式的平均星級
  } catch (err) {
    console.error('獲取平均星級時出錯：', err.message);
    res.status(500).send('獲取平均星級時出錯');
  }
});

/*
app.get('/reviews', async (req, res) => {
  try {
    const result = await poolMember.query('SELECT advantages FROM employee.com'); // 假設有 reviews 表
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('獲取評論時出錯：', err.message);
    res.status(500).send('獲取評論時出錯');
  }
});
*/


app.get('/reviews', async (req, res) => {
  const { houseid } = req.query; // 從查詢參數中獲取 houseid
  if (!houseid) {
    return res.status(400).send('缺少 houseid');
  }

  try {
    // 假設資料表結構中有 `houseid` 欄位
    const result = await poolMember.query(
      'SELECT * FROM employee.com WHERE houseid = $1',
      [houseid]
    );
    res.status(200).json(result.rows); // 返回篩選後的評論
  } catch (err) {
    console.error('獲取評論時出錯：', err.message);
    res.status(500).send('獲取評論時出錯');
  }
});
/*
app.get('/reviews', async (req, res) => {
  try {
    const result = await poolMember.query("SELECT * FROM employee.com WHERE houseid = '9';");
    console.log("Query result:", result.rows); // 確認查詢結果
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('獲取評論時出錯：', err.message);
    res.status(500).send('獲取評論時出錯');
  }
});
*/

app.post('/verify-entrynumber', async (req, res) => {
  const { entrynumber } = req.body;

  try {
    const result = await poolMember.query(
      'SELECT 1 FROM employee.signup WHERE entrynumber = $1',
      [entrynumber]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ valid: true });
    } else {
      res.status(200).json({ valid: false });
    }
  } catch (error) {
    console.error('驗證參賽者號碼失敗：', error.message);
    res.status(500).send('伺服器錯誤');
  }
});





// 启动服务器
app.listen(5172, () => {
  console.log('Server running on port 5172');
});