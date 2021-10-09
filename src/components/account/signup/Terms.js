import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "../../../assets/styles/style.scss";
import { fireClickEvent } from "../../../helper/GTMHelper";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import FocusLock from "react-focus-lock";
import { GetSpinner } from "../../../helper/CommonHelper";

const Terms = (props, { action }) => {
  const [show, setShow] = useState(false);
  const currentLoggedinUser = useSelector(
    state => state.auth.user
  );
 
  const handleShow = () => {
    setShow(true);
    fireClickEvent({ id: currentLoggedinUser?.email }, props.history.location.pathname, "terms_of_service_click", { userId: currentLoggedinUser?.email });
    props.getTermsPolicyHandler();
  }

  const handleClose = () => {
    fireClickEvent({ id: currentLoggedinUser?.email }, props.history.location.pathname, "terms_of_service_close_click", { userId: currentLoggedinUser?.email });
    setShow(false);
  }
  const handleAgree = () => {
    //action();
    //setShow();
    fireClickEvent({ id: currentLoggedinUser?.email }, props.history.location.pathname, "terms_of_service_agree_click", { userId: currentLoggedinUser?.email });
    props.termsAgreedHanlder();
    handleClose();
  };
  return (
    <span>
      <a className="font-weight-500 termsofservice cursor gray" id="termlink" tabIndex="0" role="link" aria-label=" terms of services" onClick={handleShow} onKeyPress={handleShow}>
        Terms of Services
      </a>
      <Modal aria-labelledby="terms_modal" show={show} onHide={handleClose} size="md" keyboard={true} centered animation={false} backdrop="static">

        <Col xs={12} className="py-2 px-0 mb-3" >
          <FocusLock>
            <Modal.Header className="font-weight-light closeBtn border-0 py-0" closeButton />
            <Modal.Body className="pb-md-5 pt-1 px-md-5">
              <Row className="text-center justify-content-center align-items-center m-auto ">
                <h4 id="terms_modal"  className="text-xl text-uppercase py-3">
                  <span className="primaryColor">Terms</span> of Services
              </h4>
              </Row>
              <Row>
                <Col className="termScroll" tabIndex="1" onScroll={props.handleScroll}>
                  <span>
                    {!props.termsOfServices && <div className="d-flex justify-content-center align-items-center h-100"><GetSpinner /></div>}
                    <div dangerouslySetInnerHTML={{ __html: props.termsOfServices }} />
                  </span>
                </Col>
              </Row>
              <Row className="text-center justify-content-center align-items-center m-auto">
                <Col className="text-center PrimaryBtn pt-3">
                  <Button variant="primary" size="sm" tabIndex="2" onClick={handleAgree} disabled={!props.readTermsOfServices}>Agree</Button>
                </Col>
              </Row>
              </Modal.Body>
          </FocusLock>
        </Col>
      </Modal>
    </span>
  );
};
export default withRouter(Terms);
