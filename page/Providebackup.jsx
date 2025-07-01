import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Provide = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [describe, setDescribe] = useState("");
  const [picture, setPicture] = useState(null); // 單張圖片

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setPicture(event.target.files[0]); // 選擇單個文件
  };

  const addProvide = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('describe', describe);
    formData.append('picture', picture); // 將圖片文件添加到表單數據中

    Axios.post('http://localhost:5171/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(() => {
      console.log("success");
      navigate('/Home');
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error submitting form: " + error.message);
    });
  };

  return (
    <div className="information">
      <div className="manager">
        <label>Provide Accommodation</label>
        <label>Name:</label>
        <input 
          type="text" 
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />

        <label>Phone:</label>
        <input 
          type="text" 
          placeholder="phone"
          onChange={(event) => setPhone(event.target.value)}
        />

        <label>Address:</label>
        <input 
          type="text" 
          placeholder="address"
          onChange={(event) => setAddress(event.target.value)}
        />

        <label>Describe:</label>
        <input 
          type="text" 
          placeholder="describe"
          onChange={(event) => setDescribe(event.target.value)}
        />

        <label>Picture:</label>
        <input 
          type="file" 
          onChange={handleFileChange} // 處理文件變更
        />

        <button onClick={addProvide}>Add Accommodation</button>
      </div>
    </div>
  );
};

export default Provide;