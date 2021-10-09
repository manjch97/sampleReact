import React, { Component } from "react";
import { Button, Row, Col, Form, Container, Tabs, Tab, Image, InputGroup } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { WebHeader } from "../../../helper/CommonHelper";
import { connect } from "react-redux";
import TopIcon from "../../../assets/img/booths/order-bag.svg";
import right from "../../../assets/img/booths/right.svg";
import shipping from "../../../assets/img/booths/trolley.svg";
import payment from "../../../assets/img/booths/dollar.svg";
import person from "../../../assets/img/booths/person.svg";
import { Search, Trophy, ChatLeftDots, Globe, Bell } from "react-bootstrap-icons";
import tick from '../../../assets/img/booths/tick.svg';
import orderbag from '../../../assets/img/booths/shipping.svg';
import { HelpCarousel } from "./HelpCarousel";
import {PopulateMetaTags} from "../../../helper/CommonHelper";

const mapStateToProps = (state) => ({
    currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

const images = [orderbag, right, shipping, payment, person];


class Help extends Component {

    state = {
   
  };
     componentDidMount() {
       
    }

    render() {

        return (
            <React.Fragment>
                <WebHeader props={this.props} />
                 <PopulateMetaTags  title={"E3 Expo Event-Help"} description={"E3 Expo Event-Help"}/>
                <div className="my-5 pt-2"></div>
                <Row className="m-3">
                    <Col md={{ span: 5, offset: 1 }}>
                        <h5 className="d-flex justify-content-start">YOU GOT A <span style={{ color: '#E73D2F' }}>&nbsp; PROBLEM</span></h5>
                        <p style={{ color: '#828282' }} className="d-flex justify-content-start">Don worry we will help you to solve the problem</p>
                    </Col>
                    <Col md={{ span: 3, offset: 1 }}>
                        <InputGroup className="search">
                            <Form.Control className="Search-input" type="text" placeholder="Search.." />
                            <InputGroup.Prepend>
                                <InputGroup.Text><Search /></InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="m-3">
                    <Col xs={12} md={{ span: 6, offset: 1 }} className="d-none d-md-block">
                        <h6 style={{ color: '#828282' }} className="d-flex justify-content-start">POPULAR CATEGORIES</h6>
                        <Row className="pt-2">
                            <Col md={3}>
                                <Image src={TopIcon} alt="Logo" />
                                <p className="d-flex justify-content-center p-2">My Order</p>
                            </Col>
                            <Col md={3}>
                                <Image src={shipping} alt="Logo" />
                                <p className="d-flex justify-content-center p-2">Shipping</p>
                            </Col>
                            <Col md={3}>
                                <Image src={right} alt="Logo" />
                                <p className="d-flex justify-content-center p-2">Cofirmation</p>
                            </Col>
                        </Row>
                        <Row className="pt-2 ">
                            <Col md={3}>
                                <Image src={person} alt="Logo" />
                                <p className="d-flex justify-content-center p-2">Account</p>
                            </Col>
                            <Col md={3}>
                                <Image src={payment} alt="Logo" />
                                <p className="d-flex justify-content-center p-2">Payment</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} md={4}>
                        <Col className="d-flex p-2">
                            <h6 style={{ color: '#333333' }}>POPULAR QUESTIONS</h6>
                            <p className="ml-auto p-2" style={{ color: '#828282' }} >VIEW ALL</p>
                        </Col>
                        <div className="d-flex">
                            <div className="p-2 mt-2"><img src={tick} alt="Logo" /></div><div className="mr-auto p-2 bottom-border f-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2 mt-2"><img src={tick} alt="Logo" /></div><div className="mr-auto p-2 bottom-border f-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

                        </div>
                        <div className="d-flex">
                            <div className="p-2 mt-2"><img src={tick} alt="Logo" /></div><div className="mr-auto p-2 bottom-border f-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

                        </div>
                        <div className="d-flex">
                            <div className="p-2 mt-2"><img src={tick} alt="Logo" /></div><div className="mr-auto p-2 bottom-border f-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

                        </div>
                        <div className="d-flex">
                            <div className="p-2 mt-2"><img src={tick} alt="Logo" /></div><div className="mr-auto p-2 bottom-border f-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </Col>
                </Row>
                <Row className="m-3 mobile d-block d-md-none">
                    <h6>Popular categories</h6>
                    <Col xs={12} className="mobile d-block d-md-none d-flex p-0">
                        <HelpCarousel />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Help));
