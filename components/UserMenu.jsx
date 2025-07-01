
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/UserMenu.css"; // 可根據需要設置樣式

const UserMenu = ({ userId, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/LoginSite");
  };

  return (
    <div className="user-menu">
      <button onClick={toggleMenu}>{userId}</button>
      {isOpen && (
        <div className="dropdown">
          <p>您好，{userId}</p>
          <button onClick={handleLogout}>登出</button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
