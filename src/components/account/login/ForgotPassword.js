import React, { useEffect,useState } from "react";
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
const ForgotPassword = (props) => {
  const [errors, seterrors] = useState("");
  const initialFormData = Object.freeze({
    email: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const changeHandler = (event) => {
    event.preventDefault();
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    fireClickEvent(null, props.history.location.pathname, "reset_forgot_password_btn_click", { "userid": formData.email });
    if(!isEmail(formData.email.trim())){
      seterrors("Please enter valid Email Address");
    }else{
      seterrors("");
      let response = await authApi.forgotPassword(formData.email);
      if (response) {
        if(response?.emailsent) {
          displayToastSuccess(response.message);
        }else {
          displayToastInfo(response.message);
        }
      } else {
        displayToastError("Invalid Response");
      }
   }
  };

  const BackTo = () => {
    NavigateTo("/login");
  };

  

  return (
    <div>
      <React.Fragment>
         <PopulateMetaTags  title={"E3 Expo Event-Forgot Password"} description={"E3 Expo Event-Forgot Password"}/>
      <main id="main-content" className="from_containeralign" role="main">
        <Row className="h-100vh m-0">
        
          <Col>
            <div className="d-none d-md-block">
              <Image
                className="logo"
                className="top"
                src={TopIcon}
                alt="E3 Logo"
              />
            </div>

            <Col
              style={{ width: 350 }}
              className="industry-header wrapper_centerspace  text-center  mt-4"
            >
              <div className="auto mx-auto mt-0 w-50">
                <Image src={Logo} alt="E3 Logo" />
              </div>
              <Form>
              <div>
                <h1 className=" forgot_password text-left font-weight-bold mt-5">
                  Forgot your password
                  </h1>
                <p className="text-muted text-md text-left pb-4">
                  Please enter the email address you'd like your password
                  reset information sent to
                  </p>
               
                  <Form.Group className="input-field">
                  {errors!="" && (
                     <p className="text-danger-forgotpassword" role="alert"  >{errors}</p>
                  )}
                    <Form.Control
                      // type="email"
                      name="email"
                      tabIndex="0"
                      aria-label=" Email Address"
                      placeholder="Email Address" autoComplete="off"
                      onChange={changeHandler}
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
                    onClick={handleForgotPassword}
                  >
                    REQUEST RESET LINK
                    </Button>
                    <Link to="/login" className="underline" tabIndex="0"
                      aria-label=" Back to Login">Back to Login</Link>
                </div>
              </div>
              </Form>
            </Col>
            <div className="d-none d-md-block">
              <Image className="bottom" src={BottomIcon} alt="Logo" />
            </div>
          </Col>
        </Row>
        </main>
      </React.Fragment>
    </div >
  );
}

export default ForgotPassword;
