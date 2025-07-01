import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import image from "../images/1.jpg";
import image2 from "../images/2.png";
import '../css/Modal.css';

function Elementary({ onClose }) {
  const photos = [image1, image2]; // 儲存所有圖片
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // 當前顯示的圖片索引

  // 切換到上一張圖片
  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  // 切換到下一張圖片
  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div>
        <button onClick={onClose} aria-label="Close">
          X
        </button>
        <div className="modal-left">
          <button
            className="photo-nav"
            onClick={handlePreviousPhoto}
            aria-label="Previous photo"
          >
            {'<'}
          </button>
          <img
            src={photos[currentPhotoIndex]} // 顯示當前圖片
            alt={`image${currentPhotoIndex + 1}`}
            className="image2"
          />
          <button
            className="photo-nav"
            onClick={handleNextPhoto}
            aria-label="Next photo"
          >
            {'>'}
          </button>
        </div>
        <div className="modal-right">
          <h2>田中鎮新民國民小學</h2>
          <p>提供者: 主辦方</p>
          <p>價格: 0</p>
          <p>地點: 520彰化縣田中鎮公館路320號</p>
          <p>數量: 帳蓬露營-80頂</p>
        </div>
      </div>
    </div>
  );
}

export default Elementary;




