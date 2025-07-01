// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import { useNavigate } from 'react-router-dom';

const Newslots2 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };

  return (
      <div className="back2">
            <div className="news">備取中籤公告</div>
            
      <div className="content" style={{ marginBottom: '20px' }}>
      大會於今日2024/06/24抽出逾期繳費釋出名額：全馬13名、半馬52名、健跑組38名，共103名。大會並將於中午12點開始發送中籤通知信到中籤訂單領隊的電子信箱，並同步開放選手查詢是否中籤，為方便選手查詢，只需輸入選手個人身分證字號跟出生年月日即可查詢，無須訂單編號及領隊身分證字號。            </div>

            <div className="content" style={{ marginBottom: '20px' }}>
            請於2024/06/27 24:00前繳費，逾期未繳費，參賽資格將被取消。            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            提醒選手：因最近詐騙案件眾多，為免選手受騙，中籤通知信不會含選手繳費代碼或ATM虛擬帳號，請選手到「報名網站」點選「報名查詢與修改」取得繳費資訊進行繳費。本賽事適用青春動滋劵扣抵報名費，選手可先扣抵後產生新的繳費資訊再行繳費，繳費期限 2023/6/27 24:00前。             </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            <a href="https://cdntwirunner.biji.co/reg/527/301d1b3c39dd76bcea9ceaf9e6bc5932e23a1444.pdf" target="_blank" rel="noopener noreferrer">
            2024 台灣米倉田中馬拉松第二次中籤名單.pdf
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
            <br />
            <br />
            </div>
      </div>
  );
};

export default Newslots2;