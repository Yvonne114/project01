import { useState } from 'react';
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [entrynumber, setEntrynumber] = useState('');
  const [gender, setGender] = useState(''); // 新增性別狀態

  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 使用 useLocation 接收從 MainPage 傳遞的住宿資訊
  const location = useLocation();
  const { checkIn, checkOut, people, selectedHouse } = location.state || {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'id':
        setId(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'entrynumber':
        setEntrynumber(value);
        break;
      case 'gender':
        setGender(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 阻止表單默認提交行為
  
    // 檢查表單是否填寫完整
    if (!name || !phone || !date || !id || !email || !entrynumber || !gender) {
      setError('所有字段都必須填寫');
      return;
    }

    // 發送用戶信息與住宿信息到後端
    Axios.post('http://localhost:5172/signup', { 
      name: name,
      phone: phone,
      date: date,
      id: id,
      email: email,
      entrynumber: entrynumber,
      gender: gender,
      checkIn: checkIn,
      checkOut: checkOut,
      people: people,
      houseId: selectedHouse?.num // 傳遞所選的房間ID
    })
    .then(response => {
      console.log("Success:", response.data);
      // 顯示成功消息
      alert('提交成功!');
      navigate('/Home'); // 成功後跳轉到成功頁面
    })
    .catch(error => {
      console.error("Error:", error);
      setError('提交失敗，請重試');
    });
  };

  return (
    <div className="Bpp">
      <div className="information">
        <div className='bookForm'>
          <div className='headTitle'>
            <label><h1 style={{ fontSize: '30px' }}>報名住宿表單</h1></label>
            <div className='title'>
              <p style={{ fontSize: '13px' }}>（輸入報名參賽的資料以及參賽編號）</p>
              <p style={{ fontSize: '13px' }}>（若參賽者身份驗證成功就可以申請住宿）</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label>姓名：</label>
            <input 
              type="text" 
              name="name" 
              value={name} 
              placeholder="請輸入姓名" 
              onChange={handleChange} 
            />
            <label>手機號碼：</label>
            <input 
              type="text" 
              name="phone" 
              value={phone} 
              placeholder="請輸入手機號碼" 
              onChange={handleChange} 
            />
            <label>出生日期：</label>
            <input 
              type="date" 
              name="date" 
              value={date} 
              placeholder="請輸入出生日期" 
              onChange={handleChange} 
            />
            <label>身份證號碼：</label>
            <input 
              type="text" 
              name="id" 
              value={id} 
              placeholder="請輸入身份證號碼" 
              onChange={handleChange} 
            />
            <label>郵箱：</label>
            <input 
              type="text" 
              name="email" 
              value={email} 
              placeholder="請輸入郵箱" 
              onChange={handleChange} 
            />
            <label>參賽編號：</label>
            <input 
              type="text" 
              name="entrynumber" 
              value={entrynumber} 
              placeholder="請輸入參賽編號" 
              onChange={handleChange} 
            />
            <label>性別：</label>
            <select name="gender" value={gender} onChange={handleChange}>
              <option value="">選擇性別</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
            <button type='submit'>提交表單</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Signup;

