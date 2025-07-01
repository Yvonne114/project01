import '../css/Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const navigate = useNavigate();

 /* 
  const login = () => {
    axios.post('http://localhost:5172/login', { 
      id: id,
      password: password
    })
    .then(response => {
      console.log("Success:", response.data);
      localStorage.setItem('userId', user.id);
      localStorage.setItem('userName', user.name);
      navigate('/HomeMember');
    })
    .catch(error => {
      console.error("Error:", error);
      alert('帳號或密碼錯誤');
    });
  };
  */

  const login = () => {
  axios.post('http://localhost:5172/login', { 
    id: id,
    password: password
  })
  .then(response => {
    // 確保回應數據是數組並且有至少一個元素
    if (Array.isArray(response.data) && response.data.length > 0) {
      const user = response.data[0];  // 取得數組中的第一個元素
      localStorage.setItem('userId', user.id);
      //localStorage.setItem('userPassword', user.password); // 如果你需要密碼
      navigate('/HomeMember');
    } else {
      alert('無法找到該帳號的資料');
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert('帳號或密碼錯誤');
  });
};


  const register = () => {
    axios.post('http://localhost:5172/create', { 
      id: id,
      password: password
    })
    .then(response => {
      console.log("Success:", response.data);
      navigate('/login')
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  return (
    <div className="App">

      <div className="container">
        {isLogin ? (
          <div className="form-section login-section">
            <h1>登入</h1>
            <label htmlFor="id">帳號:</label>
            <input 
              id="id"
              type="text"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
            <label htmlFor="password">密碼:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={login} className="butto">登入</button>
            <p>
              沒有帳號?<button onClick={() => setIsLogin(false)} className="butto">註冊</button>
            </p>
          </div>
        ) : (
          <div className="form-section register-section">
            <h2>註冊</h2>
            <label htmlFor="id">帳號:</label>
            <input 
              id="id"
              type="text"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
            <label htmlFor="password">密碼:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={register} className="butto">註冊</button>
            <p>
              已有帳號? <button onClick={() => setIsLogin(true)} className="butto">登入</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;