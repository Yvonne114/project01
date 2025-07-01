import React, { useState, useEffect } from 'react';
import '../css/Com.css';
import Axios from 'axios';
import ComModal from '../components/ReviewDrawer';
import { useNavigate, useLocation } from 'react-router-dom';

const Com1 = ({ houseid }) => {
 
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  // 開啟/關閉撰寫評論視窗
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const { house } = location.state || {};

  // 額外星級評分


  const [filterTags, setFilterTags] = useState([]);
  const [sortBy, setSortBy] = useState('最新');
  console.log(houseid);
  // 獲取評論數據
  /*
  useEffect(() => {
  Axios.get('http://localhost:5172/average-rating')
    .then((response) => {
      const { averageRating } = response.data;
      setAverageRating(parseFloat(averageRating) || 0); // 確保轉換為數字並處理無數據情況
    })
    .catch((error) => {
      console.error('獲取平均星級時出錯：', error);
    });

    /*
    Axios.get('http://localhost:5172/reviews')
    .then((response) => {
      setReviews(response.data);
    })
    .catch((error) => {
      console.error('獲取評論時出錯：', error);
    });
    

}, []);
*/

useEffect(() => {
  if (houseid) { // 確保有 houseid 時才發起請求
    Axios.get(`http://localhost:5172/average-rating?houseid=${houseid}`)
      .then((response) => {
        const averageRating = parseFloat(response.data?.averageRating || 0); // 確保數據為數字類型
        setAverageRating(averageRating); // 更新狀態
      })
      .catch((error) => {
        console.error('獲取平均星級時出錯：', error);
        setAverageRating(0); // 設置默認值以防止 UI 出錯
      });
  }
}, [houseid]);


useEffect(() => {
    if (houseid) {
        Axios.get(`http://localhost:5172/reviews?houseid=${houseid}`)
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error('Error fetching approved data:', error);
            });
    } else {
        console.error('House ID is missing');
    }
}, [houseid]);

  

/*
  useEffect(() => {
        if (house) {
            Axios.get(`http://localhost:5172/reviews?house=${house}`) // 將 userId 傳遞作為查詢參數
                .then((response) => {
                    setReviews(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching approved data:', error);
                });
        }
    }, [house]);
 */

    const handleSortChange = (e) => {
      setSortBy(e.target.value);
    };

  const filteredReviews = reviews
    .filter((review) =>
      filterTags.length === 0 || filterTags.every((tag) => review.tags?.includes(tag))
    )
    .sort((a, b) => {
      if (sortBy === '最新') return new Date(b.created_at) - new Date(a.created_at);
      if (sortBy === '最舊') return new Date(a.created_at) - new Date(b.created_at);
      if (sortBy === '星級最高') return b.rating - a.rating;
      if (sortBy === '星級最低') return a.rating - b.rating;
      return 0;
    });

  return (
    <div className="com-body">
      <div className="com-container">
        <div className="com-head">
          <h1>評論系統</h1>
          <div className="average-rating">
            整體星級平均：{Number.isFinite(averageRating) ? averageRating.toFixed(1) : '0.0'} ★
          </div>
          <button 
            className="openModalBtn"
            onClick={() => {setOpenModal(true)}}
          >
            撰寫評論
          </button>
          {openModal && <ComModal closeModal={setOpenModal}/>}
        </div>

        <div className="filter-sort">
          
          
        </div>
        <div className="reviews-list">
       <div className="reviews-container">
       
  {reviews.map((review, index) => (
    <div className="review-card" key={index}>
      <div className="review-header">
        <h3>{review.name}</h3>
        <span className="review-rating">{review.overallrating} ★</span>
      </div>
      <div className="review-content">
        <p><strong>優點：</strong> {review.advantages}</p>
        <p><strong>缺點：</strong> {review.disadvantages}</p>
        <p><strong>標籤：</strong> {review.tags || '無'}</p>
      </div>
    </div>
  ))}
</div>

      </div>

        
      </div>
    </div>
  );
};

export default Com1;



