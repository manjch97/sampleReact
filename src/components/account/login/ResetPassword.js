import React, { Component } from "react";
import { Button, Image, Form, Col, Row } from "react-bootstrap";
import Logo from "../../../assets/img/logo.svg";
import TopIcon from "../../../assets/img/landing/top.svg";
import BottomIcon from "../../../assets/img/landing/bottom.svg";
import "../../landing/Landing.scss";
import "../../../assets/styles/style.scss";
import "../../common/header/Header.scss";
import { Auth as authApi } from "../../../services/Api";
import { NavigateTo } from "../../common/RouteNav";
import { Link } from "react-router-dom";
import { displayToastError, displayToastSuccess, displayToastInfo } from '../../../helper/ToastHelper';
import { fireClickEvent } from "../../../helper/GTMHelper";
import isEmail from "validator/lib/isEmail";
import trim from "validator/lib/trim";
import {PopulateMetaTags} from "../../../helper/CommonHelper";
import isEmpty from "validator/lib/isEmpty";
import {validateData} from '../commonValidation';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  state = {
    password: "",
    confirmPassword: "",
    errors: {},
  };

  changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState((prevState) => ({ ...this.state, [name]: value }));
  };

  handleResetPassword = async (e) => {
    e.preventDefault();
    let formData = { ...this.state };
    let errors = validateData(formData);
    if (Object.keys(errors).length) {
      this.setState({ errors: errors });
      return;
    } else {
      this.setState({ errors: {} });
    }
    let data={
            "email": "EXISTING_EMAIL",    
            "resetToken": "string",    
            "newpassword": this.state.password
        }
    fireClickEvent(null, this.props.history.location.pathname, "reset_password_btn_click", { "password": this.state.password,"confirmpassword":this.state.confirmPassword });
     let response = await authApi.resetPassword(data);
    // if (response) {
    //   if(response?.emailsent) {
    //     displayToastSuccess(response.message);
    //   }else {
    //     displayToastInfo(response.message);
    
    //   }
    // } else {
    //   displayToastError("Invalid Response");
    // }
  };


  render() {
    return (
    <div>
      <React.Fragment>
        <PopulateMetaTags  title={"E3 Expo Event-Reset Password"} description={"E3 Expo Event-Reset Password"}/>
        <main id="main-content" className="" role="main">
        <Row className="h-100vh m-0">
          
          <Col>
            <div className="d-none d-md-block">
              <Image
                className="logo"
                className="top"
                src={TopIcon}
                alt="Logo"
              />
            </div>

            <Col
              style={{ width: 350 }}
              className="industry-header wrapper_centerspace  text-center  mt-4"
            >
              <div className="auto mx-auto mt-0 w-50">
                <Image src={Logo} alt="Logo" />
              </div>
              <div>
                <Form>
                <h1 className=" forgot_password text-left font-weight-bold mt-5">
                  Reset your password
                  </h1>
                <p className="text-muted text-md text-left pb-4">
                    Please enter the new password details
                  </p>
                
                  <Form.Group  className="input-field">
                  {this.state.errors.password!="" && (
                     <p className="text-danger-forgotpassword" role="alert"  >{this.state.errors.password}</p>
                  )}
                        <Form.Control
                        type="password"
                        name="password"
                        tabIndex="0"
                        placeholder="Password *"
                        aria-required="true"
                        onChange={this.changeHandler}
                        autoComplete = "off"
                        />
                    
                    </Form.Group>
                    <Form.Group className="input-field">
                    {this.state.errors.confirmPassword!="" && (
                     <p className="text-danger-forgotpassword" role="alert"  >{this.state.errors.confirmPassword}</p>
                  )}
                        <Form.Control
                        type="password"
                        name="confirmPassword"
                        tabIndex="0"
                        placeholder="Confirm Password *"
                        aria-required="true"
                        onChange={this.changeHandler}
                        autoComplete = "off"
                        />
                    </Form.Group>
                <div className="primaryColor"></div>
                <div className="login mb-4">
                  <Button
                    block
                    variant="primary"
                    className="my-5"
                    size="sm"
                    type="submit"
                    tabIndex="0"
                    aria-label=" Request Reset Link"
                    onClick={this.handleResetPassword}
                  >
                    Reset password
                    </Button>
                </div>
                </Form>
              </div>
            </Col>
            <div className="d-none d-md-block">
              <Image className="bottom" src={BottomIcon} alt="Logo" />
            </div>
          </Col>
          
        </Row>
        </main>
      </React.Fragment>
    </div>
    );
  }
}

export default ResetPassword;

