import React, { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import './App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { Link } from "react-router-dom";


const ManagerLogin = () => {
	const [account, setAccount] = useState("");
  	const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();

/*
  const login = () => {
    Axios.post('http://localhost:5172/member-login', {
      id: id, 
      password: password
    }).then((response) => {

      if(response.data.message) {
        localStorage.setItem('userId', user.id);
          console.log(response.data);
          console.log(userId);
          //setLoginStatus(response.data.message);
          
      }
      else {
          //setLoginStatus(response.data[0].account)
          navigate('/Welcome');
          localStorage.setItem('userId', user.id);
          console.log(userId);

      }
      
    });
  };
*/
/*
  const login = () => {
  Axios.post('http://localhost:5172/member-login', { 
    account: account,
    password: password
  })
  .then(response => {
    // 確保回應數據是數組並且有至少一個元素
    if (Array.isArray(response.data) && response.data.length > 0) {
      const user = response.data[0];  // 取得數組中的第一個元素
      localStorage.setItem('userAccount', user.account);
      navigate('/Welcome');
    } else {
      alert('無法找到該帳號的資料');
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert('帳號或密碼錯誤');
  });
};
*/

    const login = () => {
  axios.post('http://localhost:5172/member-login', { 
    account: account,
    password: password
  })
  .then(response => {
      //localStorage.setItem('userAccount', user.account);
      
      navigate('/Welcome');
  })
  .catch(error => {
    console.error("Error:", error);
    alert('帳號或密碼錯誤');
  });
};

  return( 
  <div className="App">
    <div className="container">
      <div className="form-section login-section">
        <h1>管理員登入</h1>
        <label htmlFor="account">帳號:</label>
        <input 
          
          type="text" 
          value={account}
          onChange={(event) => setAccount(event.target.value)}
        />

        <label htmlFor="password">密碼:</label>
        <input
          
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={login} className="butto">登入</button>
      </div>
    </div>
  </div>

    );

};

export default ManagerLogin;