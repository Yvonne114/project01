// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import zImage from '../images/z.jpg';
import aaImage from '../images/aa.jpg';
import abImage from '../images/ab.jpg';
import { useNavigate } from 'react-router-dom';

const Newslots7 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };

  return (
      <div className="back2">
        <div className="news">賽事日11/10停車接駁資訊/大客車建議路線</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            一、賽事週日停車場接駁車
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            台灣高鐵彰化站周邊停車場、周邊停車：
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            建議停放台灣高鐵彰化站周邊鄰近接駁點的停車場與路邊停車後轉乘接駁車，以免因尋找車位延誤您的起跑時間，本會備有停車場巡迴接駁車，於尖峰時刻巡迴接駁，可多加利用。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            本次接駁車8部，平均3分鐘或接駁車內選手搭滿7分滿，即發車
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            ■接駁點：
            <div className="content" style={{ marginBottom: '20px' }}>
            1.
            <a href="https://www.google.com/maps/place/23%C2%B052'20.8%22N+120%C2%B034'22.9%22E/@23.872434,120.5708409,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x4f4937c84ae4cba8!7e2!8m2!3d23.8724337!4d120.5730354?shorturl=1" target="_blank" rel="noopener noreferrer">
            停車場周邊-台灣高鐵彰化站橋下（高鐵二路二段/大社路路口）
            </a>
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            2.
            <a href="https://www.google.com/maps/search/23.861414,+120.580139?entry=tts&g_ep=EgoyMDI0MTAyOS4wIPu8ASoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            田中馬會場-田中消防分隊對面（斗中路/梅州街口）
            </a>
            </div>
            </div>
            <div className="af-image-container">
            <img src={zImage} className="z-image" alt="停車場周邊-台灣高鐵彰化站橋下（高鐵二路二段/大社路路口）" />
            <img src={aaImage} className="aa-image" alt="停車場周邊-台灣高鐵彰化站橋下（高鐵二路二段/大社路路口）" />
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            ■接駁時間：賽事日週日04:50～07:10、09:00～13:30，最後一班次13:30從會場準時出發。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            ■車程：約8-10分鐘。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            ■其他提醒：抵達會場後，請從梅州街前往會場。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            二、大型遊覽車建議路線及停車規劃
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            若您的團體有另外規劃遊覽車往返會場，請轉至斗中路一段(藍色箭頭標示) → 田中馬會場-全家對面(下車處)，團體下車後請依照現場交管人員指示原地迴轉(如紅色箭頭標示)，走斗中路一段至東彰南路或台灣高鐵周邊依現場交管人員指示停車。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            或可路邊暫停至會場周邊中正路邊，放團體下車後（選手步行至會場約5分鐘）再前往停車。
            </div>
            <div className="af-image-container">
            <img src={abImage} className="ab-image" alt="停車場周邊-台灣高鐵彰化站橋下（高鐵二路二段/大社路路口）" />
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

export default Newslots7;