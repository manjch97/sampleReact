import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GetSpinner, WebHeader } from "../../helper/CommonHelper";
import { NavTabsMain } from "./navtabs/NavTabsMain";
import SideNavMain from "../common/sidenav/SideNavMain";
import { GamesDemos } from "../../services/Api";
import { StartLater } from "./navtabs/startLater/StartLater";
import { Row, Col } from 'react-bootstrap';
import {PopulateMetaTags} from "../../helper/CommonHelper";

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

class GameDemoMain extends Component {


    state = {
        upcomingGames: [],
        loading: true
    }

    componentDidMount() {
        this.getUpcomingGames();
    }

    //Get the games starting in next few hours
    getUpcomingGames = () => {
        this.setState({ loading: true });
        GamesDemos.getUpcomingGames().then(response => {
            if (response) {
                this.setState((prevState) => ({
                    ...this.state.upcomingGames,
                    upcomingGames: response,
                    loading: false
                }));
            } else {
                this.setState({ loading: false });
                console.log("Error Occured while fetching games starting in next few hours", response);
            }
        }).catch(err => {
            this.setState({ loading: false });
            console.log("Error Occured while fetching games starting in next few hours", err);
        });
    }

    render() {
        let upcomingGames = null;

        if (this.state.loading === true) {
            upcomingGames = <GetSpinner />;
        } else {
            upcomingGames = <StartLater startlater={this.state.upcomingGames} />;
        }
        return (
            <React.Fragment>
                <PopulateMetaTags  title={"E3 Expo Event-Game Demo"} description={"E3 Expo Event-Game Demo"}/>
                <WebHeader props={this.props} />
                <main className="e3-main-wrapper">
                    <SideNavMain />
                    <section className="e3-content-wrapper">
                    <div className="containerspace">
                        <section className="">
                            <Row>
                                <Col lg={8} xl={8} ><NavTabsMain/></Col>
                                <Col lg={4} xl={4}>{upcomingGames}</Col>
                            </Row>
                        </section>
                    </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameDemoMain));
