import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../landing/Landing.scss";
import "../common/header/Header.scss";
import Loginscreen from './login/Loginscreen';
import { fireClickEvent } from "../../helper/GTMHelper";
class mLogin extends Component {

  state = {
    key: 1,
    show: true
  }

  handleSelect = (key) => {
    this.setState({ key: key });
  }
  toggle = () => this.setState((currentState) => ({ show: !currentState.show }));

  handleIndustry = () => {
    fireClickEvent(null, this.props.history.location.pathname, "industry_signup_click", {});
    this.props.history.push("/signup/industry");
  };
  handleAttendee = () => {
    fireClickEvent(null, history.location.pathname, "attendee_signup_click", {});
    this.props.history.push("/signup/attendee");
  };

  render() {
    return (
      <div className="LStab">
        <div>
            <Loginscreen />  
        </div>
      </div>
    );
  }
}

export default withRouter(mLogin);
