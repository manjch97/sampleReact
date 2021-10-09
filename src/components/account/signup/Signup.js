import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import topicon from "../../../assets/img/landing/top.svg";
import bottomicon from "../../../assets/img/landing/bottom.svg";
import Industry from "./Industry";
import Thankyou from "./Thankyou";
import Pending from "./Pending";
import PostLoginHeader from "../../common/header/PostLoginHeader";
import PreLoginFooter from "../../common/footer/PreLoginFooter";
import { withRouter } from "react-router-dom";

class Signup extends Component {

  handleIndustry = () => {
    this.props.history.push("/signup/industry");
  };
  handleAttendee = () => {
    this.props.history.push("/signup/attendee");
  };

  signupCategory = (category) => {
    // this.props.match.params.industryType = "login_fan"
    switch (category) {
      case "industry":
        return <Industry {...this.props}/>;
      case "pending":
        return <Pending />;
      case "thankyou":
        return <Thankyou  {...this.props}/>;
      default:
        return null;
    }
  };
  render() {
    return (
      <>
        <PostLoginHeader {...this.props} />
        {this.props.match?.params?.signupCategory ? (
          this.signupCategory(this.props.match?.params?.signupCategory)
        ) : (
          <React.Fragment>
            <Row className="h-100vh">
              <Col xs={6} className=" signup  pl-0 ">
                <div>
                  <img className="bottom left" src={bottomicon} alt="logo" />
                </div>

                <Col className="siginOverflow pr-0">
                  <h5 className="font-weight-normal text-center">
                    Industry <span className="px-2">/</span> Media{" "}
                    <span className="px-2">/</span> Publisher
                  </h5>

                  <Button
                    variant="primary"
                    className="my-4"
                    size="sm"
                    onClick={this.handleIndustry}
                  >
                    Signup
                  </Button>
                  <div>
                    Find more <ChevronRight className="pl-2 text-lg" />
                  </div>
                </Col>
                <div>
                  <img className="top right" src={topicon} alt="logo" />
                </div>
              </Col>
              <Col xs={6} className="signup h-100 pl-0">
                <div className="signupBG">
                  <Col className="siginOverflow pl-0 text-white">
                    <h5 className="font-weight-normal text-center">
                      Attendee <span className="px-2">/</span> Public Attendance
                    </h5>

                    <Button
                      variant="primary"
                      className="my-4"
                      size="sm"
                      onClick={this.handleAttendee}
                    >
                      Signup
                    </Button>
                    <div>
                      Find out more <ChevronRight className="pl-2 text-lg" />
                    </div>
                  </Col>
                </div>
              </Col>
            </Row>
          </React.Fragment>
        )}
      </>
    );
  }
}
export default withRouter(Signup);
