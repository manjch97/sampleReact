import React, { Component } from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";
import { CheckCircleFill, Eye, ArrowLeftRight, ThreeDotsVertical, CalendarEvent } from 'react-bootstrap-icons';
import pubg from "../../assets/img/dashboard/icon.svg";
import Slider from "react-slick";

import img from "../../assets/img/booths/4.svg";
import logo1 from "../../assets/img/dashboard/1.jpg";
import logo2 from "../../assets/img/dashboard/2.jpg";
import logo3 from "../../assets/img/dashboard/3.jpg";
import user1 from "../../assets/img/dashboard/user1.jpg";
import user2 from "../../assets/img/dashboard/user2.jpg";
import user3 from "../../assets/img/dashboard/user3.jpg";
import useravt from "../../assets/img/landing/games.svg";
import './Dashboard.scss';
import '../search/Search.scss';
var settings = {
    slidesToShow: 3,
    swipeToSlide: false,
    swipe: false,
    arrows: false,
    responsive: [

        {
            breakpoint: 1200,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                swipe: true,
                arrows: true,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                swipe: true,
                arrows: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipe: true,
                arrows: true,
            },
        },
    ],
};

export default class GameDemo extends Component {

    render() {
        const gamedemoObj = [{
            name: "xBox",
            image: logo1,
            userImg: user1
        },
        {
            name: "Playstation",
            image: logo2,
            userImg: user2
        },
        {
            name: "Nintendo",
            image: logo3,
            userImg: user3
        }]
        return (
            <React.Fragment>
                <div className="happingNow">
                    <Row>
                        <Col xs={8}>
                            <h6 className="text-grey  text-16 mb-3">Game Demo</h6>
                        </Col>
                        <Col className="text-right" xs={4}>
                            <a className="text-grey3 text-xs" tabIndex="0">VIEW ALL</a>
                        </Col>
                    </Row>

                    <Slider {...settings}>
                        {[...Array(8)].map((item, index) => {
                            return (
                                <div className=" pr-2 mb-3 l-s-con GameDemo" tabIndex="0">
                                    <div className="position-absolute" tabIndex="-1">
                                        <Badge variant="warning"  className="ml-1 mr-0 mt-2 l-s-badge l-s-live my-0">
                                            LIVE
                                            </Badge>
                                        <Badge pill variant="light"  className="ml-1 mr-0 mt-2 l-s-badge my-0">
                                            <span className="pr-1">
                                                <Eye />
                                            </span>
                                            2k2
                                        </Badge>
                                        <Badge pill variant="light"  className="mr-0 mt-2 l-s-badge my-0 ml-1">
                                            <span className="pubg">
                                                <Image src={pubg} />
                                            </span>
                                            <span>
                                                PUBG Mobile
                                        </span>
                                        </Badge>
                                    </div>

                                    <Image className="img" src={img} alt="booths" />
                                    <Row className="mt-1 d-flex justify-content-start align-items-center">
                                        <Col className="l-s-l mr-0 my-2 pr-0 ">
                                            <div tabIndex="0" className="l-s-avatar  d-flex justify-content-center align-items-center">
                                                <div className="ArcadeAvatar pr-0">
                                                    <Image src={useravt} alt="Avtar" />
                                                </div>
                                                <div className="w-90 pl-1 justify-content-center align-items-center">
                                                    <div className="text-sm">PUBG Up 2.0</div>
                                                    <small className="text-xs text-muted">PUnknown  <span className="ml-2 ">
                                                        <CheckCircleFill className="text-danger" />
                                                    </span></small>{" "}
                                                    <span className="primary">
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="l-s-r px-0 mx-0 d-flex justify-content-end align-items-center">
                                            <div className="l-s-cal " tabIndex="0">
                                                <CalendarEvent />
                                                <div className="m-0">+Add</div>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            )
                        })}
                    </Slider>

                </div>

            </React.Fragment>
        );
    }
}
