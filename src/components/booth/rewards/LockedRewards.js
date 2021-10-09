import React from "react"
import { Card, Tab, Tabs, Container, Row, Col, Button, Image } from "react-bootstrap";
import getptc from '../../../assets/img/booths/Vector5.svg';
import lockss from '../../../assets/img/booths/locked-rew.svg';
import cup from '../../../assets/img/booths/cup.svg';

export const LockedRewards = (props) => {

    const rewards = [
        { img: cup, lock: lockss },
        { img: cup, lock: lockss },
        { img: cup, lock: lockss },
        { img: cup, lock: lockss },
        { img: cup, lock: lockss },
        { img: cup, lock: lockss },
        { img: cup, lock: lockss },
        { img: cup, lock: lockss },
        { img: cup, lock: lockss }
    ];

    return (
        <React.Fragment>
            <Col xs={12} md={12}>
                <Row className="mt-3">
                    <Col md={6} xl={6} className="d-flex justify-content-center">
                        <Image src={getptc} />
                        <span className="f-12 lock-txt">LOCKED</span>
                    </Col>
                    <Col xs={6} md={6} xl={6}>
                        <Button variant="dark" className='e3-button ml-2 desktopview'>
                            <Image className="mr-1 lo" alt="" src={lockss} />

                            <span className="f-small">Unlock At Next Level</span>
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Row className="pt-2 d-flex justify-content-center">
                {rewards.map(rew =>
                    <Col md={4} xs={12} className="col-12">
                        <div className="ycup-bg">
                            <div className="d-flex justify-content-center">
                                <Image alt="" src={rew.img} className="cup-img" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                                <Image alt="" src={rew.lock} className="lock-p" />
                        </div>
                    </Col>
                )}

            </Row>
        </React.Fragment>
    );
}