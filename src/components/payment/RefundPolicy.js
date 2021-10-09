import React, { useState } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/style.scss";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { fireClickEvent } from "../../helper/GTMHelper";
import { GetSpinner } from "../../helper/CommonHelper";
import FocusLock, { AutoFocusInside } from "react-focus-lock";



const RefundPolicy = (props) => {

  const [show, setShow] = useState(false);

  const currentLoggedinUser = useSelector(
    state => state.auth.user
  );

  const handleShow = () => {
    fireClickEvent({ id: currentLoggedinUser?.email }, props.history.location.pathname, "refundpolicy_link_click", { userId: currentLoggedinUser?.email });
    props.getRefundPolicyHandler();
    setShow(true);
  }

  const handleClose = () => {
    fireClickEvent({ id: currentLoggedinUser?.email }, props.history.location.pathname, "refundpolicy_modalclose_click", { userId: currentLoggedinUser?.email });
    setShow(false);
  }

  return (
    <span>
      <a className="font-weight-500 cursor black" tabIndex="0" onClick={handleShow} onKeyPress={handleShow}>
        Refund Policy
      </a>
      <Modal show={show} onHide={handleClose} size="md" keyboard={true} centered animation={false}>
        <Col xs={12} className="py-2 mb-3">
          <FocusLock>
            {/* <AutoFocusInside> */}
              <Modal.Header className="font-weight-light border-0" closeButton />
              <Row className="text-center justify-content-center align-items-center m-auto ">
                <h4 className="text-xl text-uppercase py-3">
                  <span className="primaryColor">REFUND</span> POLICY
              </h4>
              </Row>
              <Row>
                <Col className="termScroll" tabIndex="1">
                  <span>
                    {!props.refundPolicy && <div className="d-flex justify-content-center align-items-center h-100"><GetSpinner /></div>}
                    <div dangerouslySetInnerHTML={{ __html: props.refundPolicy }} />
                  </span>
                </Col>
              </Row>
            {/* </AutoFocusInside> */}
          </FocusLock>
        </Col>
      </Modal>
    </span>
  );
};
export default withRouter(RefundPolicy);
