// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import { useNavigate } from 'react-router-dom';
 
const Newslots1 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };

  const secClick = () => {
      navigate('/Food');
  };

  const thirdClick = () => {
      navigate('/Food');
  };

  return (
      <div className="back2">
            <div className="news">中籤公告</div>
            
      <div className="content" style={{ marginBottom: '20px' }}>
      感謝跑友熱烈支持2024年 台灣米倉田中馬拉松，累計至06/15 24:00為止，共有33,341位選手登記抽籤(不含鄉親、外籍選手名額、公益名額)，大會於今日2024年6月17日上午10點抽出全馬選手2,918人，半馬選手5,068人，健跑組選手5,113人，共抽出13,099人，中籤比率38.04%。
            </div>

            <div className="content" style={{ marginBottom: '20px' }}>
            今年個人登記人數9,169人，團體登記人數25,265人，比率36.29%；從個人登記訂單中抽出3,497人，團體登記訂單中抽出9,602人，個人/團體中籤比率36.42%
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            大會將於2024/6/17中午12點開始發送中籤訂單的中籤通知信到領隊的電子信箱，並同步開放選手查詢是否中籤，為方便選手查詢，只需輸入選手個人身分證字號跟出生年月日即可查詢，無須訂單編號及領隊身分證字號
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            提醒選手：因最近詐騙案件眾多，為免選手受騙，中籤通知信不會含選手繳費代碼或ATM虛擬帳號，請選手到「報名網站」點選「報名查詢與修改」取得繳費資訊。本賽事適用青春動滋劵扣抵報名費，選手可先扣抵後產生新的繳費資訊再行繳費，繳費期限 2024/6/20 24:00前。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            <a href="https://cdntwirunner.biji.co/reg/527/b1a8766a55cb031596c3b0249323c857a70d4d63.pdf" target="_blank" rel="noopener noreferrer">
             2024 台灣米倉田中馬拉松中籤名單20240617.pdf
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

export default Newslots1;