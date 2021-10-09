import React, { Component } from 'react';
import { Col, Container,Image  } from 'react-bootstrap';

import Logo from '../../../assets/img/logo.svg';
import './Footer.scss';

const Footer = () => {
        return (
            <div className="Footer">
                   <Container>
                        <div className="row p-4">

                        <Col xs={4}>
                            <Image className="logo" src={Logo} alt="Logo" />
                            <div>Copyright &#169; 2020</div>
                            <span className="footer-link">Privacy - Terms</span>
                        </Col>
                        <Col>
                        </Col>
                        
                    </div>
                    </Container>
            </div>
        )
}

export default Footer;
