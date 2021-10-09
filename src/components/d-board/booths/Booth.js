import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

import logo from "../../../assets/img/dashboard/4.jpg";
import logo1 from "../../../assets/img/dashboard/4.jpg";
import logo2 from "../../../assets/img/dashboard/4.jpg";
import "./Booth.scss";

export default class Booth extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-end align-items-end mb-3">
          <Col xs={8}>
            <h6 className="mb-0">Booths that you are following</h6>
          </Col>
          <Col xs={4} className="mt-4 pr-0">
            <div className="viewAll text-right">ViewAll</div>
          </Col>
        </Row>
        <Row className="justify-content-end align-items-end mb-3 Booths">
          <Col xs={2}>
            <div>
              <Image src={logo2} alt="" rounded />
              <div className="Microsoft">Microsoft </div>
            </div>
          </Col>
          <Col xs={2}>
            <div>
              <Image src={logo} alt="" rounded />
              <div className="Microsoft">Microsoft </div>
            </div>
          </Col>
          <Col xs={2}>
            <div>
              <Image src={logo1} alt="" rounded />
              <div className="Microsoft">Microsoft </div>
            </div>
          </Col>
          <Col xs={2}>
            <div>
              <Image src={logo2} alt="" rounded />
              <div className="Microsoft">Microsoft </div>
            </div>
          </Col>
          <Col xs={2}>
            <div>
              <Image src={logo} alt="" rounded />
              <div className="Microsoft">Microsoft </div>
            </div>
          </Col>
          <Col xs={2}>
            <div>
              <Image src={logo1} alt="" rounded />
              <div className="Microsoft">Microsoft </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
