// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import yImage from '../images/y.jpg';
import { useNavigate } from 'react-router-dom';

const Newslots6 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };

  return (
      <div className="back2">
        <div className="news">場地配置圖與品牌攤位列表</div>
            <div className="y-image-container">
            <img src={yImage} className="y-image" alt="場地配置圖與品牌攤位列表" />
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

export default Newslots6;