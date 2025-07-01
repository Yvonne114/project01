import React, { useState, useEffect } from 'react';
import '../css/Com.css';

const Com = ({ houseId}) => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  // 使用 houseId 獲取相關的評論
  useEffect(() => {
    if (houseId) {
      fetchMessages();
    }
  }, [houseId]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`http://localhost:5172/messages?houseId=${houseId}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('請選擇一個評分');
      return;
    }
    try {
      await fetch('http://localhost:5172/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, rating, content, houseId }), // 包含 houseId
      });
      // 清空輸入欄位
      setName('');
      setRating(0);
      setContent('');
      fetchMessages(); // 提交後重新獲取評論
    } catch (error) {
      console.error('Error submitting message:', error);
    }
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };


  return (
    <div className="body">
      <div className="container">
        <div className="header">
          <h1>留言板</h1>
        </div>
        <form className="message-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="請輸入您的姓名" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} onClick={() => handleStarClick(star)}>
                <input type="radio" name="rating" value={star} checked={rating === star} onChange={() => {}} />
                <span className="star" style={{ color: rating >= star ? '#f90' : '#ccc' }}>★</span>
              </label>
            ))}
          </div>
          <textarea 
            placeholder="Content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <ul className="messages-list">
          {messages.map((message) => (
            <li key={message.id} className="message-item">
              <h3>{message.name} ({'★'.repeat(message.rating) + '☆'.repeat(5 - message.rating)})</h3>
              <p>{message.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Com;
