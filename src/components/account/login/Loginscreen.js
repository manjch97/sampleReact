import React, { Component } from "react";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import "../../landing/Landing.scss";
import '../../../assets/styles/tabs.scss'
import "../../common/header/Header.scss";
import signuplogo from "../../../assets/img/signuplogo.svg";
import { withRouter } from "react-router-dom";
import { loginAction } from "../../../redux/actions/authAction";
import { fireClickEvent } from "../../../helper/GTMHelper";
import Signupscreen from "./SignupScreen";
import Loginpopup from "./LoginPopup";
import FocusLock from "react-focus-lock";

const mapStateToProps = (state) => ({
  localUser: state.authlocal.localUser,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => {
    return loginAction({ email, password })(dispatch);
  }, // Payload and callback
});

class Loginscreen extends Component {

  constructor(props) {
    super(props);
    this.innerRef = React.createRef();
  }

  state = {
    email: "",
    pwd: "",
    loginLoading: false,
    errors: {}, disabled: false,
    modalCheckboxOpen: false
  };
  closeModalCheckbox = () => this.setState({ modalCheckboxOpen: false });

  openLogin = () => {
    fireClickEvent(null, this.props.history.location.pathname, "open_login_click", {});
    this.setState({ modalCheckboxOpen: true });
  }

  render() {
    const { disabled } = this.state;
    const { persistentFocus } = this.props;
    return (
      <>
        <React.Fragment>
        <main className="main-content" role="main">
            <Row className="h-100vh  safearea-header m-0">
            <Col xl={4} className="p-0 signup d-none d-xl-block">
              <div className="signupBG">
                <div className="siginOverflow pl-2">

                  <div>
                    <img className="signupIcon" src={signuplogo} alt="signup logo icon" />
                  </div>

                  <h1 className="font-weight-normal text-white pb-3 mt-2">
                    Sign Up For E3
                  </h1>
                </div>
              </div>
            </Col>
            <Col xl={8} xs={12} className="login p-0 ">
              <Signupscreen openLoginPopup={(e) => { this.openLogin(e) }} />
            </Col>


              <Modal aria-labelledby="login_modal" centered show={this.state.modalCheckboxOpen} onHide={this.closeModalCheckbox}>
              <FocusLock
                disabled={this.state.disabled}
                persistentFocus={persistentFocus}
              >
                <Modal.Header className="font-weight-light border-0 pt-0" closeButton />
                <Modal.Body className="pb-md-5 pt-1 px-md-5">
                  <Loginpopup />  
                </Modal.Body>
              </FocusLock>
            </Modal>
          </Row>
          </main>
        </React.Fragment>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Loginscreen));
