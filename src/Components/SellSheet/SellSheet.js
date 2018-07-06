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
                        <div className="sell1-image col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={Sell1Image} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>人才名單直送 email</h2>
                            <h6>優設計為你match多解釋一下細節<br />不用再煩惱多解釋一下細節</h6>
                        </div>
                    </div>
                    <div className="row sell-section">
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>嚴選優質設計師</h2>
                            <h6>與擅長設計思考、解決問題，經驗豐富的設計師一同合作。</h6>
                        </div>
                        <div className="sell2-image col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={Sell2Image} clat="solve ux challenges in the real world" />
                        </div>
                    </div>
                    <div className="row sell-section">
                        <div className="sell3-image col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={Sell3Image} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>完美 handle 高設計專案</h2>
                            <h6>我們的人才有什麼經驗電商大數據<br />不用再煩惱多解釋一下細節</h6>
                        </div>
                    </div>
                </div>    
            </div>    
        );
    }
}

export default SellSheet;