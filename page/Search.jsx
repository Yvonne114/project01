import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../css/Hotels.css';
import { useNavigate } from 'react-router-dom';

const userEntrynumber = localStorage.getItem('userEntrynumber');
console.log(userEntrynumber);

const Search = () => {

    const navigate = useNavigate();

  const userEntrynumber = localStorage.getItem('userEntrynumber');
  const [provides, setProvides] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({}); // 用來儲存選擇的狀態

  useEffect(() => {
        if (userEntrynumber) {
            Axios.get(`http://localhost:5171/result?userEntrynumber=${userEntrynumber}`) // 將 userId 傳遞作為查詢參數
                .then((response) => {
                    setProvides(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching approved data:', error);
                });
        }
    }, []);
  console.log(userEntrynumber);
/*
  useEffect(() => {
    Axios.get('http://localhost:5171/result').then((response) => {
      setProvides(response.data);
    });
  }, []);
  */

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
      Axios.post('http://localhost:5171/update-status-search', {
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
      <h1 className="title2">預訂結果</h1>
    <div className="hotels-container">
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>ID</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>People</th>
            <th>Houseid</th>
            <th>預定狀態</th>

          </tr>
        </thead>
        <tbody>
          {provides.map((provide, index) => (
            <tr key={index}>
              <td>{provide.name}</td>
              <td>{provide.phone}</td>
              <td>{provide.date}</td>
              <td>{provide.id}</td>
              <td>{provide.checkin}</td>
              <td>{provide.checkout}</td>
              <td>{provide.people}</td>
              <td>{provide.houseid}</td>
              <td>{provide.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  );
};

export default Search;