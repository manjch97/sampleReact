import React, { Component } from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";
import Slider from "react-slick";
import modernWarfare from "../../../assets/img/dashboard/4.jpg";
import { Eye, ThreeDotsVertical, CheckCircleFill } from "react-bootstrap-icons";

import "./Happennow.scss";
import "../../../assets/styles/slick.min.css";
import "../../../assets/styles/slick-theme.min.css";
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
        dots: true,
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

export default class happennow extends Component {
  render() {
    return (
      <div>
        <Row className="my-3">
          <Col>
            <Col xs={10}>
              <h6 className="mb-0">
                Happening Now <span className="pl-3 viewAll">ViewAll</span>
              </h6>
            </Col>
          </Col>
        </Row>
        <Row className="happennow">
          <Col>
            <Slider {...settings}>
              <Col className="pr-0">
                <div className="ArcadeLive">
                  <Badge pill className="PUBGMobile darkGray my-0">
                    Live
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    <span className="pr-2">
                      <Eye />
                    </span>
                    P2,256
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    PUBG Mobile
                  </Badge>
                </div>

                <div className="E3ArcadeAvatar HappAvatar d-flex justify-content-center align-items-center">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2 line-height12">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill className="white text-xs " />
                    </span>
                  </div>
                  <div className="w-10">
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
                <Image src={modernWarfare} alt="" className="img" rounded />
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  LOL
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm Legend
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </Col>
              <Col className="pr-0">
                <div className="ArcadeLive">
                  <Badge pill className="PUBGMobile darkGray my-0">
                    Live
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    <span className="pr-2">
                      <Eye />
                    </span>
                    P2,256
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    PUBG Mobile
                  </Badge>
                </div>

                <div className="E3ArcadeAvatar HappAvatar d-flex justify-content-center align-items-center">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2 line-height12">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill className="white text-xs " />
                    </span>
                  </div>
                  <div className="w-10">
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
                <Image src={modernWarfare} alt="" className="img" rounded />
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  LOL
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm Legend
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </Col>
              <Col className="pr-0">
                <div className="ArcadeLive">
                  <Badge pill className="PUBGMobile darkGray my-0">
                    Live
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    <span className="pr-2">
                      <Eye />
                    </span>
                    P2,256
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    PUBG Mobile
                  </Badge>
                </div>

                <div className="E3ArcadeAvatar HappAvatar d-flex justify-content-center align-items-center">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2 line-height12">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill className="white text-xs " />
                    </span>
                  </div>
                  <div className="w-10">
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
                <Image src={modernWarfare} alt="" className="img" rounded />
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  LOL
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm Legend
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </Col>
              <Col className="pr-0">
                <div className="ArcadeLive">
                  <Badge pill className="PUBGMobile darkGray my-0">
                    Live
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    <span className="pr-2">
                      <Eye />
                    </span>
                    P2,256
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    PUBG Mobile
                  </Badge>
                </div>

                <div className="E3ArcadeAvatar HappAvatar d-flex justify-content-center align-items-center">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2 line-height12">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill className="white text-xs " />
                    </span>
                  </div>
                  <div className="w-10">
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
                <Image src={modernWarfare} alt="" className="img" rounded />
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  LOL
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm Legend
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </Col>
              <Col className="pr-0">
                <div className="ArcadeLive">
                  <Badge pill className="PUBGMobile darkGray my-0">
                    Live
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    <span className="pr-2">
                      <Eye />
                    </span>
                    P2,256
                  </Badge>
                  <Badge pill variant="light" className="PUBGMobile my-0">
                    PUBG Mobile
                  </Badge>
                </div>

                <div className="E3ArcadeAvatar HappAvatar d-flex justify-content-center align-items-center">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2 line-height12">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill className="white text-xs " />
                    </span>
                  </div>
                  <div className="w-10">
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
                <Image src={modernWarfare} alt="" className="img" rounded />
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  LOL
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Soramm Legend
                </Badge>
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </Col>
            </Slider>
          </Col>
        </Row>
      </div>
    );
  }
}