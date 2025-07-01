import { useState } from 'react'
import reactLogo from './assets/test.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import {Link} from 'react-router-dom';
import Layout from "./page/Layout";
import Login from "./page/Login";
import Home from "./page/Home";
import NoPage from "./page/NoPage";
import Welcome from "./page/Welcome";
import Language from "./page/Language";
import Reservation from "./page/Reservation";
import Hotels from "./page/Hotels";
import Food from "./page/Food";
import Trans from "./page/Trans";
import Com1 from "./page/Com1";
import ManagerLogin from "./page/ManagerLogin";
import Check from "./page/Check";
import Provide from "./page/Provide";
import Signup from './page/Signup';
import LoginSite from './page/LoginSite';
import HomeMember from './page/HomeMember';
import Elementary from './page/Elementary';
import Activity from './page/Activity';
import Senior from './page/Senior';
import Book from './page/Book';
import Modal from './page/Modal';
import Search from './page/Search';
import CheckSearch from './page/CheckSearch';
import SearchMember from './page/SearchMember';
import Mcalendar from './page/Mcalendar';
import Calendar from './components/Calendar';
import UserMenu from './components/UserMenu';
import Lottery from './page/Lottery';
import News from './components/News';
import Newslots1 from './page/Newslots1';
import Nlottery from './page/Nlottery';
import Newslots2 from './page/Newslots2';
import Newslots3 from './page/Newslots3';
import Detail from './page/Detail';
import Newslots4 from './News/Newslots4';
import Newslots5 from './News/Newslots5';
import Newslots6 from './News/Newslots6';
import Newslots7 from './News/Newslots7';
import Newslots8 from './News/Newslots8';
import Newslots9 from './News/Newslots9';
import Newslots10 from './News/Newslots10';
import Newslots11 from './News/Newslots11';
import Newslots12 from './News/Newslots12';
import Spots from './Food/Spots';
import Car from './Food/Car';
import Aboutus from './Food/Aboutus';
import Foodheader2 from './Food/Foodheader2';
import FoodHeader from './Food/FoodHeader';
import Contact from './components/Contact';


function App() {

  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Language" element={<Language />} />
        <Route path="*" element={<NoPage />} />
        <Route path="Home" element={<Home />} />
        <Route path="Reservation" element={<Reservation />} />
        <Route path="Hotels" element={<Hotels />} />
        <Route path="Trans" element={<Trans />} />
        <Route path="Food" element={<Food />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Com1" element={<Com1 />} />
        <Route path="ManagerLogin" element={<ManagerLogin />} />
        <Route path="Check" element={<Check />} />
        <Route path="Welcome" element={<Welcome />} />
        <Route path="Provide" element={<Provide />} />
        <Route path="LoginSite" element={<LoginSite />} />
        <Route path="HomeMember" element={<HomeMember />} />
        <Route path="Elementary" element={<Elementary />} />
        <Route path="Activity" element={<Activity />} />
        <Route path="Senior" element={<Senior />} />
        <Route path="Book" element={<Book />} />
        <Route path="Modal" element={<Modal />} />
        <Route path="Search" element={<Search />} />
        <Route path="CheckSearch" element={<CheckSearch />} />
        <Route path="SearchMember" element={<SearchMember />} />
        <Route path="Mcalendar" element={<Mcalendar />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="UserMenu" element={<UserMenu />} />
        <Route path="Lottery" element={<Lottery />} />
        <Route path="News" element={<News />} />
        <Route path="Newslots1" element={<Newslots1 />} />
        <Route path="Nlottery" element={<Nlottery />} />
        <Route path="Newslots2" element={<Newslots2 />} />
        <Route path="Newslots3" element={<Newslots3 />} />
        <Route path="Detail" element={<Detail />} />
        <Route path="Newslots4" element={<Newslots4 />} />
        <Route path="Newslots5" element={<Newslots5 />} />
        <Route path="Newslots6" element={<Newslots6 />} />
        <Route path="Newslots7" element={<Newslots7 />} />
        <Route path="Newslots8" element={<Newslots8 />} />
        <Route path="Newslots9" element={<Newslots9 />} />
        <Route path="Newslots10" element={<Newslots10 />} />
        <Route path="Newslots11" element={<Newslots11 />} />
        <Route path="Newslots12" element={<Newslots12 />} />
        <Route path="Spots" element={<Spots />} />
        <Route path="Car" element={<Car />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="FoodHeader" element={<FoodHeader />} />
        <Route path="Foodheader2" element={<Foodheader2 />} />
        <Route path="Contact" element={<Contact />} />


        
        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
