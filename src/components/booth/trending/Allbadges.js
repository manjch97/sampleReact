import React from "react";
import './Trending.scss';
import { Row, Col, Container, Button, Badge } from 'react-bootstrap';
import badge from '../../../assets/img/trending/badge.jpg';
import badge1 from '../../../assets/img/trending/badge1.jpg'; 
import gamedemo from '../../../assets/img/trending/gamedemo.jpg'; 
import trending from '../../../assets/img/trending/trending.jpg'; 

import { Eye, CalendarEvent, CheckCircleFill, ThreeDotsVertical } from "react-bootstrap-icons";
import Slider from "react-slick";

export const BadgesTranding = (props) => {
    var settings = {
        slidesToShow: 7,
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
        { image: badge, },
        { image: badge1, },
    ]
    return (
        <React.Fragment>

            <Row className="px-1 ">
                <Col>
                    <h6 className="text-grey text-16 mb-0 text-uppercase">Badges people are going after</h6>
                </Col>
                
            </Row>
            
            <Row className="d-flex justify-content-start align-items-center">

                <Col lg={9}>
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
                </Col>
                <Col lg={3}>
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
                               
                            </div>

                            <img className="img" src={gamedemo} alt="booths" />
                            <Row className="d-flex justify-content-start align-items-center">
                                <Col className="mr-0 my-1 pr-0 ">
                                      
                                        <div className="w-100 pl-1 text-center align-items-center">
                                            <div className="text-13 gray">Booth Name</div>
                                          
                                        </div>
                                </Col>
                               
                            </Row>

                        </div>
                    </div>
                </Col>
            </Row>    
            
                            

        </React.Fragment>
    )
};

