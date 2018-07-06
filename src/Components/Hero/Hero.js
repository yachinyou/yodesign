import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Hero.css';
import HeroImage from '../../images/cityscape.png';

class Hero extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        return(
            <div className="hero">
                <div className="container">
                    <div className="hero-value" >
                        <h1>完美 Launch 設計專案</h1>
                        <h6>正在煩惱如何執行專案或企劃嗎？<br />您需要的設計人才就在這裡。</h6>
                        <div className="form-container">
                            <form action="https://bonsterxbonster.us2.list-manage.com/subscribe/post" method="POST">
                                <Input type="hidden" name="u" value="7cdd3e7148bfb13d3deb11a50" />
                                <Input type="hidden" name="id" value="75e70fa2e8" />    
                                <Input className="email-input float-left" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Email"/>
                                <Button type="submit" className="float-left">搶先體驗</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;