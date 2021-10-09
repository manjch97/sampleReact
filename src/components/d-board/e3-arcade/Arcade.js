import React, { Component } from "react";

import { Row, Col, Badge,Image } from "react-bootstrap";
import { CheckCircleFill, CalendarWeek } from "react-bootstrap-icons";

import modernWarfare from "../../../assets/img/dashboard/4.jpg";
import "./Arcade.scss";

export default class Arcade extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-end align-items-end mb-3">
          <Col xs={8}>
            <h6 className="mb-0">E3 Arcade</h6>
          </Col>
          <Col xs={4} className="mt-4 pr-0">
            <div className="viewAll text-right">ViewAll</div>
          </Col>
        </Row>
        <Row className="Arcade ">
          <Col xs={4}>
            <div className="ArcadeLive">
              <Badge pill className="PUBGMobile darkGray my-0">
                Live
              </Badge>
              <Badge pill variant="light" className="PUBGMobile my-0">
                P2,256
              </Badge>
              <Badge pill variant="light" className="PUBGMobile my-0">
                PUBG Mobile
              </Badge>
            </div>

            <Image src={modernWarfare} alt="" rounded />
            <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar">
              <div className="ArcadeAvatar pr-0">
                <div></div>
              </div>
              <div className="w-80 mx-2">
                <div className="text-sm">Zelda </div>
                <small className="text-xs">Nintendo</small>{" "}
                <span>
                  <CheckCircleFill />
                </span>
              </div>
              <div className="mr-3">
                <div className="calendar">
                  <CalendarWeek />
                  <small>
                    <span>+</span>Add
                  </small>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <Image src={modernWarfare} alt="" rounded />
          </Col>
          <Col xs={4}>
            <Image src={modernWarfare} alt="" rounded />
          </Col>
        </Row>
      </div>
    );
  }
}
