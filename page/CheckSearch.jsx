import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../css/Check.css';

const CheckSearch = () => {
  const [provides, setProvides] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({}); // 用來儲存選擇的狀態

  useEffect(() => {
    Axios.get('http://localhost:5171/checksearch').then((response) => {
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
    <div className="text">
      <h1>Welcome 管理員</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>ID</th>
            <th>Email</th>
            <th>Entrynumber</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>People</th>
            <th>Houseid</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {provides.map((provide, index) => (
            <tr key={index}>
              <td>{provide.name}</td>
              <td>{provide.phone}</td>
              <td>{provide.date}</td>
              <td>{provide.id}</td>
              <td>{provide.email}</td>
              <td>{provide.entrynumber}</td>
              <td>{provide.checkin}</td>
              <td>{provide.checkout}</td>
              <td>{provide.people}</td>
              <td>{provide.houseid}</td>
              <td>
                <select
                  value={selectedStatus[provide.name] || provide.status} 
                  onChange={(event) => StatusChange(provide.name, event)}
                >
                  <option value="未審核">未審核</option>
                  <option value="審核中">審核中</option>
                  <option value="審核通過">審核通過</option>
                </select>
              </td>
              <td>
                <button onClick={() => updateStatus(provide.name)}>更新</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckSearch;