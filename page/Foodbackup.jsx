import { useState } from 'react';
import '../css/Food.css';
import topImage from '../images/a.jpg'; 
import bImage from '../images/b.jpg'; 
import cImage from '../images/c.jpg'; 
import dImage from '../images/d.webp'; 
import eImage from '../images/e.jpg'; 
import fImage from '../images/f.jpg';
import gImage from '../images/g.jpg'; 
import hImage from '../images/h.jpg'; 
import iImage from '../images/i.jpg'; 
import jImage from '../images/j.jpg';
import kImage from '../images/k.jpg'; 
import lImage from '../images/l.jpg';
import mImage from '../images/m.jpg'; 
import nImage from '../images/n.jpg';
import oImage from '../images/o.jpg'; 
import pImage from '../images/p.jpg';
import qImage from '../images/q.jpg'; 
import rImage from '../images/r.jpg';
import sImage from '../images/s.jpg'; 
import tImage from '../images/t.jpg';
import uImage from '../images/u.png';
import vImage from '../images/v.jpeg';
import wImage from '../images/w.jpg';
import xImage from '../images/x.jpg';
import yImage from '../images/y.jpg';
import zImage from '../images/z.jpg';
import aaImage from '../images/aa.jpg';
import abImage from '../images/ab.jpg';
import acImage from '../images/ac.jpg';
import adImage from '../images/ad.jpg';
import aeImage from '../images/ae.jpg';
import afImage from '../images/af.jpg';

