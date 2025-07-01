const express = require('express');
const bodyParser = require('body-parser'); 
const { Pool } = require('pg');
const cors = require('cors');
const multer = require('multer'); // 用來處理圖片上傳
const path = require('path'); // 用來處理檔案路徑

const app = express();
app.use(bodyParser.json()); 
app.use(cors());

const poolprovide = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'member',
  password: '1111',
  port: 5433,
});

// 設定 multer 來存儲圖片
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // 圖片將存放在 uploads 資料夾中
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 給圖片一個唯一的檔名
  }
});

const upload = multer({ storage: storage });

// 創建資料夾來存放圖片
const fs = require('fs');
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// 修改 POST 路徑來處理表單和圖片
app.post('/create', upload.single('picture'), async (req, res) => {
  const { name, phone, address, describe } = req.body;
  const picture = req.file ? req.file.filename : null; // 如果有圖片上傳，則存儲檔名

  try {
    const result = await poolprovide.query(
      'INSERT INTO provide (name, phone, address, describe, picture) VALUES ($1, $2, $3, $4, $5)',
      [name, phone, address, describe, picture]
    );
    res.send('Values Inserted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting values');
  }
});

const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

/*

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
*/

// 提供靜態圖片的路徑讓前端可以訪問


app.use('/uploads', express.static('uploads'));

/*
app.get('/provides', async (req, res) => {
  try {
    const result = await poolprovide.query("SELECT * FROM employee.lodging");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});
*/
/*
app.get('/provides', async (req, res) => {
  try {
    const result = await poolprovide.query("SELECT * FROM employee.lodging");
    
    // 將結果中的 photos 和 pictures 字段從字符串轉換為陣列
    const houses = result.rows.map(house => ({
      ...house,
      photos: JSON.parse(house.photos),  // 假設 house.photos 是字符串
      pictures: JSON.parse(house.pictures) // 假設 house.pictures 是字符串
    }));
    
    res.json(houses);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});


app.post('/update-status', async (req, res) => {
  const { name, status } = req.body;

  try {
    await poolprovide.query('UPDATE employee.lodging SET status = $1 WHERE name = $2', [status, name]);
    res.send('Status Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating status');
  }
});
*/

/*
app.get('/approved', async (req, res) => {
  try {
    const result = await poolprovide.query("SELECT * FROM employee.lodging WHERE status = '審核通過' AND id = $1", 
      [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching approved data',err);
    res.status(500).send('Error fetching data');
  }
});
*/

app.get('/approved', async (req, res) => {
  try {
    // 從 req.query 中獲取 userId
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).send('User ID is required');
    }

    // 使用參數化查詢來防止 SQL 注入攻擊
    const result = await poolprovide.query("SELECT * FROM employee.lodging WHERE id = $1", [userId]);

    // 返回查詢結果
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching approved data', err);
    res.status(500).send('Error fetching data');
  }
});

app.get('/result', async (req, res) => {
  try {
    const { userEntrynumber } = req.query;

    if (!userEntrynumber) {
      return res.status(400).send('User entrynumber is required');
    }
    const result = await poolprovide.query("SELECT * FROM employee.signup WHERE status = 'confirmed' AND entrynumber = $1", [userEntrynumber]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching approved data',err);
    res.status(500).send('Error fetching data');
  }
});

app.get('/checksearch', async (req, res) => {
  try {
    const result = await poolprovide.query("SELECT * FROM employee.signup");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

app.post('/update-status-search', async (req, res) => {
  const { name, status } = req.body;

  try {
    await poolprovide.query('UPDATE employee.signup SET status = $1 WHERE name = $2', [status, name]);
    res.send('Status Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating status');
  }
});

/*
app.get('/approved', async (req, res) => {
  try {
    // 定義 SQL 查詢語句，選擇狀態為 '審核通過' 的住宿
    const query = "SELECT * FROM employee.lodging WHERE status = '審核通過'";

    // 執行查詢
    const result = await poolprovide.query(query);

    // 解析查詢結果中的 'photos' 和 'pictures' 字段
    const approvedHouses = result.rows.map(house => ({
      ...house,
      photos: JSON.parse(house.photos),   // 將 photos 字段轉換為 JSON 陣列
      pictures: JSON.parse(house.pictures) // 將 pictures 字段轉換為 JSON 陣列
    }));

    // 返回解析後的住宿數據
    res.json(approvedHouses);
  } catch (err) {
    // 如果出錯，記錄錯誤並返回500狀態碼
    console.error('Error fetching approved data', err);
    res.status(500).send('Error fetching data');
  }
});
*/


app.listen(5171, () => {
  console.log('Running on port 5171');
});

