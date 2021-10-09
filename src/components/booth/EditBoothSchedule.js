import React from "react"
import close from '../../assets/img/booths/Vector9.svg';
import { useHistory } from "react-router-dom";
import { Form, Modal, Image } from 'react-bootstrap';
import * as InputFields from '../../components/account/signup/comp/InputFields';
import { Upload } from "react-bootstrap-icons";
import upload from '../../assets/img/upload/upload.svg';
import { Button, Row, Col } from "react-bootstrap";

export const EditBoothSchedule = (props) => {

    return (
           <Modal className="confirmationPopup"
                size="lg"
                keyboard={true}
                centered show={props.show} onHide={props.hideModal} >

                <Modal.Body className="p-3">
                    <Image onClick={props.hideModal} className='fl-right' src={close} alt="Logo"></Image>
                    <Row>
                        <Col xl={12} xs={12} className="text-center">
                            <h5 className="title">EDIT BOOTH SCHEDULE</h5>
                            <span className="sub-title" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                        </Col>
                    </Row>
                    <div className="my-2 pt-3"></div>
                    <Row>
                        <Col xl={6} xs={6}>
                            <Form.Group controlId="Title of the event" className="input-field">
                                <Form.Control
                                    type="text"
                                    placeholder="Title of the event"
                                />
                            </Form.Group>
                        </Col>
                        <Col xl={6} xs={6}>
                            <Form.Group controlId="Time" className="input-field">
                                <Form.Control
                                    type="text"
                                    placeholder="Time"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="my-2 pt-3"></div>
                    <Row>
                        <Col xl={6} xs={6}>
                            <Form.Group controlId="Place" className="input-field">
                                <Form.Control
                                    type="text"
                                    placeholder="Place"
                                />
                            </Form.Group>
                        </Col>
                        <Col xl={6} xs={6}>

                            <Form.Group className="input-field">

                                <div className="custom-file">
                                    <Form.Control id="licenseFileUpload" type="file" className="custom-file-input form-control" />
                                    <label id="lblLicenseFileUpload" className="custom-file-label form-control" htmlFor="licenseFileUpload">
                                        Image
                </label>
                                    <div className="upload">
                                        <label htmlFor="upload">
                                            <div>
                                                <Upload />
                                            </div>
                                            <small>Max-size: 2mb</small>
                                        </label>
                                        <div className="upload">
                                            <label htmlFor="upload">
                                                <div>
                                                    <Upload />
                                                </div>
                                                <small>Max-size: 2mb</small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Form.Group>

                        </Col>
                    </Row>
                    <div className="my-2 pt-3"></div>
                    <Row>
                        <Col xl={12} xs={12}>
                            <Form.Group controlId="Description" className="input-field">
                                <Form.Control
                                    type="textarea"
                                    placeholder="Description"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="my-2 pt-3"></div>
                    <Row>
                        <Col className="text-center PrimaryBtn">
                            <Button variant="primary" className="my-2" onClick={props.hideModal}>Submit</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
    );
}