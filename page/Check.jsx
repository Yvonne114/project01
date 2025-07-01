import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../css/Check.css';

const Check = () => {
  const [provides, setProvides] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({}); // 用來儲存選擇的狀態

  useEffect(() => {
    Axios.get('http://localhost:5172/provides').then((response) => {
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
      Axios.post('http://localhost:5172/update-status', {
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
    <div className="body2">
      <h1 className="text2">Welcome 管理員</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th >Name</th>
            <th >Phone</th>
            <th >Address</th>
            <th >Describe</th>
            <th >Picture</th>
            <th >Status</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {provides.map((provide, index) => (
            <tr key={index}>
              <td>{provide.name}</td>
              <td>{provide.phone}</td>
              <td>{provide.address}</td>
              <td>{provide.describe}</td>
              <td>
                <img 
                  src={`http://localhost:5172/images/${provide.pictures[0]}`} 
                  alt={provide.pictures} 
                  style={{ width: '150px', height: '150px' }} 
                />
              </td>
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

export default Check;