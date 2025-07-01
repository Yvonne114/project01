// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import adImage from '../images/ad.jpg';
import aeImage from '../images/ae.jpg';

import { useNavigate } from 'react-router-dom';

const Newslots11 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };

  return (
      <div className="back2">
          <div className="news" >11/10賽事日交通管制表/圖</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            11/10賽事日將進行周邊道路管制，敬請鄉親改道，造成不便懇請見諒。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            <a href="https://cdntwirunner.biji.co/reg/527/0b769e311bea5c63a1462b7b12841ef51d91558e.pdf" target="_blank" rel="noopener noreferrer">
            家戶通知_管制_晚會流程_背面(公告).pdf
            </a>
            </div>
            <img src={adImage} className="ad-image" alt="11/10賽事日交通管制表/圖" />
            <img src={aeImage} className="ae-image" alt="11/10賽事日交通管制表/圖" />
            
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

export default Newslots11;