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
                            <h2>嚴選優質設計師</h2>
                            <h6>與擅長設計思考、解決問題，經驗豐富的設計師一同合作。</h6>
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
                            <h6>優設計為你match多解釋一下細節<br />不用再煩惱多解釋一下細節</h6>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12" ></div>
                    </div>
                    <div className="row sell-section">
                        <div className="col-xl-1 col-lg-12 col-md-12 col-sm-12 col-12" ></div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>馬上詢問，馬上開工</h2>
                            <h6>我們幫你介紹有空檔的設計師<br />可以馬上開工</h6>
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