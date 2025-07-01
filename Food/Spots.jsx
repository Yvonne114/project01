import React, { useState } from 'react';
import '../css/Spots.css';
import FoodHeader from '../Food/Foodheader';
import b from '../images/b.jpg';
import c from '../images/c.jpg';
import d from '../images/d.webp';
import e from '../images/e.jpg';
import f from '../images/f.jpg';
import g from '../images/g.jpg';
import h from '../images/h.jpg';
import i from '../images/i.jpg';
import j from '../images/j.jpg';
import k from '../images/k.jpg';
import l from '../images/l.jpg';



const attractions = [
  {
    name: '田中老街',
    description: '歷史悠久的老街最早可追溯至清朝，多以華麗的巴洛克式建築為主。最早田中老街是在「沙仔崙街」，當時天災肆虐由仕紳陳紹年帶領遷移到新處，鐵路完工火車站周邊整個發展起來，在地人皆習慣以新街跟舊街來稱呼。而從頭到尾見證街區變遷的，絕對是「德東百貨行」的街屋與隔壁的老字號景崧診所。',
    phone: "電話 📞: X",
    address: "地址 🏘️: 彰化縣田中鎮員集路二段351-329號",
    hours: "營業時間 🕒: X",
    images: [b,c],
  },
  {
    name: '周記蒸餃',
    description: '這間蒸餃店位在田中農會旁，經過遠遠就能看到長長的排隊人龍。周記蒸餃現包現蒸的蒸餃新鮮美味，一旁師傅忙著包蒸餃，一大落竹製蒸籠因客人多，始終冒著蒸氣，蒸餃內餡滋味鮮美，以韭黃、豬肉等為主，一口咬下，湯汁便汩汩流出，店家滷製的各式小菜相當入味，搭配蒸餃、熱湯，是來到充滿古意的田中鎮值得一嚐的味道。',
    phone: "電話 📞: 04 875 1832",
    address: "地址 🏘️: 彰化縣田中鎮南北街94號",
    hours: "營業時間 🕒: 週一至週日11:00–13:30, 16:30–19:00 週三公休",
    images: [d,e],
  },
  {
    name: '源成發',
    description: '「源成發」商號屬於日治時期引進之建築式樣，田中老街的街屋立面大都以紅磚洗石子為主要建材，並局部加入西洋古典的建築樣貌，如此樣式至大正年間開始大量興建，本建物亦是在這時代背景中不免俗的出現。簡約俐落的磚牆立面，搭配樸實木質門窗，在建築物左右柱體頂端呈現荷式風格徽章圖騰相當特殊，並具藝術氣息，外觀正面牌樓也將保存源成發浮雕字樣來恢復早期樣貌，留下時代的記憶。',
    phone: "電話 📞: 0952 127 808",
    address: "地址 🏘️: 彰化縣田中鎮東路里員集路二段444號",
    hours: "營業時間 🕒: X",
    images: [f],
  },
  {
    name: '錢德宮',
    description: '據史料記載清康熙36年西元1697年，乾德宮當時名為天后宮，位於粵興街現址的田中梅州里後被規劃為北斗鎮大新里正新畜牧場內，但因為族群不合械鬥衝突，再加上濁水溪氾濫商議作遷建，分為前、中、後殿抽簽決定，先說 中殿：中殿為漳州人取得，分得廟內法器及法物，遷居於田尾鄉睦宜村 後殿：泉州人取得，分得湄州祖廟開基軟身天上聖母一尊及神仙法器於東螺，後遷至北斗街即今日的北斗奠安宮。 前殿：另一群漳州人取得，分得獅座兩座，龍柱兩座、匾額及法器，遷建田中沙仔崙為天后宮，即是現址的受天宮，而天后宮因為雍正年間地區規劃，再加上祝融，搬遷至現址改稱乾德宮而他也是每年田中馬拉松會經過的景點之一喔。',
    phone: "電話 📞: 04 874 5835",
    address: "地址 🏘️: 彰化縣田中鎮西路里員集路二段471號",
    hours: "營業時間 🕒: X",
    images: [g,h],
  },
  {
    name: '田中九重葛花道',
    description: '在田中鎮梅州街綿延約300公尺，高達五米超壯觀的九重葛花牆，紅、粉、橘、白色的漸層搭配就像彩虹瀑布，絢爛奪目的場景令人震撼，每個角度都很好拍，因花牆緊鄰道路，提醒賞花拍照時要注意安全留意車輛往來；此外，也推薦田尾公路花園的九重葛花海，可以觀賞到九重葛的另一番夢幻景致。',
    phone: "電話 📞: X",
    address: "地址 🏘️: 彰化縣田中鎮梅州街",
    hours: "營業時間 🕒: X",
    images: [i,j],
  },
  {
    name: '田中豆花王',
    description: '豆花王是在地人從小吃到大的老字號豆花店，店家小小的，但排隊人潮很多，看到有排隊人潮，就可以停下腳步看一下，應該就是豆花王沒錯。但目前因為疫情的關係，所以沒有開放內用，通通都只能外帶。',
    phone: "電話 📞: 04 875 9983",
    address: "地址 🏘️: 彰化縣田中鎮復興路740號",
    hours: "營業時間 🕒: X",
    images: [k,l],
  },
  // Add similar objects for 景點三到景點六
];

const AttractionBlock = ({ attraction, reverse }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((currentImage + 1) % attraction.images.length);
  const prevImage = () =>
    setCurrentImage(
      (currentImage - 1 + attraction.images.length) %
        attraction.images.length
    );

  return (
    
    <div className="attraction-block">
      {!reverse ? (
        <>
          <div className="image-section">
            <button onClick={prevImage}>&lt;</button>
            <div className="image-display">
              <img src={attraction.images[currentImage]} alt={attraction.name} />
            </div>
            <button onClick={nextImage}>&gt;</button>
          </div>
          <div className="info-section">
            <h2>{attraction.name}</h2>
            <p>{attraction.description}</p>
            <p>{attraction.phone}</p>
            <p>{attraction.address}</p>
            <p>{attraction.hours}</p>
          </div>
        </>
      ) : (
        <>
          <div className="info-section">
            <h2>{attraction.name}</h2>
            <p>{attraction.description}</p>
            <p>{attraction.phone}</p>
            <p>{attraction.address}</p>
            <p>{attraction.hours}</p>
          </div>
          <div className="image-section">
            <button onClick={prevImage}>&lt;</button>
            <div className="image-display">
              <img src={attraction.images[currentImage]} alt={attraction.name} />
            </div>
            <button onClick={nextImage}>&gt;</button>
          </div>

        </>
      )}
    </div>
    
  );
};

const Spots = () => {
  return (
    <div className="backgroundc">
    <div className="spotsbody">
    <FoodHeader />
    <div className="MainF">    
      <header className="headerF">旅遊景點介紹</header>
      <main className="attractions">
        {attractions.map((attraction, index) => (
          <AttractionBlock
            key={index}
            attraction={attraction}
            reverse={index % 2 !== 0}
          />
        ))}
      </main>
    </div>
    </div>
    </div>
  );
};

export default Spots;