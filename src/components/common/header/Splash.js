
import React, { Component } from 'react';
import { Button,Image,Row,Col } from 'react-bootstrap';
import {  withRouter } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import Logo from '../../../assets/img/logo-splash.svg';
import './Header.scss';
import '../../../assets/styles/style.scss';


class Splash extends Component {
    handleLogin = () => {
        this.props.history.push('/login');
    }
    componentDidMount() {
        setTimeout( () => {
            this.handleLogin(); 
        },2000);
    }
    render() {
        return (
            <React.Fragment>
                <div className="splash d-block d-md-none">
                    <div className="flexbox splashImg">
                        <div>
                            <Image src={Logo} style={{ width: 150 }}  alt="Spalsh logo" />
                            <div className="bt-spinner">
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(Splash);
