import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import orderbag from '../../../assets/img/booths/o-bag.svg';
import shipping from '../../../assets/img/booths/trolley.svg';
import right from '../../../assets/img/booths/right.svg';
import person from '../../../assets/img/booths/person.svg';
import payment from "../../../assets/img/booths/dollar.svg";
import { Button, Row, Col, Form, Container, Tabs, Tab, Image, InputGroup } from "react-bootstrap";

export const HelpCarousel = (props) => {
  return (
    <React.Fragment>
      <Carousel className="carousel slide" data-ride="carousel">
        <Carousel.Item>
          <Row>
            <Col xs={3}>
              <Image src={orderbag} className="d-block w-20" alt="My orders" />
              <p className="d-flex justify-content-center p-2">My order</p>
            </Col>
            <Col xs={3}>
              <Image src={shipping} className="d-block w-20" alt="Shipping" /> <p className="d-flex justify-content-center p-2">Shipping</p>
            </Col>
            <Col xs={3}>
              <Image src={right} className="d-block w-20" alt="My orders" /> <p className="d-flex justify-content-center p-2">Cofirmation</p>
            </Col>
            <Col xs={3}>
              <Image src={person} className="d-block w-20" alt="User" /> <p className="d-flex justify-content-center p-2">Account</p>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={3}>
              <Image src={payment} className="d-block w-20" alt="Payment" /> <p className="d-flex justify-content-center p-2">Payment</p>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  )
}