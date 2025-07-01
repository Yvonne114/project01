// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import { useNavigate } from 'react-router-dom';

const Newslots8 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };

  return (
      <div className="back2">
        <div className="news" >選手之夜11/09週六交通資訊</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            參加米寶親子裝扮路跑的選手、520心田中音樂節與相關系列活動民眾，建議多加利用大眾交通運輸工具前往活動現場。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            ■臺鐵：搭乘台鐵至田中火車站，步行15分鐘即可抵達活動現場，沿途路經田中小鎮許多美食，歡迎步行前往。更多班次資訊請參考
            <a href="https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime" target="_blank" rel="noopener noreferrer">
            臺鐵網站。
            </a>
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            ■高鐵：搭乘高鐵至彰化站，轉乘7號高鐵快捷公車，下新民國小或田中火車站皆步行15分鐘即可抵達活動現場。更多班次與轉乘資訊請參考
            <a href="https://www.thsrc.com.tw/" target="_blank" rel="noopener noreferrer">
            高鐵網站。
            </a>
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            ■歡迎騎乘MOOVO公共自行車，除臨近田中鎮公所站點外，活動現場設有臨時站點「
             <a href="https://www.google.com/maps/place/23%C2%B051'35.0%22N+120%C2%B034'54.3%22E/@23.859725,120.581759,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.859725!4d120.581759?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
             鎮政三街東路口
            </a>
            」，公共自行車數量有限。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            ■MOOVO公共自行車站點：田中高鐵站、田中火車站、田中鎮公所、三潭國小、新民國小、田中派出所、田中高中、田中農會、新庄社區活動中心(臨時站點，供選手村選手租借)、活動會場。關於MOOVO租借流程與站點介紹請參考
             <a href="https://www.ridemoovo.com/" target="_blank" rel="noopener noreferrer">
             MOOVO官網。
            </a>
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            ■停車資訊：會場周邊停車空間有限，建議可停至高鐵周邊停車場，轉乘7號高鐵快捷公車，下新民國小或田中火車站皆步行15分鐘即可抵達活動現場。
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

export default Newslots8;