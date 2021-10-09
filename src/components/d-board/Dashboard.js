import React, { Component } from "react";

import { Row, Col, Container } from "react-bootstrap";

import Header from "../common/header/Header";
import DashNav from "./nav/Dboard";
import Booth from "./booths/Booth";
import Arcade from "./e3-arcade/Arcade";
import Happennow from "./hap-now/Happennow";
import PopularEvent from "./popular-event/Popularevent";

export default class DashboardRef extends Component {
  state={
    
  }
  
  componentDidMount(){
     
  }
  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Col xs={2} className="YourSchedule">
              <DashNav />
            </Col>
            <Col xs={10} className="Dashboard">
              <Row className="px-3">
                <Col className="pr-4" xs={6}>
                  <Booth />
                </Col>
                <Col className="pl-4" xs={6}>
                  <Arcade />
                </Col>
              </Row>

              <Happennow />
              <PopularEvent />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
