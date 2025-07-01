// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import { useNavigate } from 'react-router-dom';

const Newslots5 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };

  return (
      <div className="back2">
        <div className="news">選手物資寄送進度查詢網址</div>
            
      <div className="content" style={{ marginBottom: '20px' }}>
      大家期待的  
            <a href="https://www.facebook.com/hashtag/%E7%94%B0%E4%B8%AD%E9%A6%AC%E8%B3%BD%E5%89%8D%E7%89%A9%E8%B3%87" target="_blank" rel="noopener noreferrer">
            #田中馬賽前物資 
            </a>
            陸續寄送中!
            </div>        
            
            <div className="content" style={{ marginBottom: '20px' }}>
            選手物資寄送進度查詢:
            <a href="https://lddmap.com.tw/map/1160?fbclid=IwZXh0bgNhZW0CMTAAAR2xnoZTmAt_E-JUmTSQVg6s67TGCsrW1A2CHtBNK4Pjp1lWuIyHJo7U9PU_aem_2f4QEgD7bXaEoeZAuly4VQ" target="_blank" rel="noopener noreferrer">
            https://lddmap.com.tw/map/1160
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

export default Newslots5;