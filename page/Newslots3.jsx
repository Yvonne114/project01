// src/components/NewsFlash.jsx
import React from 'react';
import '../css/News.css'; // Optional: 如果有額外樣式可以放這裡
import xImage from '../images/x.jpg';
import { useNavigate } from 'react-router-dom';

const Newslots3 = () => {

  const navigate = useNavigate();
  const oneClick = () => {
      navigate('/Food');
  };
const data = [
            ["車種", "車次", "順行/逆行", "始發站-終點站", "發車時間", "抵達時間"],
            ["自強", "102", "北上", "斗六-七堵", "斗六發車時間 5:00", "抵達田中時間 5:16"],
            ["區間車", "2120", "北上", "二水-基隆", "二水發車時間 5:14", "抵達田中時間 5:20"],
            ["區間快/延長嘉義始發", "2008", "北上", "嘉義-基隆", "預估嘉義發車時間 04:31", "預估抵達田中時間05:23"],
            ["區間車", "2124", "北上", "嘉義-基隆", "嘉義發車時間04:55", "抵達田中時間05:47"],
            ["區間車", "2128", "北上", "嘉義-銅鑼", "嘉義發車時間05:18", "抵達田中時間06:11"],
            ["區間車", "2134", "北上", "嘉義-基隆", "嘉義發車時間05:38", "抵達田中時間06:31"],
            ["自強", "170", "北上", "嘉義-花蓮", "嘉義發車時間05:56", "抵達田中時間 06:42"],
            ["區間/延長臺中始發", "3137", "南下", "臺中-潮州", "臺中發車時間04:35", "抵達田中時間 05:30"],
            ["區間快", "2901", "南下", "彰化-車埕", "彰化發車時間05:19", "預估抵達田中時間05:43"],
            ["莒光", "501", "南下", "彰化-潮州", "彰化發車時間05:25", "抵達田中時間05:49"],
            ["自強", "101", "南下", "臺中-潮州", "臺中發車時間05:35", "抵達田中時間06:14"],
            ["區間車", "3143", "南下", "彰化-新營", "彰化發車時間05:45", "抵達田中時間06:22"],
          ];
          return (
            <div className="back2">
            <div className="news">2024田中馬拉松賽事公告-臺鐵加班車事宜</div>
            
      <div className="content" style={{ marginBottom: '20px' }}>
      親愛的2024田中馬拉松選手您好，綠色賽事的路上有您有我，今年度大會向臺鐵爭取加開班次，感謝臺鐵配合安排凌晨時段延長始發站加開列車，以及下午列車增停田中站，以下為今年臺鐵班次資訊提供您參考，最新班次資訊仍以臺鐵公告為主。            </div>

            <div className="content" style={{ marginBottom: '20px' }}>
            針對自行開車前往之選手，亦可停車至加開班車沿線停靠之車站停車，搭乘加開班車前往會場，臺鐵田中站距離活動會場步行15分鐘即可抵達，敬請多加利用。            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            北上172 潮州-花蓮，自強號，增停田中站預估13:05發車。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            延長始發站與增停班次的確切時間，請於活動前一週於臺鐵網站確認。
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '20px' }}>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
            <div className="content" style={{ marginBottom: '20px' }}>
            更多班次資訊請參考臺鐵公司網站：
            <a href="https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime" target="_blank" rel="noopener noreferrer">
            https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime
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

export default Newslots3;