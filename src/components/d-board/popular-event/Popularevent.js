import React, { Component } from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";
import modernWarfare from "../../../assets/img/dashboard/5.jpg";

import { ThreeDotsVertical, CheckCircleFill } from "react-bootstrap-icons";
import "./Popularevent.css";
import Slider from "react-slick";
import "../../../assets/styles/slick.min.css";
import "../../../assets/styles/slick-theme.min.css";
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
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

export default class popularevent extends Component {
  render() {
    return (
      <div>
        <Row className="my-3">
          <Col>
            <Col xs={10}>
              <h6 className="mb-0">
                Your Favorite Events{" "}
                <span className="pl-3 viewAll">ViewAll</span>
              </h6>
            </Col>
          </Col>
        </Row>
        <Slider className="popularevent" {...settings}>
          <Col className="pr-0">
            <div>
              <div className="ArcadeLive">
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </div>
              <div>
                <div>
                  <Image src={modernWarfare} alt="" className="img" rounded />
                </div>
                <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar popularAvtar">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs text-muted">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill />
                    </span>
                  </div>
                  <div>
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="pr-0">
            <div>
              <div className="ArcadeLive">
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </div>
              <div>
                <div>
                  <Image src={modernWarfare} alt="" className="img" rounded />
                </div>
                <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar popularAvtar">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs text-muted">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill />
                    </span>
                  </div>
                  <div>
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="pr-0">
            <div>
              <div className="ArcadeLive">
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </div>
              <div>
                <div>
                  <Image src={modernWarfare} alt="" className="img" rounded />
                </div>
                <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar popularAvtar">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs text-muted">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill />
                    </span>
                  </div>
                  <div>
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="pr-0">
            <div>
              <div className="ArcadeLive">
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </div>
              <div>
                <div>
                  <Image src={modernWarfare} alt="" className="img" rounded />
                </div>
                <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar popularAvtar">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs text-muted">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill />
                    </span>
                  </div>
                  <div>
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="pr-0">
            <div>
              <div className="ArcadeLive">
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </div>
              <div>
                <div>
                  <Image src={modernWarfare} alt="" className="img" rounded />
                </div>
                <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar popularAvtar">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs text-muted">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill />
                    </span>
                  </div>
                  <div>
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="pr-0">
            <div>
              <div className="ArcadeLive">
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </div>
              <div>
                <div>
                  <Image src={modernWarfare} alt="" className="img" rounded />
                </div>
                <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar popularAvtar">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs text-muted">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill />
                    </span>
                  </div>
                  <div>
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="pr-0">
            <div>
              <div className="ArcadeLive">
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </div>
              <div>
                <div>
                  <Image src={modernWarfare} alt="" className="img" rounded />
                </div>
                <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar popularAvtar">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs text-muted">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill />
                    </span>
                  </div>
                  <div>
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="pr-0">
            <div>
              <div className="ArcadeLive">
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </div>
              <div>
                <div>
                  <Image src={modernWarfare} alt="" className="img" rounded />
                </div>
                <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar popularAvtar">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs text-muted">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill />
                    </span>
                  </div>
                  <div>
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="pr-0">
            <div>
              <div className="ArcadeLive">
                <Badge pill className="PUBGMobile darkGray my-0">
                  Live
                </Badge>
              </div>
              <div>
                <div>
                  <Image src={modernWarfare} alt="" className="img" rounded />
                </div>
                <div className="d-flex justify-content-center align-items-center E3ArcadeAvatar popularAvtar">
                  <div className="ArcadeAvatar pr-0">
                    <div></div>
                  </div>
                  <div className="w-80 mx-2">
                    <div className="text-sm">Zelda </div>
                    <small className="text-xs text-muted">Nintendo</small>{" "}
                    <span>
                      <CheckCircleFill />
                    </span>
                  </div>
                  <div>
                    <ThreeDotsVertical className="moreIcon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Slider>
      </div>
    );
  }
}
