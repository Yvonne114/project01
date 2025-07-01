import React from 'react';
import { Link } from 'react-router-dom';
import '../css/FoodHeader.css';
import Foodheader2 from '../Food/Foodheader2';

const FoodHeader = () => {
  const header2Links = [
    { href: '/Food', label: '田中介紹' }, // Option 1 改為不可點擊，但作為下拉選單
    { href: '/Car', label: '交通資訊' },
    { href: '/Spots', label: '景點介紹' },
    { href: '/Aboutus', label: '關於我們' },
  ];

  return (
    <div className="header1">
      <Foodheader2 links={header2Links} />
    </div>
  );
};

export default FoodHeader;