const Food = () => {
  const [page, setPage] = useState('home');


    switch (page) {
      case 'home':
        return (
          <>
            <div className="back">
            <img src={topImage} className="top-image" alt="Top" />
            <div className="title" style={{ marginBottom: '20px' }}>田中景點簡介</div>
            <div className="content" style={{ marginBottom: '20px' }}>
              臺灣米倉之鄉田中，從日治時代以來就是臺灣最大的米倉所在，產出非常多優良品質的黑白好米，也曾並列彰化八景之一，附近還有許多觀光景點，如榮獲素稱建築界奧斯卡「A+國際建築獎」的高鐵彰化站，田中窯燒貓村、田中森林公園、襪仔王勝鴻機能觀光襪廠、華新MASK創意生活館（口罩觀光工廠）等景點、規劃完善的田中森林步道、長青自行車登山步道，都是大閒、登山、健行的好所在。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
              而田中馬拉松為國內知名馬拉松賽事，每年都吸引眾多的參賽者參加，又因馬拉松賽事起跑時間較早，外地參賽者須提早一天抵達舉辦地點，住宿需求也是一項重要的課題。
            </div>
            <div className="content">接下來就來介紹幾個田中的特色景點及住宿相關資訊吧!</div>
            <button onClick={() => setPage('page1')} className="buttons">特色景點</button>
            <button onClick={() => setPage('page2')} className="buttons">住宿資訊</button>
            <button onClick={() => setPage('page3')} className="buttons">交通資訊</button>
            <button onClick={() => setPage('page4')} className="buttons">關於我們</button>
          </div>
          </>
        );
      case 'page1':
        return (
          <>
          <div className="back">
            <div className="topic" style={{ marginBottom: '20px' }}>田中老街</div>
            <img src={bImage} className="b-image" alt="田中老街" />
            <img src={cImage} className="c-image" alt="田中老街" />
            <div className="content" style={{ marginBottom: '20px' }}>
              歷史悠久的老街最早可追溯至清朝，多以華麗的巴洛克式建築為主。最早田中老街是在「沙仔崙街」，當時天災肆虐由仕紳陳紹年帶領遷移到新處，鐵路完工火車站周邊整個發展起來，在地人皆習慣以新街跟舊街來稱呼。而從頭到尾見證街區變遷的，絕對是「德東百貨行」的街屋與隔壁的老字號景崧診所。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️：台灣彰化縣田中鎮員集路二段351-329號</div>

            <div className="topic" style={{ marginBottom: '20px' }}>周記蒸餃</div>
            <img src={dImage} className="d-image" alt="周記蒸餃" />
            <img src={eImage} className="e-image" alt="周記蒸餃" />
            <div className="content" style={{ marginBottom: '20px' }}>
              這間蒸餃店位在田中農會旁，經過遠遠就能看到長長的排隊人龍。周記蒸餃現包現蒸的蒸餃新鮮美味，一旁師傅忙著包蒸餃，一大落竹製蒸籠因客人多，始終冒著蒸氣，蒸餃內餡滋味鮮美，以韭黃、豬肉等為主，一口咬下，湯汁便汩汩流出，店家滷製的各式小菜相當入味，搭配蒸餃、熱湯，是來到充滿古意的田中鎮值得一嚐的味道。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>Tel 📞：04 875 1832</div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️：彰化縣田中鎮南北街94號</div>
            <div className="content" style={{ marginBottom: '20px' }}>營業時間🕒：週一至週日11:00–13:30, 16:30–19:00 週三公休</div>

            <div className="topic" style={{ marginBottom: '20px' }}>源成發</div>
            <img src={fImage} className="f-image" alt="源成發" />
            <div className="content" style={{ marginBottom: '20px' }}>
              「源成發」商號屬於日治時期引進之建築式樣，田中老街的街屋立面大都以紅磚洗石子為主要建材，並局部加入西洋古典的建築樣貌，如此樣式至大正年間開始大量興建，本建物亦是在這時代背景中不免俗的出現。簡約俐落的磚牆立面，搭配樸實木質門窗，在建築物左右柱體頂端呈現荷式風格徽章圖騰相當特殊，並具藝術氣息，外觀正面牌樓也將保存源成發浮雕字樣來恢復早期樣貌，留下時代的記憶
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>Tel 📞：0952 127 808</div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️：彰化縣田中鎮東路里員集路二段444號</div>

            <div className="topic" style={{ marginBottom: '20px' }}>錢德宮</div>
            <img src={gImage} className="g-image" alt="錢德宮" />
            <img src={hImage} className="h-image" alt="錢德宮" />
            <div className="content" style={{ marginBottom: '20px' }}>
              據史料記載清康熙36年西元1697年，乾德宮當時名為天后宮，位於粵興街現址的田中梅州里後被規劃為北斗鎮大新里正新畜牧場內，但因為族群不合械鬥衝突，再加上濁水溪氾濫商議作遷建，分為前、中、後殿抽簽決定，先說 中殿：中殿為漳州人取得，分得廟內法器及法物，遷居於田尾鄉睦宜村 後殿：泉州人取得，分得湄州祖廟開基軟身天上聖母一尊及神仙法器於東螺，後遷至北斗街即今日的北斗奠安宮。 前殿：另一群漳州人取得，分得獅座兩座，龍柱兩座、匾額及法器，遷建田中沙仔崙為天后宮，即是現址的受天宮，而天后宮因為雍正年間地區規劃，再加上祝融，搬遷至現址改稱乾德宮
              而他也是每年田中馬拉松會經過的景點之一喔
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>Tel 📞：04 874 5835</div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️：彰化縣田中鎮西路里員集路二段471號</div>
            <div className="topic" style={{ marginBottom: '20px' }}>田中九重葛花道</div>
            <img src={iImage} className="i-image" alt="田中九重葛花道" />
            <img src={jImage} className="j-image" alt="田中九重葛花道" />
            <div className="content" style={{ marginBottom: '20px' }}>
              在田中鎮梅州街綿延約300公尺，高達五米超壯觀的九重葛花牆，紅、粉、橘、白色的漸層搭配就像彩虹瀑布，絢爛奪目的場景令人震撼，每個角度都很好拍，因花牆緊鄰道路，提醒賞花拍照時要注意安全留意車輛往來；此外，也推薦田尾公路花園的九重葛花海，可以觀賞到九重葛的另一番夢幻景致。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️：520彰化縣田中鎮梅州街</div>

            <div className="topic" style={{ marginBottom: '20px' }}>田中豆花王</div>
            <img src={kImage} className="k-image" alt="田中豆花王" />
            <img src={lImage} className="l-image" alt="田中豆花王" />
            <div className="content" style={{ marginBottom: '20px' }}>
              豆花王是在地人從小吃到大的老字號豆花店，店家小小的，但排隊人潮很多，看到有排隊人潮，就可以停下腳步看一下，應該就是豆花王沒錯。但目前因為疫情的關係，所以沒有開放內用，通通都只能外帶。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>Tel 📞：04 875 9983 </div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️： 彰化縣田中鎮復興路740號</div>

            <button onClick={() => setPage('home')} className="buttons">回到首頁</button>
            <button onClick={() => setPage('page2')} className="buttons">住宿資訊</button>
            <button onClick={() => setPage('page3')} className="buttons">交通資訊</button>
            <button onClick={() => setPage('page4')} className="buttons">關於我們</button>
          </div>
          </>
        );
      case 'page2':
        return (
          <>
          <div className="back">
          <div className="title" style={{ marginBottom: '20px' }}>貼心提醒：</div>
            <div className="content" style={{ marginBottom: '20px' }}>
              1.活動中心提供打地舖，備簡易浴廁
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
              2.請自備睡墊睡袋、盥洗用具
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
              3.請保持活動中心整潔，勿攜貴重財物及寵物，並自重公共空間禮儀!
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
              4.禁止室內搭帳篷、禁止利用椅子等物品隔出個人空間
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
              
            </div>
            <div className="topic" style={{ marginBottom: '20px' }}>田中新庄社區活動中心</div>
            <img src={mImage} className="m-image" alt="田中新庄社區活動中心" />
            <img src={nImage} className="n-image" alt="田中新庄社區活動中心" />
            <img src={oImage} className="o-image" alt="田中新庄社區活動中心" />
            <img src={pImage} className="p-image" alt="田中新庄社區活動中心" />
            <div className="content" style={{ marginBottom: '20px' }}>
            新庄社區活動中心有開放作為選手村夜宿使用，裡面不僅提供寬敞的住宿場地，還提供基本的衛浴設備!
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
             數量:地舖區90席
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️：520彰化縣田中鎮中山街124號</div>

            <div className="topic" style={{ marginBottom: '20px' }}>田中鎮田中國民小學</div>
            <img src={qImage} className="q-image" alt="田中新庄社區活動中心" />
            <img src={rImage} className="r-image" alt="田中新庄社區活動中心" />
            
            <div className="content" style={{ marginBottom: '20px' }}>
             田中國小提供了相較新庄社區活動中心更多的名額，不僅提供了活動中心，更開放操場做為場地!
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
             數量:活動中心1F地舖區-300席
             活動中心2F-50席
             活動中心3F(限女性)-50席
             川石園帳蓬露營-50頂
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>Tel 📞： 04 874 2013 </div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️： 520彰化縣田中鎮中州路一段177號</div>
            
            
            <div className="topic" style={{ marginBottom: '20px' }}>田中鎮新民國民小學</div>
            <img src={sImage} className="s-image" alt="田中鎮新民國民小學" />
            <img src={tImage} className="t-image" alt="田中鎮新民國民小學" />
            <div className="content" style={{ marginBottom: '20px' }}>
             數量:帳蓬露營-80頂
            </div>
            
            <div className="content" style={{ marginBottom: '20px' }}>Tel 📞： 04 875 6166 </div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️：520彰化縣田中鎮公館路320號</div>


            <div className="topic" style={{ marginBottom: '20px' }}>彰化縣立田中高級中學</div>
            <img src={uImage} className="u-image" alt="彰化縣立田中高級中學" />
            <div className="content" style={{ marginBottom: '20px' }}>
             數量:活動中心地舖區-300席
             光電球場帳蓬露營-40頂
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>Tel 📞：04 874 5820 </div>
            <div className="content" style={{ marginBottom: '20px' }}>地址🏘️： 520彰化縣田中鎮文化街23號</div>
            
            
            
            <button onClick={() => setPage('home')} className="buttons">回到首頁</button>
            <button onClick={() => setPage('page1')} className="buttons">特色景點</button>
            <button onClick={() => setPage('page3')} className="buttons">交通資訊</button>
            <button onClick={() => setPage('page4')} className="buttons">關於我們</button>
          </div>
          </>
        );
        case 'page3':
          return (
            <>
            <div className="back">
            <div className="title" style={{ marginBottom: '20px' }}>交通資訊</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            田中馬拉松讓田中鎮成為各地矚目焦點，田中鎮民也十分熱情地歡迎各地民眾來作客，讓參加路跑活動的人感受田中人的熱情，以下整理了幾種常見的交通方式!
            </div>
            <div className="topic" style={{ marginBottom: '20px' }}>自行開車前往</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            活動會場周邊將於開賽前陸續進行封閉管制，敬請參賽選手提早規劃進場動線。斗中路一段（中正路以西至梅州街）、梅州街、鎮政街為會場範圍皆不開放停車，建議您進場時將愛車停放至台灣高鐵彰化站周邊（大會備停車場巡迴接駁服務）。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            車輛建議停放於台灣高鐵彰化站周邊鄰近接駁點的停車場與路邊停車後轉乘接駁車，以免因尋找車位延誤您的起跑時間，本會備有停車場巡迴接駁車，於尖峰時刻巡迴接駁，可多加利用。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            以下為高鐵彰化站周邊資訊:
            </div>
            <img src={vImage} className="v-image" alt="彰化高鐵" />
            <div className="topic" style={{ marginBottom: '20px' }}>搭乘大眾運輸</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            搭乘台鐵者可以搭至台鐵田中站，再搭乘接駁車或採其他方式至比賽會場即可
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            詳細火車時刻資訊可以至台鐵官網參考:
            <a href="https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime" target="_blank" rel="noopener noreferrer">
            https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime
            </a>
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            搭乘高鐵者可以搭至高鐵田中站，或搭至高鐵台中站再轉乘台鐵至田中站，再搭乘接駁車或採其他方式至比賽會場即可
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            詳細火車時刻資訊可以至台鐵官網參考:
            <a href="https://www.thsrc.com.tw/ArticleContent/a3b630bb-1066-4352-a1ef-58c7b4e8ef7c" target="_blank" rel="noopener noreferrer">
            https://www.thsrc.com.tw/ArticleContent/a3b630bb-1066-4352-a1ef-58c7b4e8ef7c
            </a>
            </div>


            <div className="content" style={{ marginBottom: '20px' }}>
            為讓田中馬拉松活動更加完臻，田中警察分局協同主辦單位彙整田中馬松相關管制及替代道路如下：
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            一、臺鐵田中站：(一)管制時間：11月12日、07:00~12:40、(二)替代路線:建議由田中後火車站進、出1.由西往東:北斗→田中斗中路→東彰南路→中州路→民族街→公館路→中正路(員集路)→中南路橋→東閔路→新聖路→中山街→田中後站進入搭乘。2.由東往西:行駛東閔路→復興路(新聖路)→中山街→田中後站進入搭乘。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            二、高鐵彰化站：(一)管制時間：11月12日、06:20~12:40、(二)替代道路：1.社頭鄉員集路(往南)→田中鎮員集路→中正路→中州路→東彰南路→斗中路→高鐵二路→彰化高鐵站。2.社頭鄉東彰路(往南)→田中鎮大社路2段→高鐵二路→彰化高鐵站。3.田中鎮中正路→中州路→東彰南路→斗中路→高鐵二路→彰化高鐵站。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            三、縣137線山腳路段(北起社頭鄉清水岩路口南至二水鄉員集路口)：(一)管制時間：11月12日、06:20~11:20、(二)替代路線: 社頭鄉清水岩路→忠義路→社斗路→社頭鄉員集路→田中鎮東閔路→二水鄉員集路→文昌路→員集路→二水鄉山腳路。
            </div>

            <button onClick={() => setPage('home')} className="buttons">回到首頁</button>
            <button onClick={() => setPage('page1')} className="buttons">特色景點</button>
            <button onClick={() => setPage('page2')} className="buttons">住宿資訊</button>
            <button onClick={() => setPage('page4')} className="buttons">關於我們</button>
            <button onClick={() => setPage('page5')} className="buttons">最新消息</button>
            </div>
         </>
        );  
        case 'page4':
          return (
            <>
            <div className="back">
            <div className="title" style={{ marginBottom: '20px' }}>關於我們</div>
            <img src={wImage} className="w-image" alt="田中火車站" />
            <div className="content" style={{ marginBottom: '20px' }}>
            隨著田中馬拉松的舉辦，參賽者的人數逐年增加，但當地旅館供應不足，導致許多參賽者需遠距離居住，花費額外時間和精力在交通上。此外，當地居民有提供臨時住宿的機會，但缺乏有效的平台來與參賽者聯繫
            </div>
            <div className="topic" style={{ marginBottom: '20px' }}>我們的系統目標:</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            提供臨時住宿平台： 建立網站，讓當地居民提供家中空房間，並上傳至平台，供參賽者預訂使用。​
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            方便參賽者預訂住宿： 參賽者可透過網站瀏覽各種住宿選擇，並直接預訂，提高住宿便利性。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            安全和信任機制： 建立評價系統、身份驗證、付款保護等機制，確保參賽者和居民安全。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            多語言支持： 提供多語言支持，擴大使用者群。
            </div>
           
            <div className="topic" style={{ marginBottom: '20px' }}>我們期望能達成:</div>
            <div className="content" style={{ marginBottom: '20px' }}>
            節省交通時間： 提供更多位於比賽起點附近的住宿選擇，減少交通時間。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            周邊設施信息： 提供周邊餐廳、超市、交通等信息，方便參賽者安排生活。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            活動和導覽推薦： 推薦當地文化活動和景點，豐富參賽者的體驗。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            社區參與和互動： 建立社區平台，促進參賽者和當地居民交流互動，分享資訊和經驗。
            </div>
            <div className="content" style={{ marginBottom: '20px' }}>
            詳細田中馬拉松資訊可參考:
            <a href="https://irunner.biji.co/Tianzhong2024" target="_blank" rel="noopener noreferrer">
            https://irunner.biji.co/Tianzhong2024
            </a>
            </div>
            
            <div className="content" style={{ marginBottom: '20px' }}>
            也可以參考我們的ig，裡面有更多關於田中景點的內容喔!!:
            <a href="https://www.instagram.com/trhtm.nnn?igsh=MTBvd2Y2NzNsbDVmdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src={xImage} className="x-image" alt="instagram" />
            </a>
            </div>


            <button onClick={() => setPage('home')} className="buttons">回到首頁</button>
            <button onClick={() => setPage('page1')} className="buttons">特色景點</button>
            <button onClick={() => setPage('page2')} className="buttons">住宿資訊</button>
            <button onClick={() => setPage('page3')} className="buttons">交通資訊</button>
            
            </div>
         </>
        );  
        
       
      default:
        return <div>Unknown page</div>;
    }
  };

export default Food;