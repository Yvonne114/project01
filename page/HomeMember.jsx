import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import image from "../images/2.png";
import NewsFlash from '../components/News';

const userId = localStorage.getItem('userId');
const userName = localStorage.getItem('userName');
console.log(userId);

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/Provide');
  };
  const checkClick = () => {
      navigate('/SearchMember');
  };
  const foodClick = () => {
      navigate('/Food');
  };

    return (
      <div className="body1">
      <div className="home-upbut">
        <button onClick={handleClick} className="home-button">提供住宿</button>
        <button onClick={checkClick} className="home-button">查詢</button>
        <button onClick={foodClick} className="home-button">美食地圖</button>
      </div>
        <div className="image-container1">
          <img src={image} alt="image" className="image1"/>
        </div>

        <h2 className="news">最新快訊</h2>
        <NewsFlash />

        <nav className="nav">
          
          <div className="text1">

          <br />
          <h1 >關於我們</h1>
          <p>
          
                電話 04-8753520 <br />

                信箱 520running@gmail.com <br />

                地址 No. 345, Xinggong Rd., Tianzhong Township, Changhua County 520, Taiwan (R.O.C.)  

          </p>
          <br />
          </div>
        </nav>
      </div>
    )
};

export default Home;