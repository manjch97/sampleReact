import React, { useState,useEffect } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useSelector } from "react-redux";
import '../../../../assets/styles/style.scss';
import { fireClickEvent } from "../../../../helper/GTMHelper";
import FocusLock, { AutoFocusInside } from "react-focus-lock";

const Settings = props => {
    // return (
    //         <Modal  size="lg" centered show={props.show} onHide = {props.handleSettingsClick} animation={false}>
    //             <FocusLock>
    //                 <AutoFocusInside>
    //                     <Modal.Header className="font-weight-light border-0" closeButton />
    //                     <Modal.Body>
    //                         <div className="d-none d-md-block">
    //                             <Row className="text-center justify-content-center align-items-center m-auto">
    //                                 <Col className="text-center">
    //                                     <h4 className="text-xl text-uppercase font-weight-bold">Settings</h4>
    //                                     <h6 className="my-2 text-muted text-md">We'll Notify You About:</h6>
    //                                 </Col>
    //                             </Row>
    //                         </div>
    //                         <div className="mobile d-block d-md-none">
    //                             <div className="my-4 pt-3"></div>
    //                             <Row>
    //                                 <Col>
    //                                     <h4 className="text-xl text-uppercase font-weight-bold"><ArrowLeft /> Settings</h4>
    //                                     <h6 className="my-2 text-muted text-md">We'll Notify You About:</h6>
    //                                 </Col>
    //                             </Row>
    //                         </div>
    //                         <div className="my-2 pt-3"></div>
    //                         <Row xs={1} md={2}>
    //                             <Col>
    //                                 <span className="text-uppercase text-x1 font-weight-bold">Email</span>
    //                                 <div className="d-none d-md-block">
    //                                     <div className="my-2 pt-3"></div>
    //                                     <div className="BGColor">
    //                                         <div className="text-align">Daily E3 Updates </div>
    //                                         <div className="switch-button"> <Form.Switch /></div>
    //                                     </div>
    //                                     <div className="my-2 pt-3"></div>
    //                                     <div className="BGColor">
    //                                         <div className="text-align">Your activity overview </div>
    //                                         <div className="switch-button"> <Form.Switch /></div>
    //                                     </div>
    //                                     <div className="my-2 pt-3"></div>
    //                                 </div>
    //                                 <div className="BGColor">
    //                                     <div className="text-align">Daily chat requests and messages </div>
    //                                     <div className="switch-button"> <Form.Switch /></div>
    //                                 </div>
    //                                 <div className="my-2 pt-3"></div>
    //                                 <div className="BGColor">
    //                                     <div className="text-align">Your activity overview </div>
    //                                     <div className="switch-button"> <Form.Switch /></div>
    //                                 </div>
    //                                 <div className="d-none d-md-block">
    //                                     <div className="my-2 pt-3"></div>
    //                                     <div className="BGColor">
    //                                         <div className="text-align">Daily chat requests and messages </div>
    //                                         <div className="switch-button"> <Form.Switch /></div>
    //                                     </div>
    //                                 </div>
    //                             </Col>

    //                             <Col>
    //                                 <span className="text-uppercase text-x1 font-weight-bold">Push Notifications</span>
    //                                 <div className="my-2 pt-3"></div>
    //                                 <div className="BGColor">
    //                                     <div className="text-align">New Content Release </div>
    //                                     <div className="switch-button"> <Form.Switch /></div>
    //                                 </div>
    //                                 <div className="my-2 pt-3"></div>
    //                                 <div className="BGColor">
    //                                     <div className="text-align">Upcoming Schedule Notifications </div>
    //                                     <div className="switch-button"> <Form.Switch /></div>
    //                                 </div>
    //                                 <div className="my-2 pt-3"></div>
    //                                 <div className="BGColor">
    //                                     <div className="text-align">New Reward Available </div>
    //                                     <div className="switch-button"> <Form.Switch /></div>
    //                                 </div>
    //                                 <div className="my-2 pt-3"></div>
    //                                 <div className="BGColor">
    //                                     <div className="text-align">Reminders about your schedule </div>
    //                                     <div className="switch-button"> <Form.Switch /></div>
    //                                 </div>
    //                                 <div className="my-2 pt-3"></div>
    //                                 <div className="BGColor">
    //                                     <div className="text-align">Direct Message updates </div>
    //                                     <div className="switch-button"> <Form.Switch /></div>
    //                                 </div>
    //                             </Col>
    //                         </Row>
    //                         <div className="my-2 pt-3"></div>
    //                         <Row>
    //                             <Col className="text-center PrimaryBtn">
    //                                 <Button variant="primary" className="my-2" size="sm">Save</Button>
    //                             </Col>
    //                         </Row>
    //                         <div className="my-2 pt-3"></div>
    //                         <Row>
    //                             <Col>
    //                                 By turning on mobile notifications you agree to our rumms <u className="font-weight-normal cursor font-weight-bold">Terms & Conditions</u> of Use and <u className="font-weight-normal cursor font-weight-bold">Privacy Policy</u> and to receiving text and push notifications. Texts may be sent using automatic telephone dialing systems. Message and data rates may apply.
    //                     </Col>
    //                         </Row>
    //                     </Modal.Body>
    //                 </AutoFocusInside>
    //             </FocusLock>
    //         </Modal>
    // )
}
export default Settings; 