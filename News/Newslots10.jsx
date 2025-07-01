// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import { useNavigate } from 'react-router-dom';

const Newslots10 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };

  return (
      <div className="back2">
        <div className="news">賽事大會手冊</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            賽事大會手冊已公告，請各位選手詳閱賽事資訊、活動流程、交通資訊等
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            <a href="https://www.tianzhongmarathon.com/2024%E7%94%B0%E4%B8%AD%E9%A6%AC%E8%B3%BD%E4%BA%8B%E6%89%8B%E5%86%8A" target="_blank" rel="noopener noreferrer">
            【賽事大會手冊】
            </a>
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

export default Newslots10;