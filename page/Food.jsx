import React from 'react';
import '../css/Food.css';
import topImage from '../images/a.jpg'; 
import FoodHeader from '../Food/Foodheader'; // 確保導入路徑正確
import Contact from '../components/Contact';

const Food = () => {
  return (
    <div className="back1">
      <FoodHeader />
      <div className="title" style={{ marginBottom: '20px' }}>田中景點簡介</div>
      <img src={topImage} className="top-image" alt="Top" />
      <div className="content1" style={{ marginBottom: '20px' }}>
        臺灣米倉之鄉田中，從日治時代以來就是臺灣最大的米倉所在，產出非常多優良品質的黑白好米，也曾並列彰化八景之一，附近還有許多觀光景點，如榮獲素稱建築界奧斯卡「A+國際建築獎」的高鐵彰化站，田中窯燒貓村、田中森林公園、襪仔王勝鴻機能觀光襪廠、華新MASK創意生活館（口罩觀光工廠）等景點、規劃完善的田中森林步道、長青自行車登山步道，都是大閒、登山、健行的好所在。<br />
        而田中馬拉松為國內知名馬拉松賽事，每年都吸引眾多的參賽者參加，又因馬拉松賽事起跑時間較早，外地參賽者須提早一天抵達舉辦地點，住宿需求也是一項重要的課題。
      </div>
      <div className="content1">接下來就來介紹幾個田中的特色景點及住宿相關資訊吧!</div>
      <Contact />
    </div>
  );
}; 

export default Food;

