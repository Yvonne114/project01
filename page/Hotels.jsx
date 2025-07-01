import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../css/Hotels.css';
import image from "../images/1.jpg";
import { useNavigate } from 'react-router-dom';

const Hotels = () => {

    const navigate = useNavigate();
    const handleClickElementary = () => {
      navigate('/Elementary');
    };
    const handleClickSenior = () => {
      navigate('/Senior');
    };
    const handleClickActivity = () => {
      navigate('/Activity');
    };


  const [provides, setProvides] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({}); // 用來儲存選擇的狀態

  useEffect(() => {
    Axios.get('http://localhost:5171/approved').then((response) => {
      setProvides(response.data);
    });
  }, []);
  

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

          setProvides((prevProvides) =>
            prevProvides.map((provide) =>
              provide.name === name ? { ...provide, status: status } : provide
            )
          );
        })
        .catch((error) => {
          console.error('Error updating status', error);
        });
    }
  };


  return (
    <div className="body">
      <h1 className="title2">住宿概覽</h1>
    <div className="info-container">
      <img src={image} alt="image" className="image2"/>
      <div className="info-text">
        <h1>田中國小</h1>
        <p>田中國小位於...可以在裡面搭帳篷</p>
        <button onClick={handleClickElementary} className="button1">詳細資訊 -></button>
      </div>
    </div>
    <div className="info-container2">
      
      <div className="info-text2">
        <h1>新莊社區活動中心</h1>
        <p>新莊社區活動中心位於...可以在裡面搭帳篷</p>
        <button onClick={handleClickActivity} className="button2">詳細資訊 -></button>
      </div>
      <img src={image} alt="image" className="image3"/>
    </div>
    <div className="info-container">
      <img src={image} alt="image" className="image2"/>
      <div className="info-text">
        <h1>田中高中</h1>
        <p>田中高中位於...可以在裡面搭帳篷</p>
        <button onClick={handleClickSenior} className="button1">詳細資訊 -></button>
      </div>
    </div>
    <div className="hotels-container">
      
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Describe</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {provides.map((provide, index) => (
            <tr key={index}>
              <td>{provide.name}</td>
              <td>{provide.phone}</td>
              <td>{provide.address}</td>
              <td>{provide.describe}</td>
              <td>{provide.picture}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  );
};

export default Hotels;
