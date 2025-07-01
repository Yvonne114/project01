import '../css/Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Trans() {
  const [entrynumber, setEntrynumber] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

/*
  const search = () => {
    axios.post('http://localhost:5172/search', { 
      entrynumber: entrynumber
    })
    .then(response => {
      console.log("Success:", response.data);
      localStorage.setItem('userEntrynumber', user.entrynumber);
      navigate('/Search');
    })
    .catch(error => {
      console.error("Error:", error);
      alert('帳號或密碼錯誤');
    });
  };
  */

  const search = () => {
  axios.post('http://localhost:5172/search', { 
    entrynumber: entrynumber
  })
  .then(response => {
    // 確保回應數據是數組並且有至少一個元素
    if (Array.isArray(response.data) && response.data.length > 0) {
      const user = response.data[0];  // 取得數組中的第一個元素
      localStorage.setItem('userEntrynumber', user.entrynumber);
      
      navigate('/Search');
    } else {
      alert('無法找到該帳號的資料');
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert('帳號或密碼錯誤');
  });
};


  return (
    <div className="App">

      <div className="container">

          <div className="form-section login-section">
            <h2>查詢預訂狀況</h2>
            <label htmlFor="entrynumber">參賽號碼:</label>
            <input 
              entrynumber="entrynumber"
              type="text"
              value={entrynumber}
              onChange={(event) => setEntrynumber(event.target.value)}
            />
            <button onClick={search} className="butto">登入</button>
          </div>

      </div>

      <h1>{loginStatus}</h1> 
</div>
  );
}


export default Trans;