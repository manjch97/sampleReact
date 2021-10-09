import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import "../../../assets/styles/style.scss";
import Approved from "../../../assets/img/landing/approved.svg";
import Reject from "../../../assets/img/landing/reject.svg";
import Thank from "../../../assets/img/landing/thank.svg";
import FocusLock, { AutoFocusInside } from "react-focus-lock";

class SignupStatus extends Component {

  render() {
    return (
      <React.Fragment>
        <Modal className="confirmationPopup" show={this.props.show} onHide={this.props.onHide}
          size="md"
          keyboard={true}
          centered>
          {this.props.approved ?
            <FocusLock>
              <AutoFocusInside>
                <React.Fragment>
                  <Modal.Body>
                    <Modal.Header className="font-weight-light p-0 border-0" closeButton aria-label="Your application is approved"></Modal.Header>
                    <Col className="text-center">
                      <div className="auto">
                        <img xs="text-center auto" className="mx-auto my-4" src={Approved} alt="Approved" />
                      </div>
                      <h4 className="text-xl ">
                        You're Approved!
                                  </h4>
                      <div className="mb-5 text-muted">
                        Now let's go finish your profile
                                  </div>
                    </Col>
                  </Modal.Body>
                  <Modal.Footer className="justify-content-center align-items-center greenBG">
                    <Button variant="light" onClick={this.props.onHide} >CONTINUE</Button>
                  </Modal.Footer>
                </React.Fragment>
              </AutoFocusInside>
            </FocusLock>
            :
            <React.Fragment>
              <FocusLock>
                <AutoFocusInside>
                  <Modal.Body >
                    <Modal.Header
                      className="font-weight-light pt-0 border-0"
                      closeButton aria-label="Your application is rejected"
                    ></Modal.Header>
                    <Col className="text-center">
                      <div className="auto">
                        <img
                          xs="text-center auto"
                          className="mx-auto my-4"
                          src={Reject}
                          alt="Approval icon"
                        />
                      </div>
                      <h4 className="text-xl text-uppercase">You're Rejected</h4>
                      <div className="mb-5 text-muted">
                      </div>
                    </Col>
                  </Modal.Body>
                  <Modal.Footer className="justify-content-center align-items-center redBG" >
                    <Button variant="light" onClick={this.props.onHide}>
                      CONTINUE
                </Button>
                  </Modal.Footer>
                </AutoFocusInside>
              </FocusLock>
            </React.Fragment>
          }
        </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(SignupStatus);