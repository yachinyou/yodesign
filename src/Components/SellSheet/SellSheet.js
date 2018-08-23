import React, { Component } from 'react';
import placementImage from '../../images/placement_img.png';
import './SellSheet.css';
import Hero from '../Hero/Hero';
import Sell1Image from '../../images/sell1-man.png';
import Sell2Image from '../../images/sell2-designers.png';
import Sell3Image from '../../images/sell3-designer-cards.png';

class SellSheet extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="sell-sheet">
                <Hero />
                <div className="container">
                    <div className="row sell-section">
                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12" ></div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>與優質設計人才合作</h2>
                            <h6>與擅長設計思考、解決問題，經驗豐富的設計師一同合作。</h6>
                            <h6>無論您的需求是系統APP介面設計、網頁設計、平面設計，優設計幫您配對最適合您的專業人才。</h6>
                        </div>
                        <div className="sell2-image col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                            <img src={Sell2Image} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" ></div>
                    </div>
                    <div className="row sell-section">
                        <div className="col-xl-12 col-lg-2 col-md-12 col-sm-12 col-12" ></div>
                        <div className="sell1-image col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                            <img src={Sell1Image} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>人才名單直送 Email</h2>
                            <h6>不知道要去哪裡找設計師？一個徵才訊息收到100封Email看不完嗎？</h6>
                            <h6>優設計把您需要的人才名單直送到Email，馬上開始談專案。</h6>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12" ></div>
                    </div>
                    <div className="row sell-section">
                        <div className="col-xl-1 col-lg-12 col-md-12 col-sm-12 col-12" ></div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>迅速啟動專案設計</h2>
                            <h6>節省您寶貴的時間，優設計幫您match。</h6>
                            <h6>可以馬上開始設計，讓您順利執行專案計畫。</h6>
                        </div>
                        <div className="sell3-image col-xl-7 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={Sell3Image} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" ></div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default SellSheet;