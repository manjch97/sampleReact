import React, { useState } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/style.scss";

export const PaymentSuccessAlert = (props) => {

  const [show, setShow] = useState(props.showAlert);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} size="md" keyboard={true} centered animation={false}>
    <Container>
      <Col xs={12} className="py-2 mb-3">
        <Modal.Header className="font-weight-light border-0" closeButton />

        <Row className="text-center justify-content-center align-items-center m-auto ">
          <h4 className="text-xl text-uppercase py-3">
            <span className="primaryColor">PAYMENT</span> STATUS
          </h4>
        </Row>
        <Row>
          <Col>
            <p className="my-0"><span className="primaryColor">Order Id: </span>{props.response.orderId}</p>
            <p className="my-0"><span className="primaryColor">Transaction Id: </span>{props.response.transactionId}</p>
            <p className="my-0"><span className="primaryColor">Status: </span><b>{props.response.status}</b></p>
            <p className="my-0"><span className="primaryColor">Order Time: </span>{props.response.orderTime}</p>
            <p className="my-0"><span className="primaryColor">Message: </span><b>{props.response.message}</b></p>
          </Col>
        </Row>
      </Col>
    </Container>
    </Modal>
  );
};
