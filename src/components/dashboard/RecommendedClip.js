import React, { Component } from "react";
import { Row, Col, Image, Badge, Dropdown } from "react-bootstrap";
import Slider from "react-slick";
import { CheckCircleFill, Eye, ArrowLeftRight, ThreeDotsVertical, CalendarEvent } from 'react-bootstrap-icons';
import pubg from "../../assets/img/dashboard/icon.svg";

import img from "../../assets/img/booths/4.svg";
import logo1 from "../../assets/img/dashboard/1.jpg";
import logo2 from "../../assets/img/dashboard/2.jpg";
import logo3 from "../../assets/img/dashboard/4.jpg";
import user1 from "../../assets/img/dashboard/user1.jpg";
import user2 from "../../assets/img/dashboard/user2.jpg";
import user3 from "../../assets/img/dashboard/user3.jpg";
import user4 from "../../assets/img/dashboard/user4.jpg";
import user5 from "../../assets/img/landing/user-avt.svg";
import user6 from "../../assets/img/dashboard/user6.jpg";
import * as IconSvg from '../account/login/IconSvg';
import { withRouter } from "react-router-dom";


var settings = {
  slidesToShow: 5,
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

class RecommendedClip extends Component {
  render() {
    const RecommendedClipObj = [{
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
    console.log(history);

    const toVideo = () => {
      this.props.history.push("/global/video");
    }

    return (
      <React.Fragment>
        <div className="happingNow">
          <Col className="px-1" xs={10}>
            <h6 className="text-grey text-16 text-uppercase mb-0">Recommended clip <span><a className="text-grey3 text-xs pl-4" tabIndex="0">VIEW ALL</a></span></h6>
          </Col>

          <Slider {...settings}>
            {[...Array(8)].map((item, index) => {
              return (
                <div className="p-1 pt-3 l-s-con GameDemo "  >
                  <Image className="img" src={logo3} alt="booths" tabIndex="-1" onClick={toVideo}/>
                  <Row className="mt-1 d-flex justify-content-start align-items-center">
                    <Col className="l-s-l mr-0 my-2 pr-0 ">
                      <div className="l-s-avatar  d-flex justify-content-center align-items-center" tabIndex="0">
                        <div className="ArcadeAvatar pr-0">
                          <Image src={user5} alt="Avtar" />
                        </div>
                        <div className="w-90 pl-1 justify-content-center align-items-center">
                          <div className="text-sm">PUBG Up 2.0</div>
                          <small className="text-xs text-muted">Unknown  <span className="ml-2 ">
                            <CheckCircleFill className="text-success" />
                          </span></small>{" "}
                          <span className="primary">
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col className="l-s-r px-0 mx-0 d-flex justify-content-end align-items-center">

                      <div className="dotsDropDown">
                        <Dropdown animate="true" slidein="true">
                          <Dropdown.Toggle tabIndex="0" aria-controls="example-fade-text" id="dropdown-custom-components">
                            {/* <div className="three-dots" tabIndex="0"> */}
                              <ThreeDotsVertical className="gray" />
                            {/* </div> */}
                          </Dropdown.Toggle>
                          <Dropdown.Menu id="example-fade-text" className="commentwrapersec-t">
                            <Dropdown.Item eventKey="1" className="replyicon"><IconSvg.viewIcon /> <span className="cmtdrptxt">View</span></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><IconSvg.editIcon /> <span className="cmtdrptxt">Edit</span ></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><IconSvg.deleteIcon /> <span className="cmtdrptxt">Delete</span ></Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
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

export default withRouter (RecommendedClip);