import React, { useState } from 'react';
import '../css/Modal.css';
//import Com from './Com';

function Modal({ house, onClose }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  if (!house) return null; // 如果 house 不存在，不渲染 Modal

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : house.photos.length - 1
    );
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex < house.photos.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="closebutton" onClick={onClose} aria-label="Close">
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
            src={`http://localhost:5172/images/${house.photos[currentPhotoIndex]}`} 
            alt={house.name} 
            style={{ width: '300px', height: '300px' }} 
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
          <h2>{house.name}</h2>
          <p>提供者: {house.owner}</p>
          <p>價格: ${house.price}</p>
          <p>地點: {house.address}</p>
          <p>描述: {house.describe}</p>


        </div>



      </div>
    </div>
  );
}

export default Modal;

