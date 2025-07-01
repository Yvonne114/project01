import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/FoodHeader2.css';

const FoodHeader2 = ({ links }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <div className="header2">
      <nav>
        <ul className="nav-links">
          {links.map((link, index) => {
            if (link.label === 'Option 1') {
              // 特別處理 Option 1，增加下拉選單
              return (
                <li
                  key={index}
                  className="dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="dropdown-label">{link.label}</span>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li><Link to="/Food2">Option 1-1</Link></li>
                      <li><Link to="/B">Option 1-2</Link></li>
                      <li><Link to="/C">Option 1-3</Link></li>
                      <li><Link to="/D">Option 1-4</Link></li>
                    </ul>
                  )}

                </li>
              );
            } else {
              return (
                <li key={index}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </div>
  );
};

export default FoodHeader2;