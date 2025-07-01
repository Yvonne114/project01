import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../css/MainPage.css';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';  // 引入useNavigate
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainPage() {
  const [houses, setHouses] = useState([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [people, setPeople] = useState(1);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBookingInfo, setShowBookingInfo] = useState(false);
  const navigate = useNavigate();  // 初始化useNavigate


  useEffect(() => {
    // 獲取房間數據
    Axios.get('http://localhost:5172/houses')
      .then(response => {
        setHouses(response.data);
      })
      .catch(error => {
        console.error('Error fetching houses:', error);
      });
  }, []);

   const handleNextClick = () => {
   navigate('/Signup', { state: { checkIn, checkOut, people, selectedHouse } }); // 傳遞訂房資料; // 跳转到 signup 页面
  };

    const StatusChange = (name, event) => {
    const newStatus = event.target.value;
    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [name]: newStatus,
    }));
  };

  const updateStatus = (name) => {
    const status = selectedStatus[name];

    if (status) {
      console.log('Updating status for:', name, 'to', status); // 添加日志
      Axios.post('http://localhost:5171/update-status', {
        name: name,
        status: status,
      })
        .then(() => {
          console.log('Status updated successfully');

          setHouses((prevHouses) =>
            prevHouses.map((house) =>
              house.name === name ? { ...house, status: status } : house
            )
          );
        })
        .catch((error) => {
          console.error('Error updating status', error);
        });
    }
  };

  const itemsPerPage = 3;
  const totalPages = Math.ceil(houses.length / itemsPerPage);

  /*
  const handleShowMore = (house) => {
    alert(`顯示更多: ${house.name}`);
    setSelectedHouse(house);
    setShowModal(true);
  };
  */

  const handleShowMore = (house) => {
  navigate('/Detail', { state: { house } }); // 傳遞該房間的詳細資訊
};

  const handleConfirm = (house) => {
    alert(`確定: ${house.name}`);
    setSelectedHouse(house);
    setShowBookingInfo(true); 
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageSelect = (e) => {
    setCurrentPage(Number(e.target.value));
  };



const currentHouses = Array.isArray(houses) 
    ? houses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];
/*
    const bookinfo = () => {
    if (!checkIn || !checkOut || !selectedHouse) {
      alert("請確保所有信息已選擇完整");
      return;
    }

    // 從 selectedHouse 中獲取 name, owner, price
    const { name, owner, price } = selectedHouse;

    Axios.post('http://localhost:5172/bookinfo', { 
      checkIn: checkIn,
      checkOut: checkOut,
      people: people,
      name: name,    // 從 selectedHouse 提取
      owner: owner,  // 從 selectedHouse 提取
      price: price   // 從 selectedHouse 提取
    })
    .then(response => {
      console.log("Success:", response.data);
      setShowModal2(true);
      // 可以根據需求添加導航到另一個頁面
      // navigate('/Home') 
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };
*/
  return (
    <div className="App">
      {/* 中間內容區塊 */} 
      <main className="App-main">
        {/* 橫一：標題 */}
        <section className="title-section">
          <h1>Book a Room</h1>
        </section>

        {/* 橫二：選項 */}
        <section className="options-section">
          <div className="date-picker">
            <label htmlFor="check-in">Check-in:</label>
            <input 
              type="date" 
              id="check-in" 
              value={checkIn} 
              onChange={(e) => setCheckIn(e.target.value)} 
            />
            <label htmlFor="check-out">Check-out:</label>
            <input 
              type="date" 
              id="check-out" 
              value={checkOut} 
              onChange={(e) => setCheckOut(e.target.value)} 
            />
          </div>
          <div className="people-picker">
            <label htmlFor="people">人數:</label>
            <select 
              id="people" 
              value={people} 
              onChange={(e) => setPeople(e.target.value)}
            >
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}人房</option>
              ))}
            </select>
          </div>
        </section>
          
        <p></p>

        {/* 橫三：房子資訊和預定訊息 */}

        <section className="houses-section">
          <div className="houses-pagination-container">
            <div className="houses-list">
                {currentHouses.map((house) => (
                <div className="house-card" key={house.id}>
                    <div className="house-info-container">
                    <div className="house-photo">
                        <img 

                          src={`http://localhost:5172/images/${house.pictures[0]}`} 
                          alt={house.name} 
                          style={{ width: '150px', height: '150px' }} 
                          />

                    </div>
                    <div className="house-info">
                        <h4>{house.name}</h4>
                        <p>提供者: {house.owner}</p>
                        <button onClick={() => handleShowMore(house)}>顯示更多</button>
                    </div>
                    <div className="house-price">
                        <p>價格: ${house.price}</p>
                        <button onClick={() => handleConfirm(house)}>確定</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            
            <div className="pagination-controls">
                <button onClick={handlePreviousPage}>上一頁</button>
                <select onChange={handlePageSelect} value={currentPage}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                    第 {i + 1} 頁
                    </option>
                ))}
                </select>
                <button onClick={handleNextPage}>下一頁</button>
            </div>
          </div>

          {/* 只有在 showBookingInfo 為 true 時才顯示“您的住宿訊息” */}
          {/* "您的住宿訊息"區塊 */}
          <div className="booking-info">
            <h2>您的住宿訊息</h2>
            <p>Check-in: {checkIn || '未選擇'}</p>
            <p>Check-out: {checkOut || '未選擇'}</p>
            <p>人數: {people} 人</p>
            {selectedHouse && (
              <>
                <p>基本訊息: {selectedHouse.name} by {selectedHouse.owner}</p>
                <p>Total: ${selectedHouse.price}</p>
              </>
            )}
            <button className="next-button" onClick={handleNextClick}>下一步</button>
          </div>
        
        </section>

         {/* 如果 showModal 為 true，顯示 Modal */}
         {showModal && (
          <Modal
            house={selectedHouse}
            onClose={() => setShowModal(false)}
          />
        )}
      </main>
    </div>
  );
}

export default MainPage;
