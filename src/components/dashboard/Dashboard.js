import React, { Component } from "react";
import { WebHeader } from "../../helper/CommonHelper";
import SideNavMain from "../common/sidenav/SideNavMain";
import { Container, Row, Col } from 'react-bootstrap';
import Booth from './Booth';
import GameDemo from './GameDemo'
import HappeningNow from './HappeningNow'
import RecommendedClip from './RecommendedClip'
import { PopulateMetaTags } from "../../helper/CommonHelper";
import { withRouter } from "react-router-dom";

export default class Dashboard extends Component {
    state = {
    }

    componentDidMount() {
    }

    render() {
        return (
            <React.Fragment>
                <PopulateMetaTags title={"E3 Expo Event-Dashboard"} description={"E3 Expo Event-Dashboard"} />
                <WebHeader props={this.props} />
                <main className="e3-main-wrapper pt-4">
                    <SideNavMain />

                    <div className="e3-content-wrapper">
                        <Container fluid className="pt-1">
                            {/* col mt-3  px-1 px-sm-4 */}
                            <Row lg={2}>
                                <Col>
                                    <Booth />
                                </Col>
                                <Col>
                                    <GameDemo />
                                </Col>

                            </Row>

                            <HappeningNow />

                            <RecommendedClip />
                        </Container>
                    </div>
                </main>

            </React.Fragment>
        );
    }
}
