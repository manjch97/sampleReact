import React, { Component } from "react";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import "../../landing/Landing.scss";
import '../../../assets/styles/tabs.scss'
import "../../common/header/Header.scss";
import { withRouter } from "react-router-dom";
import { loginAction } from "../../../redux/actions/authAction";
import { Spinner } from "react-bootstrap";
import { fireClickEvent } from "../../../helper/GTMHelper";
import {PopulateMetaTags} from "../../../helper/CommonHelper";
import {
  passwordOptions,
  validateSignupData,
} from "../signup/SignupValidation";
const mapStateToProps = (state) => ({
  localUser: state.authlocal.localUser,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => {
   return loginAction({ email, password })(dispatch);
  }, // Payload and callback
});

class Loginpopup extends Component {
  constructor(props) {
    super(props);
    this.innerRef = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      this.innerRef.current.focus();
    }, 200)
  }
  state = {
    email: "",
    pwd: "",
    loginLoading: false,
    errors: {},
  };

  changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState((prevState) => ({ ...this.state, [name]: value }));
  };

  handleLogin = async (e) => {
    e.preventDefault();
    let formData = { ...this.state };
    let errors = validateSignupData(formData);
    if (Object.keys(errors).length) {
      this.setState({ errors: errors });
      return;
    } else {
      this.setState({ errors: {} });
    }

    this.setState({ loginLoading: true });
    fireClickEvent({ "id": this.state.email }, this.props.history.location.pathname, "login_click", { "userid": this.state.email });
    let response = await this.props.onLogin(this.state.email, this.state.pwd);
    let industryType;
    if (response) {
      if (response?.confirmation === "Pending") {
        this.props.history.push("/signup/pending");
      } else {
        response?.custom_attributes?.forEach(data => {
          if(data.attribute_code === "IndustryType"){
            industryType = data.value;
          }
        });
        if(industryType){
          this.props.history.push("/signup/thankyou/login_"+industryType);
        }else{
          this.props.history.push("/signup/thankyou/login");
        }
      }
    } 
    this.setState({ loginLoading: false });
  };

  handleForgotPwd = async (e) => {
    e.preventDefault();
    fireClickEvent(null, this.props.history.location.pathname, "forgot_password_link_click", {});
    this.props.history.push("/forgotPassword");
  };

  render() {

    return (
      <>
        <React.Fragment>
           <PopulateMetaTags  title={"E3 Expo Event-Login"} description={"E3 Expo Event-Login"}/>
          <Row>
            <Col >

              <h2 className="font-weight-normal text-dark text-xl mb-3">
                Welcome To E3{this.props.localUser && ","}
              </h2>
              <h3 id="login_modal" className="font-weight-bold text-dark ">
                Sign In
                  </h3>

                  <Form className="mt-4 error login">
                    <Form.Group
                      className="position-relative"
                      controlId="formBasicEmail"
                    >
                      {this.state.errors.email && (
                        <p className="text-danger">{this.state.errors.email}</p>
                      )}
                      <Form.Control
                        // type="email"
                        placeholder="Email Address"
                        className="signupPopup"
                        name="email"
                        onChange={this.changeHandler}
                        autoComplete = "on" ref={this.innerRef}
                      />
                    </Form.Group>
                    <Form.Group
                      className="position-relative"
                      controlId="formBasicPassword"
                    >
                      {this.state.errors.pwd && (
                        <p className="text-danger">{this.state.errors.pwd}</p>
                      )}
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        className="signupPopup"
                        name="pwd"
                        onChange={this.changeHandler}
                        autoComplete = "new"
                      />
                    </Form.Group>
                    <Row className="justify-content-end align-items-end pr-3 forgottop">
                      <a
                        className="cursor  text-default font-weight-400"
                        tabIndex="0"
                        style={{ paddngBottom: 20 }}
                        onClick={this.handleForgotPwd}
                        onKeyPress={this.handleForgotPwd}
                        role="link"
                      >
                        Forgot your password?
                      </a>

                </Row>

                <Button
                  variant="primary"
                  size="sm"
                  className="mt-5"
                  type="submit"
                  name="loginButton"
                  disabled={this.state.loginLoading}
                  onClick={this.handleLogin}
                >
                  {this.state.loginLoading ? (
                    <React.Fragment>
                      <Spinner
                        className="position-absolute left-0 right-0 mt-1"
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Loading...</span>
                    </React.Fragment>
                  ) : (
                      <React.Fragment></React.Fragment>
                    )}

                  <span>SUBMIT</span>

                </Button>


              </Form>
            </Col>
          </Row>
        </React.Fragment>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Loginpopup));
