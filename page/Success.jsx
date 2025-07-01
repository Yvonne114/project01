//import { Outlet, Link } from "react-router-dom";
import React from 'react';
import '../css/ApplySuccess.css';
import { useLocation } from 'react-router-dom';

function Success(){
    const location = useLocation()
    const {姓名,手機號碼,出生日期,身份證號碼,郵箱,參賽編號}=location.state 
    return(
        <div className='ApplySuccess'>
            <div className='applyResult'>
             <h1>報名成功！</h1>
             <p>success</p>
            </div>
            <div className='ShowInformation'>
             <p><strong>姓名：</strong>{姓名}</p>
             <p><strong>手機號碼：</strong>{手機號碼}</p>
             <p><strong>出生日期：</strong>{出生日期}</p>
             <p><strong>身份證號碼：</strong>{身份證號碼}</p>
             <p><strong>郵箱：</strong>{郵箱}</p>
             <p><strong>參賽編號：</strong>{參賽編號}</p>
            </div>
            <div className='EntryInform'>
             <b>入住時間地點，要注意事項</b>
            </div>
        </div>
    )
}

export default Success