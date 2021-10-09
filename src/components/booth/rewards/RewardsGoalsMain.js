import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RewardTabsMain } from "./RewardTabsMain";
import { Tab, Tabs, Container, Row, Col, Button, Image } from "react-bootstrap";
import { DailyGoals } from "./DailyGoals";
import Goals from "./Goals";
import Rewards from "./Rewards";
import './rewards.scss';
import { WebHeader } from "../../../helper/CommonHelper";
import topimage from "../../../assets/img/booths/image25.svg";
import '../../../assets/styles/style.scss'
import getptc from '../../../assets/img/booths/Vector.svg';
import SideNavMain from "../../common/sidenav/SideNavMain";
import '../../common/header/Header.scss';
import BoothHeader from "../BoothHeader";
import { NavTabsMain } from "../navtabs/NavTabsMain";
import "../../landing/Landing.scss";
import {GoalsrewardsTabs} from "../rewards/GoalsnRewardstabs";
import {PopulateMetaTags} from "../../../helper/CommonHelper";

const mapStateToProps = (state) => ({
    currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

class AllRequests extends Component {

    state = {
        key: 'GOALS'
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <PopulateMetaTags  title={"E3 Expo Event-Rewards"} description={"E3 Expo Event-Rewards"}/>
                <WebHeader props={this.props} />
                <main className="e3-main-wrapper">
                    <SideNavMain />
                    <section className="e3-content-wrapper">
                        <div className="containerspace">
                        <BoothHeader props={this.props} />
                        <Col md={{ span: 8, offset: 4 }} className="d-flex justify-content-end">
                            <DailyGoals />
                        </Col>
                        <GoalsrewardsTabs/>
                        {/* <Tabs className='e3-nav-tabs' transition={false} defaultActiveKey="GOALS"
                            onSelect={(k) => this.setState({ key: k })}>
                            <Tab className='e3-tab-content' eventKey="GOALS" title="GOALS">
                                {
                                    this.state.key === "GOALS" && <RewardTabsMain />
                                }
                            </Tab>
                            <Tab className='e3-tab-content e3-event-tab pt-0' eventKey="REWARDS" title="REWARDS">
                                {
                                    this.state.key === "REWARDS" && <Rewards />
                                }
                            </Tab>
                        </Tabs> */}
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllRequests));
