import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import image from "../images/2.png";
//import ImageSlide from '../components/ImageSlide';
import NewsFlash from '../components/News';
import Contact from '../components/Contact'; 

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/Book');
  };
  const checkClick = () => {
      navigate('/Trans');
  };
  const foodClick = () => {
      navigate('/Food');
  };


    return (
      <div className="body1">
      <div className="home-upbut">
        <button onClick={handleClick} className="home-button">住宿預訂</button>
        <button onClick={checkClick} className="home-button">查詢</button>
        <button onClick={foodClick} className="home-button">美食地圖</button>

      </div>
        <div className="image-container1">
          <img src={image} alt="image" className="image1"/>
          
        </div>
        
        <h2 className="news">最新快訊</h2>
        <NewsFlash />
        <Contact />
        
      </div>
    )

};

export default Home;