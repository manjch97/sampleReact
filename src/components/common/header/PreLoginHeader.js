import React, { Component } from 'react';
import { Navbar, Row, Col, Button } from 'react-bootstrap';
import { useHistory, withRouter, NavLink } from "react-router-dom";
import Logo from '../../../assets/img/logo.svg';
import './Header.scss';
import {fireClickEvent} from '../../../helper/GTMHelper';

const PreLoginHeader = () => {
    
    let history = useHistory();

    const handleLogin = () => {
        fireClickEvent(null, history.location.pathname,"signup_click",{});
        history.push("/login")
      };
    const handleArticle = () => {
        fireClickEvent(null, history.location.pathname,"booth_article_click",{});
        history.push("/booths/articles") 
    }
    const gameDemos = () => {
        fireClickEvent(null, history.location.pathname,"gamedemos_click",{});
        history.push("/game-demos") 
    }

      return (
        <React.Fragment>
            <div className="d-none d-md-block">
                  <Navbar variant="light" expand="lg" className="fixed-top shadow-sm safearea-header bg-white">
                    <Col xs={4} md={3}>
                        <Row className="justify-content-center align-items-center">
                            <Col className="px-0" xs={3}>
                                <img className="logo ml-3" src={Logo} alt="E3 logo" />
                            </Col>
                            <Col xs>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                    <Row className="icons justify-content-end align-items-end Accessibility_btn">
                        <Button onClick={handleLogin} className="ml-3">Signup / Login</Button>
                        {/* <Button onClick={handleArticle} className="ml-2">Articles</Button>
                        <Button onClick={gameDemos} className="ml-2">GameDemos</Button> */}
                    </Row>
                    </Col>
                </Navbar>
            </div>
        </React.Fragment>
    )
}
export default withRouter(PreLoginHeader);
