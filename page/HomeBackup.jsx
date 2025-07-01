import React from 'react';
import { useNavigate } from 'react-router-dom';
//import '../css/Home.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import image from "../images/2.png";


const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="navhome">
      <div className="image-container">
        <img src={image} alt="image" class="image"/>
        <h1 className="overlay-text1">探索</h1>
        <h1 className="overlay-text">田中馬拉松</h1>
      </div>
      <nav className="navhome">
        <ul className="ulhome">
          <li className="lihome">
          <Link to="/Hotels">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" class="bed"><path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/></svg>
            <h4>住宿概覽</h4>
          </Link>
          </li>
          <li className="lihome">
          <Link to="/Signup">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" class="car"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/></svg>
            <h4>交通資訊</h4>
          </Link>
          </li>
          <li className="lihome">
          <Link to="/Food">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" class="eat"><path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>
            <h4>美食地圖</h4>
          </Link>

          </li>

        </ul>
      </nav>
      <h1>about</h1>
      <h1>about us</h1>
    </div>
  )

};

export default Home;
