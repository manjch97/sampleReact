import React, { Component, useEffect, useState } from "react";
import { Row, Col, InputGroup, Form, Container, Button } from "react-bootstrap";
import { ArrowLeft, Upload } from "react-bootstrap-icons";
import '../../../assets/styles/style.scss';
import "../../common/header/Header.scss";
import Thank from '../../../assets/img/landing/thank.svg'
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../redux/actions/authAction";
import SignupStatus from '../login/SignupStatus';
import { isLoggedin } from "../../../services/AuthService";
import { fireClickEvent } from "../../../helper/GTMHelper";
import {PopulateMetaTags} from "../../../helper/CommonHelper";

const Thankyou = (props) => {
  let industryType = props.match.params.industryType;
  let history = useHistory();

  const currentLoggedinUser = useSelector(
    state => state.auth.user
  );
  const [modalStatus, setSignupStatus] = useState(false);

  const showHideLoginModal = (flag) => {
    setSignupStatus(flag);
  }

  const onHide = () => {
    setSignupStatus(!modalStatus);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentLoggedinUser?.confirmation === 'Approved' || currentLoggedinUser?.confirmation === 'Rejected') {
      setTimeout(() => {
        showHideLoginModal(true);  
      }, 1000);

    }
  }, []);


  const thanksTologin = () => {
    fireClickEvent(currentLoggedinUser?.email, history?.location?.pathname, "thankyou_click", { userId: currentLoggedinUser?.email });
    if (currentLoggedinUser) {
      //logoutAction({})(dispatch);
    }
    if (process.env.REACT_APP_ONBOARDING_ONLY_FLAG === 'false' && isLoggedin()) {
      history.push('/membership');
    } else {
      history.push('/');
    }
  };

  return (
    <React.Fragment>
       <PopulateMetaTags  title={"E3 Expo Event-Thank You"} description={"E3 Expo Event-Thank You"}/>
       <div className="my-5 pt-5"></div> 
      <Container>
        <div>
          <Row className="text-center">
            <Col className="text-center">
              <div className="auto mx-auto mt-0 w-25">
                <img xs="text-center auto" className="mx-auto my-4 pb-4" style={{ width: 70 }} src={Thank} alt="Thank icon" />
              </div>
              {industryType === "fan" ?
              <div>
                <h4 className="text-xl ">Thank you<span> </span>
                  <span className="text-uppercase">{currentLoggedinUser ? currentLoggedinUser.firstname : ""}</span> for your submission
                </h4>
                <h6 className="text-muted text-md">You will soon receive information when passes are available for you to purchase
                </h6>
              </div>
              : industryType === "login_fan" ?
              <div>
              <h4 className="text-xl">Thank you<span> </span>
                <span className="text-uppercase">{currentLoggedinUser ? currentLoggedinUser.firstname : ""}</span> for your registration
              </h4>
              <h6 className="text-muted text-md"> You will soon receive information when passes are available for you to purchase
              </h6>
            </div>
            :
              <div>
                <h4 className="text-xl">Thank you<span> </span>
                  <span className="text-uppercase">{currentLoggedinUser ? currentLoggedinUser.firstname : ""}</span> for your submission
                </h4>
                <h6 className="text-muted text-md"> Your registration is pending approval. We will stay in touch and connect with you soon via email
                </h6>
              </div> 
              }
            </Col>

          </Row>
          <Row>
            <Col className="text-center PrimaryBtn my-3">
              <Button variant="primary" onClick={thanksTologin} aria-label="Thank you for your Submission click the link to Continue to membership" className="my-2" size="sm">
                CONTINUE
                </Button>
            </Col>
          </Row>
        </div>
      </Container>
      <SignupStatus show={modalStatus} onHide={onHide} approved={currentLoggedinUser?.confirmation === 'Approved'} />
    </React.Fragment>
  );

}
export default withRouter(Thankyou);
