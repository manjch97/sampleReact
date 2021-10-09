import React, { Component } from "react";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import "../../landing/Landing.scss";
import '../../../assets/styles/tabs.scss'
import "../../common/header/Header.scss";
import topicon from "../../../assets/img/landing/top.svg";
import { withRouter } from "react-router-dom";
import topimg from "../../../assets/img/signup/topImg.jpg";
import { fireClickEvent } from "../../../helper/GTMHelper";
import * as IconSvg from './IconSvg';



const mapStateToProps = (state) => ({
  localUser: state.authlocal.localUser,
});

const mapDispatchToProps = (dispatch) => ({
});

class Signupscreen extends Component {
  constructor(props) {
    super(props);
   
  }
  state = {
    title:"E3 Expo Event-SignUp",
    email: "",
    pwd: "",
    loginLoading: false,
    isModalVisible: false,
    errors: {}, disabled: true
  };

  componentDidMount(){
    document.title=this.state.title;
  }


  handleIndustrySignup = (name) => {
    fireClickEvent(null, this.props.history.location.pathname, "industry_signup_clicks", {});
    this.props.history.push("/signup/industry/"+name);
  };

  findType = (event) => {
    this.handleIndustrySignup(event.id);
  }



  render() {
    const { disabled } = this.state;
    const { persistentFocus } = this.props;

    const signupdata = [{
      name: "FAN",
      img: <IconSvg.FanIcon />,
      id: "fan",
      data: "standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      name: "INDUSTRY",
      img: <IconSvg.IndustryIcon />,
      id: "Industry",
      data: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested chunk of Lorem. It is a long established fact that a reader will be distracted by the readable content."
    },
    {
      name: "MEDIA",
      img: <IconSvg.MediaIcon />,
      id: "Media",
      data: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested chunk of Lorem. It is a long established fact that a reader will be distracted by the readable."
    },
    {
      name: "INFLUENCER / CREATOR",
      img: <IconSvg.ExhibitorIcon />,
      id: "Creator",
      data: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    }]


    return (
      <>
        <React.Fragment>
        
            <div className="d-none d-md-block">
              <img className="signup_top" tabIndex="-1" src={topimg} alt="" />
            </div>
            <div>
              <Col md={{ span: 6, offset: 6 }} xs={12} className="text-right">
                <Button
                  variant="primary"
                  size="sm"
                  className="mt-2 mr-2 login_btn"
                  name="loginButton"
                  tabIndex="0"
                  onClick={this.props.openLoginPopup}
                >
                  <span className="d-block">LOGIN</span>
                </Button>
              </Col>
            </div>
            
          <Row className="signuplistdata mx-0">



                {signupdata.map(industry =>
                  <Col md={6} key={industry.id} tabIndex="0" className="mb-5 px-0 px-md-3 signupList cursor" onClick={() => this.findType(industry)} onKeyPress={() => this.findType(industry)}>
                    <div className="d-flex justify-content-start align-items-end">
                      <div>
                        {industry.img}
                      </div>
                      <div className="pl-2 font-weight-500 black text-25 industry_name lh1">{industry.name}</div>
                    </div>
                    <div className="box_type p-3 mt-2 minh-300">
                      <p className="mb-0 font-weight-normal text-default lineheight26">
                        {industry.data}
                      </p>
                    </div>
                  </Col>
                )}
              </Row>
          <div className="signup_bottom">
                <img className="" tabIndex="-1" src={topicon} alt="" />
              </div>
           
         
        </React.Fragment>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signupscreen));
