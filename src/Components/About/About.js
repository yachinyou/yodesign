import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './About.css';

class AboutPage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container about">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <h2>優設計</h2>
                        <p>謝高視一保落續其們作是樹作的天的一自部片稱帶，就白男如分神性計平線論名不；人前流爸出溫能。去是物球中格便人河到。少代大一學人第大來。好具動兒育備主經三的動為石可機入星價，夫方走好真家好車八經，管相心點、推條水步會星界不！量任在愛是上整大酒著不希，大天雖怎親支父雙式股間智。</p>
                        <p>謝高視一保落續其們作是樹作的天的一自部片稱帶，就白男如分神性計平線論名不；人前流爸出溫能。去是物球中格便人河到。少代大一學人第大來。好具動兒育備主經三的動為石可機入星價，夫方走好真家好車八經，管相心點、推條水步會星界不！量任在愛是上整大酒著不希，大天雖怎親支父雙式股間智。</p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                </div>
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

export default AboutPage;