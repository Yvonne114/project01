import '../css/LoginSite.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';


const LoginSite = () => {
  const navigate = useNavigate();
    const handleClickHome = () => {
      navigate('/Home');
    };

    const handleClickLogin = () => {
      navigate('/Login');
    };

    const handleClickManagerLogin = () => {
      navigate('/ManagerLogin');
    };

  return (
    <div className="backc">
    <div className="nav1">

        <button onClick={handleClickHome} className="butt">參賽者登入</button>
        <button onClick={handleClickLogin} className="butt">提供住宿登入</button>
        <button onClick={handleClickManagerLogin} className="butt">管理員登入</button>
    </div>
    </div>
  )
};

export default LoginSite;
