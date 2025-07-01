import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../css/Hotels.css';
import { useNavigate } from 'react-router-dom';


const SearchMember = () => {

    const navigate = useNavigate();
const userId = localStorage.getItem('userId');
const userName = localStorage.getItem('userName');

  const [provides, setProvides] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({}); // 用來儲存選擇的狀態

  useEffect(() => {
        if (userId) {
            Axios.get(`http://localhost:5171/approved?userId=${userId}`) // 將 userId 傳遞作為查詢參數
                .then((response) => {
                    setProvides(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching approved data:', error);
                });
        }
    }, []);
  console.log(userId);
  

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
      <h1 className="title2">預定結果</h1>
    <div className="hotels-container">
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Phone</th>
            <th>審核狀態</th>

          </tr>
        </thead>
        <tbody>
          {provides.map((provide, index) => (
            <tr key={index}>
              <td>{provide.name}</td>
              <td>{provide.owner}</td>
              <td>{provide.phone}</td>
              <td>{provide.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  );
};

export default SearchMember;