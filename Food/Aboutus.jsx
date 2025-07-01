import React from 'react';
import '../css/Aboutus.css'; // 新增 CSS 文件
import wImage from '../images/w.jpg';
import xImage from '../images/x.jpg';
import FoodHeader from '../Food/Foodheader';

const Aboutus = () => {
    return (
        <div className="backgroundc">
        <div className="about-container">
        <FoodHeader />
            <h2 className="about-title">關於我們</h2>
            <img src={wImage} className="about-image" alt="田中火車站" />

            <div className="about-content">
                <p>
                    隨著田中馬拉松的舉辦，參賽者的人數逐年增加，但當地旅館供應不足，導致許多參賽者需遠距離居住，花費額外時間和精力在交通上。此外，當地居民有提供臨時住宿的機會，但缺乏有效的平台來與參賽者聯繫。
                </p>

                <h3>我們的系統目標:</h3>
                <ul className="about-list">
                    <li>提供臨時住宿平台：建立網站，讓當地居民提供家中空房間，並上傳至平台，供參賽者預訂使用。</li>
                    <li>方便參賽者預訂住宿：參賽者可透過網站瀏覽各種住宿選擇，並直接預訂，提高住宿便利性。</li>
                    <li>安全和信任機制：建立評價系統、身份驗證、付款保護等機制，確保參賽者和居民安全。</li>
                    <li>多語言支持：提供多語言支持，擴大使用者群。</li>
                </ul>

                <h3>我們期望能達成:</h3>
                <ul className="about-list">
                    <li>節省交通時間：提供更多位於比賽起點附近的住宿選擇，減少交通時間。</li>
                    <li>周邊設施信息：提供周邊餐廳、超市、交通等信息，方便參賽者安排生活。</li>
                    <li>活動和導覽推薦：推薦當地文化活動和景點，豐富參賽者的體驗。</li>
                    <li>社區參與和互動：建立社區平台，促進參賽者和當地居民交流互動，分享資訊和經驗。</li>
                </ul>

                <p>
                    詳細田中馬拉松資訊可參考:
                    <a href="https://irunner.biji.co/Tianzhong2024" target="_blank" rel="noopener noreferrer" className="about-link">
                        https://irunner.biji.co/Tianzhong2024
                    </a>
                </p>

                <p>
                    也可以參考我們的 IG，裡面有更多關於田中景點的內容喔!!:
                    <a href="https://www.instagram.com/trhtm.nnn?igsh=MTBvd2Y2NzNsbDVmdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <img src={xImage} className="instagram-icon" alt="Instagram" />
                    </a>
                </p>
            </div>
        </div>
        </div>
    );
};

export default Aboutus;