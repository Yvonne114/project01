import { useState } from 'react';
import Axios from 'axios';
import '../css/MainForm.css';
import Header from './Header'; // 導入 Header 組件
import Footer from './Footer'; // 導入 Footer 組件

const Reservation = () => {

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [describe, setDescribe] = useState("");
  const [pictures, setPictures] = useState([]);
  const [lodgingList, setLodgingList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // 處理文件變更
  const handleFileChange = (event) => {
    setPictures(Array.from(event.target.files)); // 將文件列表轉換為數組並存儲到狀態中
  };

  // 添加住宿的函數
// 添加住宿的函數
const addLodging = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('owner', owner);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('describe', describe);
    pictures.forEach((picture) => {
      formData.append('pictures', picture); // 修改為 'pictures'
    });
  
    // 發送整合的表單和 JSON 數據
    Axios.post('http://localhost:3001/lodging', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      console.log("表單已成功提交");
      setLodgingList([
        ...lodgingList,
        {
          name: name, 
          owner: owner, 
          phone: phone, 
          address: address, 
          describe: describe,
          pictures: pictures.map(picture => picture.name) // 只存儲圖片名稱
        }
      ]);
      setShowModal(true); // 成功後顯示彈出視窗
    }).catch(error => {
      console.error("表單提交錯誤", error);
      alert("表單提交錯誤: " + error.message);
    });
  }
  
  // 關閉模態窗口的處理程序
  const handleModalClose = () => {
    setShowModal(false);
    window.location.href = "/"; // 使用 window.location.href 進行導航
  };

  return (
    <div className="body">
      <div className="lodgingform">
        <h1>住宿表單</h1>
        <label>名稱:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>擁有者:</label>
        <input 
          type="text"
          onChange={(event) => {
            setOwner(event.target.value);
          }}
        />
        <label>電話:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <label>地址:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <label>描述:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setDescribe(event.target.value);
          }}
        />
        <label>圖片:</label>
        <input 
          type="file" 
          multiple 
          onChange={handleFileChange}
        />

        <button onClick={addLodging}>新增住宿</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>表單已成功提交</p>
            <button onClick={handleModalClose}>返回主頁</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Reservation;