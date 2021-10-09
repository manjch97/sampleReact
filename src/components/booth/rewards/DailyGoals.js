import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressBar, Tab, Tabs, Container, Row, Col, Button, Image } from "react-bootstrap";
import getptc from '../../../assets/img/booths/Vector3.svg';
import { useState } from "react";
import { useSelector } from "react-redux";

export const DailyGoals = (props) => {

    const percentage = 50;
    const value = 0.66;

    const [show, setShow] = useState(false);

    const currentLoggedinUser = useSelector(
        state => state.auth.user
    );

    return (
        <React.Fragment>
           <Row>
                {props.Goalspopupdata !== "true" ?
                    <Col xs={6} md={6} xl={6} className="col-12 p-2 d-flex justify-content-center">
                        <Col className="p-bar">
                            <div className="progressBar">
                                <span className="f-12">0</span>
                                <Image className="center key" src={getptc} alt="loading "/>
                                <span className="center level f-12">
                                    5/60
                            </span>
                                <span className="p-bar-end f-12">60</span>
                                <ProgressBar variant="danger" now={percentage} />
                            </div>
                        </Col>
                    </Col>
                    : null}
                {props.Goalspopupdata === "true" ?
                    <Col xs={12} md={12} xl={12} className="col-12 d-flex justify-content-end">
                        <span className="p-2 mt-3 bd-highlight d-goals">DAILY GOALS</span>

                        <CircularProgressbar className="p-chart" value={percentage}
                            text={`${percentage}%`}
                        />
                    &nbsp;
                    <CircularProgressbar className="p-chart" value={percentage}
                            text={`${percentage}%`}
                        />
                    &nbsp;
                    <CircularProgressbar className="p-chart" value={percentage}
                            text={`${percentage}%`}
                        />
                    &nbsp;
                    <CircularProgressbar className="p-chart" value={percentage}
                            text={`${percentage}%`}
                        />
                    </Col> : null}
                {props.Goalspopupdata !== "true" ?
                    <Col xs={6} md={6} xl={6} className="col-12 d-flex justify-content-end pr-0">
                        <span className="p-2 mt-3 bd-highlight d-goals">DAILY GOALS</span>

                        <CircularProgressbar className="p-chart" value={percentage}
                            text={`${percentage}%`}
                        />
                    &nbsp;
                    <CircularProgressbar className="p-chart" value={percentage}
                            text={`${percentage}%`}
                        />
                    &nbsp;
                    <CircularProgressbar className="p-chart" value={percentage}
                            text={`${percentage}%`}
                        />
                    &nbsp;
                    <CircularProgressbar className="p-chart" value={percentage}
                            text={`${percentage}%`}
                        />
                    </Col> : null}
            </Row>
        </React.Fragment>
    );
}