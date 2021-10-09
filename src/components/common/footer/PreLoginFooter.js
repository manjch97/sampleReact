import React, { Component } from 'react';
import { Col, Container,Image  } from 'react-bootstrap';

import Logo from '../../../assets/img/logo.svg';
import './Footer.scss';

const PreLoginFooter = () => {
        return (
            <div>
                    <div className="my-2 pt-2"></div>
                   <Container>
                        <div className="row p-4">
                        <Col xs={4}>
                            <Image className="logo" src={Logo} alt="Logo" />
                            <div>Copyright &#169; 2020</div>
                            <span className="footer-link">Privacy - Terms</span>
                        </Col>
                        <Col>
                           <div><b>Product</b></div>
                            <div>Product</div>
                        </Col>
                        <Col>
                            <div><b>Features</b></div>
                            <div>Feature</div>
                        </Col> <Col>
                            <div><b>Resources</b></div>
                            <div>Resource</div>
                        </Col> <Col>
                            <div><b>Company</b></div>
                         </Col>
                    </div>
                    </Container>
            </div>
        )
    
}

export default PreLoginFooter;
