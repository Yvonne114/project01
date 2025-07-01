import React, { useState } from 'react';
import Axios from 'axios';
import '../css/ReviewDrawer.css';
import { useNavigate, useLocation } from 'react-router-dom';

const ComModal = ({ closeModal }) => {
  const [overallRating, setOverallRating] = useState(0);
  const [locationRating, setLocationRating] = useState(0);
  const [advantages, setAdvantages] = useState('');
  const [disadvantages, setDisadvantages] = useState('');
  const [name, setName] = useState('');
  const [entrynumber, setEntrynumber] = useState('');
  const [tags, setTags] = useState([
    { name: '清潔', selected: false },
    { name: '舒適', selected: false },
    { name: '性價比', selected: false },
    { name: '住宿地點', selected: false },
  ]);
  
  const location = useLocation();
  const { house } = location.state || {};

  const handleStarClick = (type, star) => {
    if (type === 'overall') {
      setOverallRating(star);
    } else if (type === 'location') {
      setLocationRating(star);
    }
  };

  const handleTagClick = (index) => {
    setTags((prevTags) =>
      prevTags.map((tag, i) =>
        i === index ? { ...tag, selected: !tag.selected } : tag
      )
    );
  };

/*
  const handleSubmit = async () => {

    const selectedTags = tags.filter((tag) => tag.selected).map((tag) => tag.name);

    if (!house) {
    return <div>無法獲取房間id。</div>;
  }
    const reviewData = {
      overallRating,
      advantages,
      disadvantages,
      tags: selectedTags,
      houseid: house?.num,
      name,
      entrynumber,
    };

    try {
      await Axios.post('http://localhost:5172/com1', reviewData); // 提交到後端 API
      alert('評論提交成功！');
      closeModal(false); // 關閉模態框
    } catch (error) {
      console.error('提交失敗:', error);
      alert('提交失敗，請稍後再試！');
    }
  };
  */

  const handleSubmit = async () => {
  if (!entrynumber) {
    alert('請輸入參賽者號碼！');
    return;
  }

  try {
    // 驗證參賽者號碼
    const response = await Axios.post('http://localhost:5172/verify-entrynumber', {
      entrynumber,
    });
    if (!response.data.valid) {
      alert('無法評論，參賽者號碼無效！');
      return;
    }

    const selectedTags = tags.filter((tag) => tag.selected).map((tag) => tag.name);

    if (!house) {
      alert('無法獲取房間id。');
      return;
    }

    const reviewData = {
      overallRating,
      advantages,
      disadvantages,
      tags: selectedTags,
      houseid: house?.num,
      name,
      entrynumber,
    };

    // 提交評論
    await Axios.post('http://localhost:5172/com1', reviewData);
    alert('評論提交成功！');
    closeModal(false);
  } catch (error) {
    console.error('提交失敗:', error);
    alert('提交失敗，請稍後再試！');
  }
};


  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="titlecloseBtn">
          <button onClick={() => closeModal(false)}> x </button>
        </div>
        <div className="modal-title">
          <h1 className="">評論</h1>
        </div>
        <div className="modal-body">
          <div className="star-rating">
            <div className="rating-row">

              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={`overall-${star}`}
                    className={`star ${overallRating >= star ? 'active' : ''}`}
                    onClick={() => handleStarClick('overall', star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            
          </div>
          <div className="text-inputs">
            <h1>名字</h1>
            <input 
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="請輸入名字..."
            />
            <h1>參賽者號碼</h1>
            <input 
              id="entrynumber"
              type="text"
              value={entrynumber}
              onChange={(event) => setEntrynumber(event.target.value)}
              placeholder="請輸入參賽者號碼..."
            />
            <div className="input-group">
              <label>
                <span role="img" aria-label="smiley face">
                  😊
                </span>
              </label>
              <textarea
                value={advantages}
                onChange={(e) => setAdvantages(e.target.value)}
                placeholder="請輸入優點..."
              ></textarea>
            </div>
            <div className="input-group">
              <label>
                <span role="img" aria-label="sad face">
                  😢
                </span>
              </label>
              <textarea
                value={disadvantages}
                onChange={(e) => setDisadvantages(e.target.value)}
                placeholder="請輸入缺點..."
              ></textarea>
            </div>
          </div>
          <div className="tags-section">
            <p>標籤</p>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <button
                  key={tag.name}
                  className={`tag-button ${tag.selected ? 'selected' : ''}`}
                  onClick={() => handleTagClick(index)}
                >
                  {tag.selected ? `✓${tag.name}` : tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleSubmit}> 提交 </button>
        </div>
      </div>
    </div>
  );
};

export default ComModal;


 