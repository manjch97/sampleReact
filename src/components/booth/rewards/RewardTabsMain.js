import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Card, Tab, Tabs, Container, Row, Col, Button, Image } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import getptc from '../../../assets/img/booths/Vector3.svg';
import { fireClickEvent } from '../../../helper/GTMHelper';
import { Scrollbars } from 'react-custom-scrollbars';

export const RewardTabsMain = (props) => {
    const percentage = 50;

    const currentLoggedinUser = useSelector(
        state => state.auth.user
    );
    const sidebarData = [
        { name: "Lorem Ipsum dummy text for  quest isset that ismmet are all text" },
        { name: "Lorem Ipsum dummy text for  quest isset that ismmet are all text" },
        { name: "Lorem Ipsum dummy text for  quest isset that ismmet are all text" },
        { name: "Lorem Ipsum dummy text for  quest isset that ismmet are all text" },
        { name: "Lorem Ipsum dummy text for  quest isset that ismmet are all text" },
        { name: "Lorem Ipsum dummy text for  quest isset that ismmet are all text" }
    ];
    const history = useHistory();

    useEffect(() => {
        fireClickEvent({ id: currentLoggedinUser?.email }, history.location.pathname, "booth_reward_goals_click", { userId: currentLoggedinUser?.email });
    }, [])

    return (
        <React.Fragment>
                {props.goalsrewards !== "true" ?
                <Row>
                    {sidebarData.map(goals =>
                        <Col xs={12} md={4} className="col-12 pt-2">
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xs={8} md={8} className="flex-grow-1 bd-highlight">
                                            {goals.name}
                                        </Col>
                                        <Col xs={4} md={4} className="bd-highlight">
                                            <CircularProgressbar className="goal-p-chart" value={percentage}
                                                text={`${percentage}%`}
                                            />
                                        </Col>
                                        <Col xs={9} md={9} className="pt-2 flex-grow-1 bd-highlight">
                                            <span className="reward">REWARDS</span>
                                            <button variant="secondary" className="ml-1 btns" size="lg">
                                                <Image className="testkey ml-0 f-12 mt-1 pb-1" src={getptc} />
                                                <span className="f-12 smal-btn">X25</span>
                                            </button>
                                        </Col>
                                        <Col xs={3} md={3} className="pl-0 p-2 bd-highlight">
                                            <button variant="primary" className='e3-button btn btn-primary btn-sm' size="sm">Claim</button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row> :
                <Row>
                    <Scrollbars style={{ width: 500, height: 300 }}>
                    {sidebarData.map(goals =>
                     
                            <Col xs={12} md={12} className="col-12 pt-2">
                                <Card>
                                    <Card.Body>
                                        <Row>
                                            <Col xs={8} md={8} className="flex-grow-1 bd-highlight">
                                                {goals.name}
                                            </Col>
                                            <Col xs={4} md={4} className="bd-highlight">
                                                <CircularProgressbar className="goal-p-chart" value={percentage}
                                                    text={`${percentage}%`}
                                                />
                                            </Col>
                                            <Col xs={9} md={9} className="pt-2 flex-grow-1 bd-highlight">
                                                <span className="reward">REWARDS</span>
                                                <button variant="secondary" className="ml-1 btns" size="lg">
                                                    <Image className="testkey ml-0 f-12 mt-1 pb-1" src={getptc} />
                                                    <span className="f-12 smal-btn">X25</span>
                                                </button>
                                            </Col>
                                            <Col xs={3} md={3} className="pl-0 p-2 bd-highlight">
                                                <button variant="primary" className='e3-button btn btn-primary btn-sm' size="sm">Claim</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>


                    )}
                    </Scrollbars>
                </Row>
            }
        </React.Fragment>
    )
}

