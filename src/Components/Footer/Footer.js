import React, { Component } from 'react';
import './Footer.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="footer paper">
                <h2>創造雙贏局面</h2>
                <h6>優設計幫您節省時間</h6>
                <div className="form-container">
                    <form action="https://uxchallenge.us2.list-manage.com/subscribe/post" method="POST">
                        <Input type="hidden" name="u" value="7cdd3e7148bfb13d3deb11a50" />
                        <Input type="hidden" name="id" value="95cf058f11" />    
                        <Input className="email-input float-left" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Email"/>
                        <Button type="submit" className="float-left">搶先體驗</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Footer;