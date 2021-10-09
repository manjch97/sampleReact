import React, { Component } from 'react';

import { Badge, ResponsiveEmbed, Row, Col, Image } from 'react-bootstrap';
import {  CameraVideoFill,ChevronRight } from 'react-bootstrap-icons';

import NBA from '../../../assets/img/dashboard/4.jpg';
import './Dboard.css';

export default class Dboard extends Component {
    render() {
        return (
            <div>
               <Row className="justify-content-end align-items-end mb-3">
                    <Col xs={8}>
                    <h6 className="mb-0">Your Schedule</h6>
                    </Col>
                    <Col xs={4}>
                        <div className="viewAll text-right">ViewAll</div>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center mb-2">
                    <Col xs={6}>
                        <div>
                            <div className="live">Live</div>
                            <ResponsiveEmbed>
                                <Image src={NBA} alt="2k2d" rounded responsive />
                            </ResponsiveEmbed>
                        </div>
                    </Col>
                    <Col xs={6} className="p-0">
                    <div className="text-sm">LOREM IPSUM</div>
                        <Badge pill variant="light" className="PUBGMobile my-2">PUBG Mobile</Badge>
                        <div><small className="text-muted">07:10 AM</small></div>
                        
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center mb-2">
                    <Col xs={6}>
                        <div>
                            <div className="live">Live</div>
                            <ResponsiveEmbed>
                                <Image src={NBA} alt="2k2d" rounded responsive />
                            </ResponsiveEmbed>
                        </div>
                    </Col>
                    <Col xs={6} className="p-0">
                    <div className="text-sm">LOREM IPSUM</div>
                        <Badge pill variant="light" className="PUBGMobile my-2">PUBG Mobile</Badge>
                        <div><small className="text-muted">07:10 AM</small></div>
                        
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center mb-2">
                    <Col xs={6}>
                        <div>
                            <div className="live">Live</div>
                            <ResponsiveEmbed>
                                <Image src={NBA} alt="2k2d" rounded responsive />
                            </ResponsiveEmbed>
                        </div>
                    </Col>
                    <Col xs={6} className="p-0">
                    <div className="text-sm">LOREM IPSUM</div>
                        <Badge pill variant="light" className="PUBGMobile my-2">PUBG Mobile</Badge>
                        <div><small className="text-muted">07:10 AM</small></div>
                        
                    </Col>
                </Row>
                <Row className="justify-content-end align-items-end mb-3">
                    <Col xs={8}>
                    <h6 className="mb-0">Active People</h6>
                    </Col>
                    <Col xs={4} className="mt-4">
                        <div className="viewAll text-right">ViewAll</div>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center mb-2">
                    <Col xs={4}>
                        <div className="Avatar">
                            <div className="VideoIcon"><CameraVideoFill/></div>
                        </div>
                    </Col>
                    <Col xs={6} className="p-0">
                    <div className="text-sm">John Doe</div>
                        <Badge pill  className="PUBGMobile darkGray my-2">PUBG Mobile</Badge>
                        
                    </Col>
                    <Col xs={1} className="pl-0">
                        <ChevronRight/>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center mb-2">
                    <Col xs={4}>
                        <div className="Avatar">
                            <div className="VideoIcon"><CameraVideoFill/></div>
                        </div>
                    </Col>
                    <Col xs={6} className="p-0">
                    <div className="text-sm">John Doe</div>
                        <Badge pill  className="PUBGMobile darkGray my-2">PUBG Mobile</Badge>
                        
                    </Col>
                    <Col xs={1} className="pl-0">
                        <ChevronRight/>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center mb-2">
                    <Col xs={4}>
                        <div className="Avatar">
                            <div className="VideoIcon"><CameraVideoFill/></div>
                        </div>
                    </Col>
                    <Col xs={6} className="p-0">
                    <div className="text-sm">John Doe</div>
                        <Badge pill  className="PUBGMobile darkGray my-2">PUBG Mobile</Badge>
                        
                    </Col>
                    <Col xs={1} className="pl-0">
                        <ChevronRight/>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center mb-2">
                    <Col xs={4}>
                        <div className="Avatar">
                            <div className="VideoIcon"><CameraVideoFill/></div>
                        </div>
                    </Col>
                    <Col xs={6} className="p-0">
                    <div className="text-sm">John Doe</div>
                        <Badge pill  className="PUBGMobile darkGray my-2">PUBG Mobile</Badge>
                        
                    </Col>
                    <Col xs={1} className="pl-0">
                        <ChevronRight/>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center mb-2">
                    <Col xs={4}>
                        <div className="Avatar">
                            <div className="VideoIcon"><CameraVideoFill/></div>
                        </div>
                    </Col>
                    <Col xs={6} className="p-0">
                    <div className="text-sm">John Doe</div>
                        <Badge pill  className="PUBGMobile darkGray my-2">PUBG Mobile</Badge>
                        
                    </Col>
                    <Col xs={1} className="pl-0">
                        <ChevronRight/>
                    </Col>
                </Row> 
            </div>
        )
    }
}
