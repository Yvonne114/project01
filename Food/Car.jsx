import React from "react";
import "../css/Car.css";
import vImage from '../images/v.jpeg';
import FoodHeader from '../Food/Foodheader';
import Contact from '../components/Contact';

const Car = () => {
  return (
    <div className="backgroundc">
    <div className="main-container">
    <FoodHeader />
      {/* Section 1 */}
      <div className="section">
        <div className="title">交通資訊</div>
        <div className="subtitle">
          田中馬拉松讓田中鎮成為各地矚目焦點，田中鎮民也十分熱情地歡迎各地民眾來作客，讓參加路跑活動的人感受田中人的熱情，以下整理了幾種常見的交通方式！
        </div>
      </div>

      {/* Section 2 */}
      <div className="section">
        <div className="subtitle1">自行開車前往</div>
        <div className="row">
          {/* Left Text Content */}
          <div className="text-content card">
            <p>
              活動會場周邊將於開賽前陸續進行封閉管制，敬請參賽選手提早規劃進場動線。斗中路一段（中正路以西至梅州街）、梅州街、鎮政街為會場範圍皆不開放停車，建議您進場時將愛車停放至台灣高鐵彰化站周邊（大會備停車場巡迴接駁服務）。
            </p>
            <p>
              車輛建議停放於台灣高鐵彰化站周邊鄰近接駁點的停車場與路邊停車後轉乘接駁車，以免因尋找車位延誤您的起跑時間，本會備有停車場巡迴接駁車，於尖峰時刻巡迴接駁，可多加利用。
            </p>
          </div>

          {/* Right Photo Content */}
          <div className="photo-content card">
            <img src={vImage} className="photo" alt="高鐵彰化站周邊資訊" />
            <div className="caption">高鐵彰化站周邊資訊</div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section">
        <div className="subtitle1">搭乘大眾運輸</div>
        <div className="transport-options">
          <div className="point card">
            搭乘台鐵者可以搭至台鐵田中站，再搭乘接駁車或採其他方式至比賽會場即可。詳細火車時刻資訊可以至
            <a href="https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime">
              台鐵官網
            </a>
            參考。
          </div>
          <div className="point card">
            搭乘高鐵者可以搭至高鐵田中站，或搭至高鐵台中站再轉乘台鐵至田中站，再搭乘接駁車或採其他方式至比賽會場即可。詳細火車時刻資訊可以至
            <a href="https://www.thsrc.com.tw/ArticleContent/a3b630bb-1066-4352-a1ef-58c7b4e8ef7c">
              高鐵官網
            </a>
            參考。
          </div>
          <div className="control-box yellow">
            <strong>一、臺鐵田中站：</strong>
            <p>
              (一)管制時間：11月12日、07:00~12:40<br />
              (二)替代路線: 建議由田中後火車站進出。
            </p>
          </div>
          <div className="control-box blue">
            <strong>二、高鐵彰化站：</strong>
            <p>
              (一)管制時間：11月12日、06:20~12:40<br />
              (二)替代道路：1.社頭鄉員集路(往南)→田中鎮員集路→中正路→中州路→東彰南路→斗中路→高鐵二路→彰化高鐵站。2.社頭鄉東彰路(往南)→田中鎮大社路2段→高鐵二路→彰化高鐵站。3.田中鎮中正路→中州路→東彰南路→斗中路→高鐵二路→彰化高鐵站。
            </p>
          </div>
          <div className="control-box pink">
            <strong>三、縣137線山腳路段：</strong>
            <p>
              (一)管制時間：11月12日、06:20~11:20<br />
              (二)替代路線: 社頭鄉清水岩路→忠義路→社斗路→社頭鄉員集路→田中鎮東閔路→二水鄉員集路→文昌路→員集路→二水鄉山腳路。
            </p>
          </div>
        </div>
      </div>
    </div>
    <Contact />
    </div>
  );
};

export default Car;