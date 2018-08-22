import React, { Component } from 'react';
import './SignUpThankYou.css';
import ThankYouImage from '../../images/thank-you-animation.gif';

class SignUpThankYou extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container thank-you">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                        <h2>已將您加入體驗VIP名單</h2>
                            <h6>感謝您加入優設計的搶先體驗活動。 <span className="bold">目前我們的團隊正在努力開發中</span>,
                            您將會在第一時間內得知我們正式發佈的消息！</h6>
                            <h6>如果您有任何疑問或建議，還是想打聲招呼，歡迎聯絡我們： <span className="bold">yodesign (at) gmail (dot) com</span>.</h6>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                </div>
                <div className="thank-you-image-container">
                    <img src={ThankYouImage} alt="we are hard at work to bring ux challenge to you!" />
                </div>
            </div>
        );
    }

}

export default SignUpThankYou;