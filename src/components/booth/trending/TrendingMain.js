
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GetSpinner, WebHeader } from "../../../helper/CommonHelper";
import { Row, Col, Container } from 'react-bootstrap';
import SideNavMain from "../../common/sidenav/SideNavMain";
import { TrendingBadge, GameDemos, TrendingBooths, LiveStreams, Events, TrendingProducts  } from './TrendingComponents';
import { BadgesTranding} from './Allbadges';

import './Trending.scss';

class TrendingMain extends Component {
    
    render() {
                return (
                    <React.Fragment>
                        <WebHeader props={this.props} />
                        <main className="e3-main-wrapper">
                            <SideNavMain />

                            <section className="e3-content containerminht">
                                <Container fluid className="pt-4 arrowTop">
                                    <h6 className="text-grey text-xl font-weight-500 mb-0 text-uppercase primaryColor">Trending Around You</h6>
                                    <hr className="mb-4"/>
                                    <Row sm={1} xs={1} lg={1} xl={2}>

                                        <Col>
                                            <TrendingBadge />
                                        </Col>
                                        <Col>
                                            <GameDemos />
                                        </Col>
                                    </Row>                                  
                                           <Row >
                                            <Col>
                                            <TrendingBooths />
                                            <LiveStreams />
                                            <Events />
                                            <TrendingProducts/>
                                            </Col>
                                            </Row>
                                    <h6 className="text-grey text-xl font-weight-500 mb-0 text-uppercase primaryColor">Trending Around You</h6>
                                    <hr className="mb-4"/>
                                    <TrendingBooths />
                                    <BadgesTranding />
                                    <hr />
                            
                           
                                    <div className="my-5"></div>
                                    <BadgesTranding />
                                </Container>
                            </section>
                        </main>
                    </React.Fragment>
                );
            }
        }
        export default connect()(withRouter(TrendingMain));