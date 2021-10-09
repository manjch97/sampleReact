import React, { useState } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import FocusLock from "react-focus-lock";
import { fireClickEvent } from "../../../../helper/GTMHelper";
import { GetSpinner } from "../../../../helper/CommonHelper";
import "../../../../assets/styles/style.scss";

const PrivacyPolicy = (props) => {

  const [show, setShow] = useState(false);

  const currentLoggedinUser = useSelector(
    state => state.auth.user
  );

  const handleShow = () => {
    setShow(true);
    props.getPrivacyPolicyHandler();
    fireClickEvent({ id: currentLoggedinUser?.email }, props.history.location.pathname, "privacypolicy_link_click", { userId: currentLoggedinUser?.email });
  }

  const handleClose = () => {
    fireClickEvent({ id: currentLoggedinUser?.email }, props.history.location.pathname, "privacypolicy_modalclose_click", { userId: currentLoggedinUser?.email });
    setShow(false);
  }

  return (
    <span>
      <a className="font-weight-500 cursor black" tabIndex="0" aria-label="Privacy Policy" onClick={handleShow} onKeyPress={handleShow}>
        Privacy Policy
      </a>
      <Modal show={show} onHide={handleClose} size="md" keyboard={true} centered animation={false} backdrop="static">
        <Col xs={12} className="py-2 mb-3">
          <FocusLock>
              <Modal.Header className="font-weight-light border-0" closeButton />
              <Row className="text-center justify-content-center align-items-center m-auto ">
                <h4 className="text-xl text-uppercase py-3">
                  <span className="primaryColor">PRIVACY</span> POLICY
              </h4>
              </Row>
              <Row>
                <Col className="termScroll" tabIndex="1">
                  <span>
                    {!props.privacyPolicy && <div className="d-flex justify-content-center align-items-center h-100"><GetSpinner /></div>}
                    <div dangerouslySetInnerHTML={{ __html: props.privacyPolicy }} />
                  </span>
                </Col>
              </Row>
              <Row className="text-center justify-content-center align-items-center m-auto">
                <Col className="text-center PrimaryBtn pt-3">
                  <Button variant="primary" size="sm" tabIndex="2" onClick={handleClose}>Close</Button>
                </Col>
              </Row>
          </FocusLock>
        </Col>
      </Modal>
    </span>
  );
};
export default withRouter(PrivacyPolicy);
