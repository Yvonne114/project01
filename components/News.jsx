import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/News.css';

const News = () => {
  const navigate = useNavigate();
  
  // 所有的消息數據
  const newsData = [
    { category: '賽事公告', title: '中籤公告', date: '2024.06.17', onClick: () => navigate('/Newslots1') },
    { category: '賽事公告', title: '備取中籤公告', date: '2024.06.24', onClick: () => navigate('/Newslots2') },
    { category: '賽事公告', title: '2024田中馬拉松賽事公告-臺鐵加班車事宜', date: '2024.09.03', onClick: () => navigate('/Newslots3') },
    { category: '賽事公告', title: '2024田中馬拉松賽事公告-臺鐵加班車最新資訊', date: '2024.10.24', onClick: () => navigate('/Newslots4') },
    { category: '賽事公告', title: '選手物資寄送進度查詢網址', date: '2024.10.25', onClick: () => navigate('/Newslots5') },
    { category: '賽事公告', title: '場地配置圖與品牌攤位列表', date: '2024.11.01', onClick: () => navigate('/Newslots6') },
    { category: '賽事公告', title: '賽事日11/10停車接駁資訊/大客車建議路線', date: '2024.11.02', onClick: () => navigate('/Newslots7') },
    { category: '賽事公告', title: '選手之夜11/09週六交通資訊', date: '2024.11.02', onClick: () => navigate('/Newslots8') },
    { category: '賽事公告', title: '選手之夜與賽事日流程表', date: '2024.11.02', onClick: () => navigate('/Newslots9') },
    { category: '賽事公告', title: '賽事大會手冊', date: '2024.11.03', onClick: () => navigate('/Newslots10') },
    { category: '賽事公告', title: '11/10賽事日交通管制表/圖', date: '2024.11.04', onClick: () => navigate('/Newslots11') },
    { category: '賽事公告', title: '11/10賽事日搭乘高鐵、火車建議行車路線圖', date: '2024.11.04', onClick: () => navigate('/Newslots12') },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 計算分頁的範圍
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = newsData.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  return (
    <div>
      <div className="back-news">
        <div className="all">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>簡單介紹</h2>
            <h3 style={{ margin: '0', fontWeight: 'bold', fontSize: '20px', width: '250px' }}>標題</h3>
            <h4 style={{ margin: '0', fontWeight: 'bold', fontSize: '20px', width: '100px' }}>日期</h4>
          </div>
          <hr style={{ margin: '10px 0' }} />
          
          {currentItems.map((news, index) => (
            <div key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ margin: '0', fontWeight: 'bold', fontSize: '20px', width: '150px' }}>{news.category}</div>
                <div 
                  style={{ margin: '0', fontWeight: 'bold', fontSize: '20px', width: '600px', textAlign: 'left', cursor: 'pointer' }} 
                  onClick={news.onClick}
                >
                  {news.title}
                </div>
                <div style={{ margin: '0', fontWeight: 'bold', fontSize: '20px', width: '100px', textAlign: 'right' }}>
                  {news.date}
                </div>
              </div>
              <hr style={{ margin: '10px 0', borderTop: '1px dashed #ccc' }} />
            </div>
          ))}

          {/* 分頁按鈕 */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
              disabled={currentPage === 1}
              style={{ marginRight: '10px' }}
            >
              上一頁
            </button>
            <span>第 {currentPage} 頁 / 共 {totalPages} 頁</span>
            <button 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
              disabled={currentPage === totalPages}
              style={{ marginLeft: '10px' }}
            >
              下一頁
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

