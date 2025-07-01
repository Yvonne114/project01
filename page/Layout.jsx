import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/Layout.css";
//import UserMenu from "../components/UserMenu";
import homeIcon from "../assets/home.svg"; // 引入 SVG 文件


const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    checkLoginStatus();
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId); // 設定 userId 為登入帳號
    }
  }, []);

  // 即時檢查登入狀態
  const checkLoginStatus = () => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/LoginSite");
  };

  return (
    <>
      <div class="nav">
      <nav>
        <ul class="ullayout">
        <Link to="/Home" className="home-link">
          <img src={homeIcon} alt="Home" className="home-icon" />
          <div className="marathon-text">
                  <span className="chinese">田中馬拉松</span>
                  <span className="english">TIANZHONG MARATHON</span>
                </div>
        </Link>

          

          <li className="lila">

          <Link to="https://www.tianzhongmarathon.com/">
                關於我們
                </Link>

                
            {isLoggedIn ? (
                <button onClick={handleLogout} className="logout-button">
                  {userId}
                </button>
              ) : (
                <Link to="/LoginSite"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather1 feather1-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                登入
                </Link>
              )}


          </li>
          
          
        </ul>
      </nav>

      <Outlet />
      </div>
    </>
    
  )
};

export default Layout;
