import React, { useState } from "react";
import "../css/Detail.css";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Com1 from "../page/Com1";

const Detail = () => {
  const location = useLocation();
  //const house = location.state?.house;
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const { house } = location.state || {};

  // 本地圖片路徑 (替換為你的實際圖片路徑)
  /*
  const photos = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
  ];
  */
  if (!house) {
    return <div>無法獲取房間資訊。</div>;
  }
  const photos = house.pictures || []; // 使用房間的圖片
  /*
  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };
  */

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : house.photos.length - 1
    );
  };

  const reviews = [
    { id: 1, name: "John", comment: "Great place!", rating: 5 },
    { id: 2, name: "Alice", comment: "Clean and cozy.", rating: 4 },
  ];

/*
  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };
  

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };
*/

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex < house.photos.length - 1 ? prevIndex + 1 : 0
    );
  };
  return (
    <div className="dormitory-container">
      <header className="dormitory-header">{house.name}</header>

      <div className="dormitory-content">
        {/* 中間左邊：圖片輪播 */}
        <div className="modal-left">
          <button
            className="photo-nav"
            onClick={handlePreviousPhoto}
            aria-label="Previous photo"
          >
            {"<"}
          </button>
          {photos.length > 0 ? (
            <img
              src={`http://localhost:5172/images/${photos[currentPhotoIndex]}`}
              alt={`Photo ${currentPhotoIndex + 1}`}
              className="carousel-photo"
            />
          ) : (
            <p>無圖片可顯示</p>
          )}
          <button
            className="photo-nav"
            onClick={handleNextPhoto}
            aria-label="Next photo"
          >
            {">"}
          </button>
        </div>

        
      </div>

      <div className="dormitory-description">
        <h2>提供者：</h2>
        <p>{house.owner}</p>
        <h2>地點：</h2>
        <p>{house.address}</p>
        <h2>簡介：</h2>
        <p>{house.describe}</p>
        <h2>價格：</h2>
        <p>{house.price}</p>

      </div>




      <div className="dormitory-reviews">
        <Com1 houseid={house.num} />
        
      </div>
    </div>
  );
};

export default Detail;
