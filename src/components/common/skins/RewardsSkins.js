import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {Container,Col,Button, Row} from "react-bootstrap";
import './skins.scss';
import lockss from '../../../assets/img/booths/locked-rew.svg';
import { WebHeader } from "../../../helper/CommonHelper";
import ProfileSkin from "./ProfileSkin";
import AwardsSkins from "./AwardsSkins";
import BadgesSkins from "./BadgesSkins";
const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class RewardsSkins extends Component {

    render(){
            
        return (
            <React.Fragment>
                <Container className="shadow-box-skins">
                    <Row xs={1} md={1} xl={2}>
                        <Col>
                           <h6 className="skins-awards">Awards Received</h6>
                           <AwardsSkins/>
                        </Col>
                        <Col>
                           <h6 className="skins-awards">Badges Received</h6>
                           <BadgesSkins/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
  }
  export default RewardsSkins;