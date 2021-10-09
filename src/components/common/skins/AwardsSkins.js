import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {Container,Col,Button, Row,Card,Image} from "react-bootstrap";
import './skins.scss';
import lockss from '../../../assets/img/booths/locked-rew.svg';
import cup from '../../../assets/img/booths/y-cup.svg';

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class AwardsSkins extends Component {

    render(){
            
        return (
            <React.Fragment>
            <Row className="pt-2 ">
                <Col  className="col-3 pb-4">
                    <Card className="cup-bg-awards">
                        <Card.Body className="">
                            <Image alt="" src={cup} className="cup-img-awards" />
                        </Card.Body>
                        <div className="d-flex align-items-center justif-content-right">
                        <button variant="" className="ml-4 mt-2 btns-skins" size="">
                          <span className="p-2">X1</span>
                        </button>
                        </div>
                    </Card>
                </Col>

                <Col className="col-3 pb-4">
                    <Card   className="cup-bg-awards">
                        <Card.Body className="">
                            <Image alt="" src={cup} className="cup-img-awards" />
                        </Card.Body>
                        <div className="d-flex align-items-center justif-content-right">
                        <button variant="" className="ml-4 mt-2 btns-skins" size="">
                          <span className="p-2">X1</span>
                        </button>
                        </div>
                        </Card>
                </Col>
                <Col  className="col-3 pb-4">
                    <Card className="cup-bg-awards">
                        <Card.Body className="">
                            <Image alt="" src={cup} className="cup-img-awards" />
                        </Card.Body>
                        <div className="d-flex align-items-center justif-content-right">
                        <button variant="" className="ml-4 mt-2 btns-skins" size="">
                          <span className="p-2">X1</span>
                        </button>
                        </div>
                        </Card>
                </Col>
                
            </Row>
            </React.Fragment>
        );
    }
  }
  export default AwardsSkins;