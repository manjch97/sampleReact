import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LockedRewards } from "./LockedRewards";
import { UnlockedRewards } from "./UnlockedRewards";
import { Card, Tab, Tabs, Container, Row, Col, Button, Image } from "react-bootstrap";
import lockss from '../../../assets/img/booths/locked-rew.svg';
import {fireClickEvent} from '../../../helper/GTMHelper'

const mapStateToProps = (state) => ({
    currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

class Rewards extends Component {

    state = {

    }

    componentDidMount() {
        fireClickEvent({ id: this.props.currentUser?.email }, this.props.history.location.pathname, "booth_reward_rewards_click", { userId: this.props.currentUser?.email });
    }

    render() {

        return (
            <React.Fragment>
                <Row>
                    <Col md={12} xs={12} sm={12} className="p-2">
                        <Button variant="dark" className='mob-view e3-button'>
                            <Image className="mr-1 lo" alt="" src={lockss} />
                            <span className="f-small">Unlock At Next Level</span>
                        </Button>
                    </Col>
                    <Col xs={6} md={6} className='card lock-card'>
                        <LockedRewards />
                    </Col>
                    <Col xs={6} md={6} className='card unlock-card'>
                        <UnlockedRewards />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Rewards));
