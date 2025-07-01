import React, { useState } from 'react';
import Axios from 'axios';

const Nlottery = () => {
  const houseIdMapping = {
    '活動中心地舖區-300席': 6,
    '光電球場帳蓬露營-40頂': 7,
    '活動中心1F地舖區-300席': 8,
    '活動中心2F-50席': 9,
    '活動中心3F(限女性)-50席': 10,
    '川石園帳蓬露營-50頂': 11,
    '帳蓬露營-80頂': 12,
    '地舖區90席': 13,
    '選手村居民住宿-田中老街335': 14,
    '選手村居民住宿-田中老街723': 15
  };
  const initialParticipants = {
    '活動中心地舖區-300席': [],
    '光電球場帳蓬露營-40頂': [],
    '活動中心1F地舖區-300席': [],
    '活動中心2F-50席': [],
    '活動中心3F(限女性)-50席': [],
    '川石園帳蓬露營-50頂': [],
    '帳蓬露營-80頂': [],
    '地舖區90席': [],
    '選手村居民住宿-田中老街335': [],
    '選手村居民住宿-田中老街723': []
  };

  const [drawnParticipants, setDrawnParticipants] = useState(initialParticipants);

  const drawLottery = (houseId) => {
    Axios.get(`http://localhost:5172/draw/${houseId}`)
      .then(response => {
        const winners = response.data.winners;
        if (winners.length > 0) {
          setDrawnParticipants(prev => ({
            ...prev,
            [houseId]: winners
          }));
        } else {
          alert("未抽中任何參賽者");
        }
      })
      .catch(err => {
        console.error("錯誤", err);
        alert("抽獎過程中出現錯誤");
      });
  };

  const confirmWinners = (zone) => {
    const winners = drawnParticipants[zone];
    if (winners.length > 0) {
      const houseId = houseIdMapping[zone]; // 獲取對應的houseId
      Axios.post(`http://localhost:5172/confirmWinners`, { houseId, winners })
        .then(() => {
          alert(`${zone} 的中籤參賽者已確認`);
        })
        .catch(err => {
          console.error("確認失敗", err);
          alert('確認失敗，請稍後重試');
        });
    } else {
      alert("尚無抽中的參賽者，無法確認");
    }
  };
  

  const clearDrawnParticipants = () => {
    Axios.get('http://localhost:5172/resetDrawnParticipants')
      .then(() => {
        setDrawnParticipants(initialParticipants);
        alert("已清空抽中的參賽者");
      })
      .catch(err => {
        console.error("清空失敗", err);
        alert('清空失敗，請稍後重試');
      });
  };

  return (
    <div className="main">
    <div className="lottery-container">
      <h1 className="lottery-title">抽籤系統</h1>
      {Object.keys(drawnParticipants).map((zone) => (
        <div key={zone}>
          <button onClick={() => drawLottery(zone)} className="lottery-button">{zone}</button>
          <button onClick={() => confirmWinners(zone)} className="confirm-but">確認</button>
        </div>
      ))}
      <button onClick={clearDrawnParticipants} className="lottery-button">清空</button>
      
      <h2 className="lottery-title">各區抽中的參賽者號碼:</h2>
      {Object.entries(drawnParticipants).map(([zone, winners]) => (
        <div key={zone} className="lottery-results"><br />
          <h3 className="lottery-results">{zone}:</h3>
          {winners.length > 0 ? (
            <ul className="lottery-results">
              {winners.map(winner => (
                <li key={winner} className="lottery-results">{winner}</li>
              ))}
            </ul>
          ) : (
            <p className="lottery-results">尚無抽獎結果</p>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Nlottery;