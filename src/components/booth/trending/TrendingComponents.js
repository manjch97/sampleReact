import React from "react";
import './Trending.scss';
import { Row, Col, Container, Button, Badge } from 'react-bootstrap';
import badge from '../../../assets/img/trending/badge.jpg';
import badge1 from '../../../assets/img/trending/badge1.jpg'; 
import gamedemo from '../../../assets/img/trending/gamedemo.jpg'; 
import trending from '../../../assets/img/trending/trending.jpg'; 

import { Eye, CalendarEvent, CheckCircleFill, ThreeDotsVertical } from "react-bootstrap-icons";
import Slider from "react-slick";

export const TrendingBadge = (props) => {
    var settings = {
        slidesToShow: 5,
        swipeToSlide: false,
        swipe: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 5,
                    slidesToShow: 5,
                    slidesToScroll: 5,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                    arrows: true,
                },
            },
        ],
    };
    const TrendingBadgeobj = [
        { image: badge, },
        { image: badge1, },
        { image: badge, },
        { image: badge1, },
        { image: badge1, },
    ]
    return (
        <React.Fragment>

            <Row className="px-1 ">
                <Col md={8} xs={6}>
                    <h6 className="text-grey text-16 mb-0 text-uppercase">Badges people are going after</h6>
                </Col>
                <Col md={4} xs={6} className="text-right d-flex justify-content-end align-items-end">
                    <a className="text-grey3  text-sm pr-5 pr-lg-0">VIEW ALL</a>
                </Col>
            </Row>
            <div className="Trending mt-0 ">
                
                    <Slider {...settings}>
                    {TrendingBadgeobj.map((item, i) => {
                        return (
                        <div>
                                <div className="badgeBor  mx-1">
                                <img src={item.image} alt="badge" />
                            </div>
                        </div>
                        )
                    })}
                    </Slider>
               
                
            </div>
        </React.Fragment>
    )
};
export const GameDemos = (props) => {
    var settings = {
        slidesToShow: 4,
        swipeToSlide: false,
        swipe: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 4,
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
    const TrendingBadgeobj = [
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        
    ]
    return (
        <React.Fragment>
            

            <Row className="px-1 ">
                <Col md={8} xs={6}>
                    <h6 className="text-grey text-16 mb-0 text-uppercase">Game Demos</h6>
                </Col>
                <Col md={4} xs={6} className="text-right d-flex justify-content-end align-items-end">
                    <a className="text-grey3 text-sm pr-5 pr-lg-0">VIEW ALL</a>
                </Col>
            </Row>
                <Slider {...settings}>

                    {TrendingBadgeobj.map((item, i) => {
                        return (
                            <div>
                                <div className=" pr-lg-2 px-1  mb-3 l-s-con GameDemo">
                                    <div className="position-absolute">
                                        <Badge variant="danger" className="ml-2 mr-0 mt-2 l-s-badge l-s-live my-0">
                                            LIVE
                                        </Badge>
                                        <Badge pill variant="warning" className="ml-2 mr-0 mt-2 l-s-badge my-0">
                                            <span className="pr-1">
                                                <Eye />
                                            </span>
                                                2k2
                                        </Badge>
                                        {/* <Badge pill variant="light" className="ml-2 mr-0 mt-2 l-s-badge my-0 ">
                                            <span className="pubg">
                                                <img src={gamedemo} />
                                            </span>
                                            <span>
                                                PUBG Mobile
                                            </span>
                                        </Badge> */}
                                    </div>

                                    <img className="img" src={gamedemo} alt="booths" />
                                    <Row className="d-flex justify-content-start align-items-center">
                                        <Col className="mr-0 my-1 pr-0 ">
                                            <div className="l-s-avatar  d-flex justify-content-center align-items-center">
                                                <div className="ArcadeAvatar AvatarSm pr-0">
                                                    <img src={gamedemo} alt="Avtar" />
                                                </div>
                                                <div className="w-90 pl-1 justify-content-center align-items-center">
                                                    <div className="text-13 gray">PUBG Up 2.0</div>
                                               
                                                </div>
                                            </div>
                                        </Col>
                                        
                                    </Row>

                                </div>
                            </div>
                        )
                    })}
                
                </Slider>
            
        </React.Fragment>
    )
};
export const TrendingBooths = (props) => {
    var settings = {
        slidesToShow: 8,
        swipeToSlide: false,
        swipe: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 6,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: false,
                    swipe: true,
                    arrows: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToScroll: 4,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    swipe: true,
                    arrows: true,
                },
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    swipe: true,
                    arrows: true,
                },
            },
        ],
    };
    const TrendingBadgeobj = [
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, }

    ]
    return (
        <React.Fragment>


            <Row className="px-1 ">
                <Col md={8} xs={6}>
                    <h6 className="text-grey text-16 mb-0 text-uppercase">trending booths</h6>
                </Col>
                <Col md={4} xs={6} className="text-right  d-flex justify-content-end align-items-end">
                    <a className="text-grey3  text-sm pr-5 pr-xl-0">VIEW ALL</a>
                </Col>
            </Row>
            <Slider {...settings}>

                {TrendingBadgeobj.map((item, i) => {
                    return (
                        <div>
                            <div className=" pr-lg-2 px-1  mb-3 l-s-con GameDemo">
                                <div className="position-absolute">
                                    <Badge variant="danger" className="ml-2 mr-0 mt-2 l-s-badge l-s-live my-0">
                                        LIVE
                                        </Badge>
                                    <Badge pill variant="warning" className="ml-2 mr-0 mt-2 l-s-badge my-0">
                                        <span className="pr-1">
                                            <Eye />
                                        </span>
                                                2k2
                                        </Badge>
                                    {/* <Badge pill variant="light" className="ml-2 mr-0 mt-2 l-s-badge my-0 ">
                                            <span className="pubg">
                                                <img src={gamedemo} />
                                            </span>
                                            <span>
                                                PUBG Mobile
                                            </span>
                                        </Badge> */}
                                </div>

                                <img className="img" src={gamedemo} alt="booths" />
                                <Row className="d-flex justify-content-start align-items-center">
                                    <Col className="mr-0 my-1 pr-0 ">
                                        <div className="l-s-avatar  d-flex justify-content-center align-items-center">
                                            <div className="ArcadeAvatar  AvatarSm pr-0">
                                                <img src={gamedemo} alt="Avtar" />
                                            </div>
                                            <div className="w-90 pl-1 justify-content-center align-items-center">
                                                <div className="text-13 gray">Booth Name</div>
                                                {/* <small className="text-xs text-muted">PUnknown  <span className="ml-2 ">
                                                        <CheckCircleFill className="text-danger" />
                                                    </span></small>{" "}
                                                    <span className="primary">
                                                    </span> */}
                                            </div>
                                        </div>
                                    </Col>
                                    {/* <Col className="l-s-r px-0 mx-0 d-flex justify-content-end align-items-center">
                                            <div className="l-s-cal ">
                                                <div className="m-0">+Add</div>
                                            </div>
                                        </Col> */}
                                </Row>

                            </div>
                        </div>
                    )
                })}

            </Slider>

        </React.Fragment>
    )
};
export const LiveStreams = (props) => {
    var settings = {
        slidesToShow: 4,
        swipeToSlide: false,
        swipe: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 1200,
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
                breakpoint: 1000,
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
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                    arrows: true,
                },
            },
        ],
    };
    const TrendingBadgeobj = [
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
    ]
    return (
        <React.Fragment>


            <Row className="px-1 ">
                <Col md={8} xs={6}>
                    <h6 className="text-grey text-16 mb-0 text-uppercase">Live Streams</h6>
                </Col>
                <Col md={4} xs={6} className="text-right d-flex justify-content-end align-items-end">
                    <a className="text-grey3  text-sm pr-5 pr-xl-0">VIEW ALL</a>
                </Col>
            </Row>
            <Slider {...settings}>

                {TrendingBadgeobj.map((item, i) => {
                    return (
                        <div>
                            <div className=" pr-lg-2 px-1  mb-3 l-s-con GameDemo">
                                <div className="position-absolute">
                                    <Badge variant="danger" className="ml-2 mr-0 mt-2 l-s-badge l-s-live my-0">
                                        LIVE
                                        </Badge>
                                    <Badge pill variant="warning" className="ml-2 mr-0 mt-2 l-s-badge my-0">
                                        <span className="pr-1">
                                            <Eye />
                                        </span>
                                                2k2
                                        </Badge>
                                    <Badge pill variant="light" className="ml-2 mr-0 mt-2 l-s-badge my-0 ">
                                            <span className="pubg">
                                                <img src={gamedemo} />
                                            </span>
                                            <span>
                                                PUBG Mobile
                                            </span>
                                        </Badge> 
                                </div>

                                <img className="img" src={gamedemo} alt="booths" />
                                <Row className="d-flex justify-content-start align-items-center">
                                    <Col className="mr-0 my-2 pr-0 ">
                                        <div className="l-s-avatar  d-flex justify-content-center align-items-center">
                                            <div className="ArcadeAvatar pr-0">
                                                <img src={gamedemo} alt="Avtar" />
                                            </div>
                                            <div className="w-90 pl-1 justify-content-center align-items-center">
                                                <div className="text-13 gray">PUBG Up 2.0</div>
                                                <small className="text-xs text-muted">PUnknown  <span className="ml-2 ">
                                                        <CheckCircleFill className="text-danger" />
                                                    </span></small>{" "}
                                                    <span className="primary">
                                                    </span> 
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="l-s-r px-0 mx-0 d-flex justify-content-center align-items-center">
                                        <div className="three-dots pr-2"><ThreeDotsVertical className="gray" /></div>
                                    </Col>
                                    
                                </Row>
                                <div>
                                    <Badge variant="dark" className="mr-1 mt-1  my-0">
                                        Sorammm
                    </Badge>
                                    <Badge variant="dark" className="mr-1 mt-1  my-0">
                                        LOL
                    </Badge>
                                    <Badge variant="dark" className="mr-1 mt-1 my-0">
                                        League Of Legend
                    </Badge>
                                    <Badge variant="dark" className="mr-1 mt-1  my-0">
                                        League Of Legend
                    </Badge><Badge variant="dark" className="mr-1 mt-1  my-0">
                                        League Of Legend
                    </Badge>
                                </div>

                            </div>
                        </div>
                    )
                })}

            </Slider>

        </React.Fragment>
    )
};
export const Events = (props) => {
    var settings = {
        slidesToShow: 6,
        swipeToSlide: false,
        swipe: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 1200,
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
                breakpoint: 1000,
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
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                    arrows: true,
                },
            },
        ],
    };
    const TrendingBadgeobj = [
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
    ]
    return (
        <React.Fragment>


            <Row className="px-1 ">
                <Col md={8} xs={6}>
                    <h6 className="text-grey text-16 mb-0 text-uppercase">Events</h6>
                </Col>
                <Col className="text-right d-flex justify-content-end align-items-end" md={4}>
                    <a className="text-grey3  text-sm pr-5 pr-xl-0">VIEW ALL</a>
                </Col>
            </Row>
            <Slider {...settings}>

                {TrendingBadgeobj.map((item, i) => {
                    return (
                        <div>
                            <div className=" pr-lg-2 px-1  mb-3 l-s-con GameDemo">
                                <div className="position-absolute">
                                    <Badge variant="danger" className="ml-2 mr-0 mt-2 l-s-badge l-s-live my-0">
                                        LIVE
                                        </Badge>
                                    <Badge pill variant="warning" className="ml-2 mr-0 mt-2 l-s-badge my-0">
                                        <span className="pr-1">
                                            <Eye />
                                        </span>
                                                2k2
                                        </Badge>
                                    <Badge pill variant="light" className="ml-2 mr-0 mt-2 l-s-badge my-0 ">
                                        <span className="pubg">
                                            <img src={gamedemo} />
                                        </span>
                                        <span>
                                            PUBG Mobile
                                            </span>
                                    </Badge>
                                </div>

                                <img className="img" src={gamedemo} alt="booths" />
                                <Row className="d-flex justify-content-start align-items-center">
                                    <Col className="mr-0 my-2 pr-0 ">
                                        <div className="l-s-avatar  d-flex justify-content-center align-items-center">
                                            <div className="ArcadeAvatar pr-0">
                                                <img src={gamedemo} alt="Avtar" />
                                            </div>
                                            <div className="w-90 pl-1 justify-content-center align-items-center">
                                                <div className="text-13 gray">PUBG Up 2.0</div>
                                                <small className="text-xs text-muted">PUnknown  <span className="ml-2 ">
                                                    <CheckCircleFill className="text-danger" />
                                                </span></small>{" "}
                                                <span className="primary">
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="l-s-r px-0 mx-0 d-flex justify-content-end align-items-center mr-3">
                                        <div className="l-s-cal ">
                                            <CalendarEvent />
                                            <div className="m-0">+Add</div>
                                        </div>

                                    </Col>

                                </Row>
                                

                            </div>
                        </div>
                    )
                })}

            </Slider>

        </React.Fragment>
    )
};
export const TrendingProducts = (props) => {
    var settings = {
        slidesToShow: 8,
        swipeToSlide: false,
        swipe: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 6,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: false,
                    swipe: true,
                    arrows: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToScroll: 4,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    swipe: true,
                    arrows: true,
                },
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    swipe: true,
                    arrows: true,
                },
            },
        ],
    };
    const newProductobj = [
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
        { image: gamedemo, },
    ]
    return (
        <React.Fragment>
            
            <Row className="px-1 ">
                <Col md={8} xs={6}>
                    <h6 className="text-grey text-16 mb-0 text-uppercase">NEW PRODUCTS</h6>
                </Col>
                <Col md={4} xs={6} className="text-right d-flex justify-content-end align-items-end">
                    <a className="text-grey3  text-sm pr-5 pr-xl-0">VIEW ALL</a>
                </Col>
            </Row>
            <div className=" align-items-center mb-3">
                <Slider {...settings}>

                {newProductobj.map((item, i) => {
                    return (
                        <Col className="trending">
                            <div className=" yourCart p-0">
                                <img src={item.image} alt="" />
                                <Row className="px-2 py-3 align-items-center">
                                    <Col xs={9} className="d-flex align-items-center pr-0">
                                        <h6 className="text-grey text-sm mb-0 font-weight-400">Lorem Ipsum</h6>
                                    </Col>
                                    <Col xs={3} className="text-right black text-sm font-weight-bold primaryColor pl-0" >
                                        $25
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    )
                })}
                   </Slider>

            </div>
        </React.Fragment>
    )
};

