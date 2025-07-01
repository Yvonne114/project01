// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import afImage from '../images/af.jpg';
import { useNavigate } from 'react-router-dom';

const Newslots12 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };
 
  return (
      <div className="back2">
          <div className="news">11/10賽事日搭乘高鐵、火車建議行車路線圖</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            11/10賽事日將進行周邊道路管制，造成不便懇請見諒，欲搭乘高鐵與台鐵之民眾可參考建議路線圖。
            </div>
            <div className="af-image-container">
            <img src={afImage} className="af-image" alt="11/10賽事日搭乘高鐵、火車建議行車路線圖" />
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            詳細田中馬拉松資訊可參考:
            <a href="https://irunner.biji.co/Tianzhong2024" target="_blank" rel="noopener noreferrer">
            https://irunner.biji.co/Tianzhong2024
            </a>
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            也可以參考我們的ig，裡面有更多關於田中景點的內容喔!!:
            <a href="https://www.instagram.com/trhtm.nnn?igsh=MTBvd2Y2NzNsbDVmdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src={xImage} className="x-image" alt="instagram" />
            </a>
            </div>
      </div>
  );
};

export default Newslots12;