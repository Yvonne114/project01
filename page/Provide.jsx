import { useState } from 'react';
import Axios from 'axios';
import '../css/MainForm.css';
import Header from './Header'; // 導入 Header 組件
import Footer from './Footer'; // 導入 Footer 組件
import { useNavigate } from 'react-router-dom';

const Provide = () => {

  const userId = localStorage.getItem('userId');
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [describe, setDescribe] = useState("");
  const [pictures, setPictures] = useState([]);  // 處理 "圖片"
  const [photos, setPhotos] = useState([]);      // 處理 "內部照片"
  const [price, setPrice] = useState("");
  const [lodgingList, setLodgingList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // 處理圖片文件變更
  const handlePicturesChange = (event) => {
    setPictures(Array.from(event.target.files)); // 將圖片文件列表轉換為數組並存儲到狀態中
  };

  // 處理內部照片文件變更
  const handlePhotosChange = (event) => {
    setPhotos(Array.from(event.target.files)); // 將內部照片文件列表轉換為數組並存儲到狀態中
  };
  console.log(userId);

  // 添加住宿的函數
  const addLodging = () => {
    const formData = new FormData();
    formData.append('userId', userId);  // 添加會員的 id
    formData.append('name', name);
    formData.append('owner', owner);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('describe', describe);
    formData.append('price', price);

    // 添加圖片
    pictures.forEach((picture) => {
      formData.append('pictures', picture);  // 添加每張圖片
    });

    // 添加內部照片
    photos.forEach((photo) => {
      formData.append('photos', photo);  // 添加每張內部照片
    });

    // 發送表單數據
    Axios.post('http://localhost:5172/lodging', formData, {
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
          price: price,
          pictures: pictures.map(picture => picture.name),
          photos: photos.map(photo => photo.name) // 只存儲圖片名稱
        }
      ]);
      setShowModal(true); // 成功後顯示彈出視窗
    }).catch(error => {
      console.error("表單提交錯誤", error);
      alert("表單提交錯誤: " + error.message);
    });
  };
  const navigate = useNavigate();
  // 關閉模態窗口的處理程序
  const handleModalClose = () => {
    setShowModal(false);
    navigate('/HomeMember');
    //window.location.href = "/"; // 使用 window.location.href 進行導航
  };

  return (
    <div className="body">
      <div className="lodgingform">
        <h1>提供住宿表單</h1>
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
        <label>價格:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <label>圖片:</label>
        <input 
          type="file" 
          multiple 
          onChange={handlePicturesChange} // 使用 handlePicturesChange 處理圖片
        />
        <label>內部照片:</label>
        <input 
          type="file" 
          multiple 
          onChange={handlePhotosChange} // 使用 handlePhotosChange 處理內部照片
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

export default Provide;