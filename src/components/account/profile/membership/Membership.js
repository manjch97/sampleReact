import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import "../../../../assets/styles/style.scss";
import "../../../common/header/Header.scss";
import '../../../../assets/styles/slickCarousel.scss'
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {
  MemberCardHeading,
  MembershipButton,
  MembershipTerms,
} from "./MemershipComponents";
import { Account } from "../../../../services/Api";
import { GetSmallSpinner, GetSpinner, WebHeader } from "../../../../helper/CommonHelper";
import { fireClickEvent } from "../../../../helper/GTMHelper";
import {PopulateMetaTags} from "../../../../helper/CommonHelper";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  accessibility: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const cardColors = ["blue", "orange", "purple"];
const cardCssName = "Mcard justify-content-center align-items-center pb-2";

const mapStateToProps = (state) => ({
  // Get data from Redux for topics unless cleared
  currentUser: state?.auth?.user,
});


class Membership extends Component {
  state = {
    membershipTypes: [],
    loading: false,
  };

  componentDidMount() {
    // call an API
    this.setState({ loading: true });
    Account.membershipTypes()
      .then((response) => {
        this.setState({
          membershipTypes: response,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
      });
  }

  goBackSignup = () => {
    this.props.history.goBack();
  };
  
  goToPayment = (membership) => {
    
    if (membership.basePrice > 0) {
      fireClickEvent({id:this.props?.currentUser?.email}, this.props.history?.location?.pathname, "choose_membership_click", {userId:this.props?.currentUser?.email});
      this.props.history.push("/payment/"+membership.membershipTypeId+"/"+membership.membershipType+"/"+membership.sku+"/"+ (membership.sellingPrice > 0 ? membership.sellingPrice : membership.basePrice));
    } else {
      this.props.history.push("/profile/avatar");
     } 
  };
  render() {
    let subscriptionTypes = (
      <React.Fragment>
        No Membership types found for subscription
      </React.Fragment>
    );

    if (this.state.membershipTypes && this.state.membershipTypes.length > 0) {
      subscriptionTypes = (
        <Slider {...settings}>
          {" "}
          {this.state.membershipTypes.map((eachMembershiptType, index) => {
            let key = "divIdKey" + index;
            let cardClass = cardCssName;
            if (index <= cardColors.length - 1) {
              cardClass = cardCssName + " " + cardColors[index];
            } else {
              let divder = index / cardColors.length;
              cardClass =
                cardCssName +
                " " +
                cardColors[index / Math.floor(divder) - cardColors.length];
            }
            return (
              <div className="membershipCard" key={key}>
                <div className={cardClass}>
                  <MemberCardHeading
                    props={this.props}
                    divKey={key}
                    memberShip={eachMembershiptType}
                  />
                </div>
                <div className="price-list">
                  <ul role="list">
                    <MembershipTerms
                      props={this.props}
                      divKey={key}
                      memberShip={eachMembershiptType}
                    />
                  </ul>
                </div>
                <div className="text-center pb-4">
                  <MembershipButton
                    props={this.props}
                    divKey={key}
                    memberShip={eachMembershiptType}
                    goToPayment={this.goToPayment}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      );
    }

    return (
      <React.Fragment>
        <PopulateMetaTags  title={"E3 Expo Event-Membership"} description={"E3 Expo Event-Membership"}/>
        <WebHeader props={this.props} />
        {this.props.mobile ?
          <div className="my-3 pt-3"></div>
          : <div className="my-5 pt-5"></div>
        }
        <Container>
          <Col className="md={{ span: 8, offset: 2 }}">
            <Col lg={{ span: 10, offset: 1 }} >
              <b className="cursor underline" onClick={this.goBackSignup}>
                <span className="text-lg pr-1 ">
                  <ArrowLeft />
                </span>
                BACK
              </b>
            </Col>
            <Row className="text-center justify-content-center align-items-center m-auto">
              <Col md="auto">
                <h4 className="text-xl text-uppercase">
                  Choose a <span className="primaryColor">membership</span>
                </h4>
                <h6 className="mt-4 text-muted text-md">
                  You are able to upgrade or downgrade later under profile
                  settings.
                </h6>
              </Col>
            </Row>
            <Col lg={{ span: 10, offset: 1 }} className="industry-header mt-4">
              <div className="priceing-table-main">
                <div className="col-md-12 text-center">
                  {this.state.loading ? (
                    <GetSmallSpinner />
                  ) : (
                      subscriptionTypes
                    )}
                </div>
              </div>
            </Col>
          </Col>
        </Container>

        <div className="my-5 pt-5"></div>
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps)(withRouter(Membership));
