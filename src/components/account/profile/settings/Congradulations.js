import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import "../../../../assets/styles/style.scss";
import cup from "../../../../assets/img/landing/Cup.svg";
import FocusLock, { AutoFocusInside } from "react-focus-lock";
import { ArrowLeft } from "react-bootstrap-icons";

class Congradulations extends Component {
    backTo = () => {
        //this.props.history.goBack();
        this.props.showCongratulationsToggle();
    };
    render() {
        return (
            <React.Fragment>
                <Modal className="confirmationPopup" show={this.props.show} onHide={this.props.onHide}
                    size="md"
                    keyboard={true}
                    centered>
                    <FocusLock>
                        <AutoFocusInside>
                            <React.Fragment>
                                <Modal.Body>
                                    <Modal.Header className="font-weight-light p-0 border-0" closeButton aria-label="Your application is approved"></Modal.Header>
                                    <b className="cursor underline" onClick={this.backTo}>
                                        <span className="text-lg pr-1">
                                            <ArrowLeft />
                                        </span>
                                        Back
                                        </b>
                                    <Col className="text-center">
                                        <div className="auto">
                                            <img xs="text-center auto" className="mx-auto my-4" src={cup} alt="Approved" />
                                        </div>
                                        <h4 className="text-xl ">
                                            Congratulations!
                                        </h4>
                                        <div className="mb-5 text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                    </Col>
                                </Modal.Body>
                                <Modal.Footer className="justify-content-center align-items-center greenBG">
                                    <Button variant="light" onClick={this.props.onHide} >CONTINUE</Button>
                                </Modal.Footer>
                            </React.Fragment>
                        </AutoFocusInside>
                    </FocusLock>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withRouter(Congradulations);