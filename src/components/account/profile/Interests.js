import React, { Component } from "react";
import {
  Row,
  Col,
  InputGroup,
  Form,
  Container,
  Button,
  Image,
} from "react-bootstrap";
import { connect } from "react-redux";
import { ArrowLeft, ArrowRight, Upload } from "react-bootstrap-icons";
import Header from "../../common/header/Header";
import "../../../assets/styles/style.scss";
import "../../common/header/Header.scss";
import { Link, withRouter } from "react-router-dom";
import Slider from "react-slick";
import {fireClickEvent} from '../../../helper/GTMHelper'
import {PopulateMetaTags} from "../../../helper/CommonHelper";

var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 7000,
  infinite: true,
};

const mapStateToProps = (state) => ({
  // Get data from Redux for topics unless cleared
  currentUser: state?.auth?.user,
});

class Interests extends Component {

   componentDidMount() {

    }

  state = { show: false };
  
  backTo = () => {
    this.props.history.goBack();
  };

  customerPreferences = () => {
    fireClickEvent({id:this.props?.currentUser?.email}, this.props.history?.location?.pathname, "interest_continue_btnclick_for_customer_preference", {userId:this.props?.currentUser?.email});
    this.props.history.push("/profile/preferences");
  };
  render() {
    return (
      <React.Fragment>
         <PopulateMetaTags  title={"E3 Expo Event-Profile-Interest"} description={"E3 Expo Event-Profile-Interest"}/>
        <Header />
        <div className="my-5 pt-5"></div>
        <Container>
          <Col xs={12} sm={{ span: 8, offset: 2 }} className="BoxShadow py-4">
            <Col>
              <b className="cursor underline" onClick={this.backTo}>
                <span className="text-lg pr-1">
                  <ArrowLeft />
                </span>
                Back
              </b>
            </Col>
            <Row className="text-center justify-content-center align-items-center m-auto ">
              <Col className="text-center">
                <h4 className="text-xl text-uppercase">
                  Select Your <span className="primaryColor">Interests</span>
                </h4>
                <Slider {...settings}>
                  <div>
                    <h6 className="mt-4 gray text-md">
                      Every day there are a lot of videos, livestreams, and
                      content, be sure to stay in the know of all your favorites
                    </h6>
                  </div>
                  <div>
                    <h6 className="mt-4 gray text-md">
                      Every day there are a lot of videos, livestreams, and
                      content, be sure to stay in the know of all your favorites
                    </h6>
                  </div>
                  <div>
                    <h6 className="mt-4 gray text-md">
                      Every day there are a lot of videos, livestreams, and
                      content, be sure to stay in the know of all your favorites
                    </h6>
                  </div>
                  <div>
                    <h6 className="mt-4 gray text-md">
                      Every day there are a lot of videos, livestreams, and
                      content, be sure to stay in the know of all your favorites
                    </h6>
                  </div>
                </Slider>
              </Col>
            </Row>
            <Row>
              <Col className="text-center PrimaryBtn pt-2">
                <Button
                  variant="primary"
                  onClick={this.customerPreferences}
                  className="my-4"
                  size="sm"
                >
                  Continue
                </Button>
                <div>
                  
                  <b className="cursor gray-light text-muted">
                  <Link to = "/profile/settings">Skip</Link>
                    <span className="text-lg pl-1">
                      <ArrowRight />
                    </span>
                  </b>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
        <div className="my-5 pt-5"></div>
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps) (withRouter(Interests));
