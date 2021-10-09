import React, { Component } from 'react';
import { Navbar, InputGroup, Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory, withRouter } from "react-router-dom";
import Logo from '../../../assets/img/logo.svg';
import './Header.scss';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'

const PostLoginHeader = (props) => {

    let history = useHistory();

    let isMobile = props?.mobile;

    const Tologin = () => {
        history.push('/login');
    };

    return (
        // !isMobile ?
        <React.Fragment>
            {/* <DeviceOrientation lockOrientation={'portrait'}> */}
                {/* <Orientation orientation='portrait' alwaysRender={false}> */}
            <Navbar variant="light" expand="lg" className="fixed-top shadow-sm safearea-header bg-white">
                        <Col xs={10} md={10}>
                            <Row className="justify-content-center align-items-center">
                                <Col className="px-0" xs={3}>
                                    <img className="logo ml-3" src={Logo} alt="E3 logo" />
                                </Col>
                                <Col xs>

                                </Col>
                            </Row>
                        </Col>
                    </Navbar>
                {/* </Orientation> */}
            {/* </DeviceOrientation> */}
        </React.Fragment>
        // :
        // <React.Fragment/>
    )

}

export default PostLoginHeader;
