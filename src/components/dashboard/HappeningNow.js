import React, { Component } from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";
import Slider from "react-slick";
import { CheckCircleFill, Eye, ArrowLeftRight, ThreeDotsVertical, CalendarEvent } from 'react-bootstrap-icons';
import pubg from "../../assets/img/dashboard/icon.svg";

import img from "../../assets/img/booths/4.svg";
import logo1 from "../../assets/img/dashboard/1.jpg";
import logo2 from "../../assets/img/dashboard/2.jpg";
import logo3 from "../../assets/img/dashboard/3.jpg";
import user1 from "../../assets/img/dashboard/user1.jpg";
import user2 from "../../assets/img/dashboard/user2.jpg";
import user3 from "../../assets/img/dashboard/user3.jpg";
import user4 from "../../assets/img/landing/user-avt.svg";
import user5 from "../../assets/img/dashboard/user5.jpg";
import user6 from "../../assets/img/dashboard/user6.jpg";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,

      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default class HappeningNow extends Component {
  render() {
    const HappeningNowObj = [{
      name: "xBox",
      image: logo1,
      userImg: user1
    },
    {
      name: "Playstation",
      image: logo2,
      userImg: user4
    },
    {
      name: "Nintendo",
      image: logo3,
      userImg: user3
    },
    {
      name: "Playstation",
      image: logo2,
      userImg: user5
    }, {
      name: "Nintendo",
      image: logo3,
      userImg: user6
    }]
    return (
      <div className="happingNow">



        <Col className="px-1" xs={10}>
          <h6 className="text-grey text-16 text-uppercase mb-0">Happening Now <span><a className="text-grey3 text-xs pl-5 ml-3" tabIndex="0">VIEW ALL</a></span></h6>

        </Col>

        <Row xs={1} className="px-3">
          <Slider {...settings} >
            {[...Array(8)].map((item, index) => {
              return (
                <Col className="p-1 pt-3 l-s-con GameDemo " >
                  <div className="position-absolute" >
                    <Badge variant="warning" className="ml-2 mr-0 mt-2 l-s-badge l-s-live my-0">
                      NEXT
                  </Badge>
                    <Badge variant="light" className="ml-2 mr-0 mt-2 l-s-badge my-0">
                      <span className="pr-1">
                        <Eye />
                      </span>
                    2k2
                  </Badge>
                    <Badge variant="light" className="ml-2 mr-0 mt-2 l-s-badge my-0 ">
                      <span className="pubg">

                      </span>
                      <span>
                        PUBG Mobile
                                        </span>
                    </Badge>
                  </div>

                  <Image className="img" src={img} alt="booths" tabIndex="-1" />
                  <Row className="mt-1 d-flex justify-content-start align-items-center">
                    <Col className="l-s-l mr-0 my-2 pr-0">
                      <div className="l-s-avatar  d-flex justify-content-center align-items-center" tabIndex="0">
                        <div className="ArcadeAvatar pr-0">
                          <Image src={user4} alt="Avtar" />
                        </div>
                        <div className="w-90 pl-1 justify-content-center align-items-center">
                          <div className="text-sm">PUBG Up 2.0</div>
                          <small className="text-xs text-muted">PUnknown  <span className="ml-2 ">
                            <CheckCircleFill className="text-success" />
                          </span></small>{" "}
                          <span className="primary">
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col className="l-s-r px-0 mx-0 d-flex justify-content-end align-items-center" >
                      <div className="three-dots dotsDropDown" tabIndex="0">
                        <ThreeDotsVertical className="gray" />
                      </div>
                      {/* <div className="three-dots pr-2" tabIndex="0"><ThreeDotsVertical className="gray" /></div> */}
                    </Col>
                  </Row>
                  
                </Col>)
            })}
          </Slider>
        </Row>
      </div>
    );
  }
}