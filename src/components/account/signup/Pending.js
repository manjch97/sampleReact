import React, { Component } from "react";
import { connect } from 'react-redux';
import Header from "../../common/header/Header";
import { Row, Col, InputGroup, Form, Button, Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import PendingIcon from '../../../assets/img/landing/pending.svg';
import "../../../components/landing/Landing.scss";
import { Redirect, withRouter } from "react-router-dom";
import {isLoggedin, getLoginToken} from './../../../services/AuthService'

const mapStateToProps = state => ({
  currentUser: state.auth.user
});

class Pending extends Component {

  state = {
    show:true,
    title:"E3 Expo Event-Pending"
  };
  componentDidMount(){
    document.title=this.state.title;
  }

  handlePending=(event)=>{
    event.preventDefault();
    this.props.history.push('/signup/thankyou');
  }

  render() {

    if(!isLoggedin()){
      return (<Redirect to="/login" />);
    }

    return (
      <React.Fragment>
        <Container>
          <div className="my-5 pt-5 w-25"></div>
          <Col className="industry-header mt-4">
            <Row className="text-center justify-content-center align-items-center m-auto">
              <Col md="auto">
                <div className="auto">
                  <img xs="text-center auto" className="mx-auto mb-4" src={PendingIcon} alt="pending icon" />
                </div>

                <h4 className="text-xl text-uppercase">
                  Pending Approval
                </h4>
                <h6 className="my-4 text-muted text-md">
                  To create your profile please fill the missing info
                </h6>
              </Col>
            </Row>

            <Row xs={1} sm={2}>
              <Col>
                <Form.Group className="input-field">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="input-field">
                  <Form.Control
                    type="text"
                    placeholder="Company"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" placeholder="Address" autocomplete={this.state.show} rows={3} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className="text-center PrimaryBtn">
                <Button variant="primary" className="my-2 mBtn" size="sm" onClick={this.handlePending}>

                  <span className="d-none d-md-block">CONTINUE</span>
                  <span className="d-block d-md-none">GO<ArrowRight className="ml-2 text-lg" /></span>


                </Button>
              </Col>
            </Row>

            <Row></Row>
          </Col>
        </Container>

      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, {})(withRouter(Pending));
