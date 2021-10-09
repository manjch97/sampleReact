import React from "react"
import { Card, Tab, Tabs, Container, Row, Col, Button, Image } from "react-bootstrap";
import getptc from '../../../assets/img/booths/Vector7.svg';
import cup from '../../../assets/img/booths/y-cup.svg';

export const UnlockedRewards = (props) => {

    const rewards = [
        { img: cup },
        { img: cup },
        { img: cup },
        { img: cup },
        { img: cup },
        { img: cup },
        { img: cup },
        { img: cup },
        { img: cup }
    ];

    return (
        <React.Fragment>
            <Col xs={12} md={12}>
            <Row className="mt-3">
                    <Col md={12} className="d-flex justify-content-center">
                        <Image src={getptc} /> <span className="f-12 unlock-txt">UNLOCKED</span>
                    </Col>
                </Row>
            </Col>
            <Row className="pt-2 d-flex justify-content-center">
            {rewards.map(rew =>
                <Col md={4} xs={12} className="col-12 pb-3">
                    <div  className="cup-bg">
                        <div className="d-flex justify-content-center">
                            <Image alt="" src={rew.img} className="cup-img" />
                        </div>
                    </div>
                </Col>
            )}
            </Row>
            

           
        </React.Fragment>
    );
}