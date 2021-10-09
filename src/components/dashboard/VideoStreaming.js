import React, { Component } from "react";
import { WebHeader } from "../../helper/CommonHelper";
import SideNavMain from "../common/sidenav/SideNavMain";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PopulateMetaTags } from "../../helper/CommonHelper";

import BoothLogo from '../../assets/img/dashboard/User.svg';

import { Image } from 'react-bootstrap'
import isURL from "validator/lib/isURL";
import { CheckCircleFill, Eye, ArrowLeftRight, ThreeDotsVertical, CalendarEvent } from 'react-bootstrap-icons';
import fbooth from '../../assets/img/landing/f-booth.svg';
import share from '../../assets/img/landing/booth.svg';
import tick from '../../assets/img/dashboard/tick.svg';
import { VideoStreamChat } from "./VideoStreamChat";
import ReactPlayer from 'react-player';


export default class VideoStreaming extends Component {
    state = {

    }

    ontest() {
        console.log("pip enable");
    }

    render() {

        return (
            <React.Fragment>
                <PopulateMetaTags title={"E3 Expo Event-Dashboard"} description={"E3 Expo Event-Dashboard"} />
                <WebHeader props={this.props} />
                <main className="e3-main-wrapper pt-2 ml-2">
                    <Row>
                        <Col md={9} className="p-0">
                            <div className="d-flex">
                                <div className="p-2">
                                    <div className='e3-booth-title-container'>
                                        <div className='e3-booth-logos'>
                                            <Image src={BoothLogo} alt="loading.." />
                                            <span className='e3-booth-badges badge'>LIVE</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h6 style={{ color: '#E73D2F' }}>Fortnite Season 4 Is Out</h6>
                                    <span style={{ color: '#4F4F4F' }}>Learn More About The Next Season</span>
                                    <div className="d-flex align-items-start mb-2">
                                        <div className="d-flex align-items-start">Epic</div>
                                        <div className="d-flex align-items-start p-1"><Image className="tick" src={tick} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex player-wrapper">
                                <ReactPlayer
                                    width='100%'
                                    height='100%'
                                    className='e3-media-react-players'
                                    url="//youtu.be/gG0p_YeA7bk"
                                    controls='true'
                                >
                                </ReactPlayer>

                            </div>
                            <div class="d-flex">
                                <div class="mr-auto p-2"> <Button variant="dark" className='e3-button mr-1 mb-1'>FORTNITE</Button>
                                    <Button variant="dark" className='e3-button mr-1 mb-1' size="sm" >Epic </Button>
                                    <Button variant="dark" className='e3-button mr-1 mb-1' size="sm">First Person</Button>
                                    <Button variant="dark" className='e3-button mr-1 mb-1 mr-4 responreward' size="sm" >Update</Button></div>
                                <div class="p-2"><Button variant="secondary" className='e3-button mr-2' ><Image className="mr-1" src={fbooth} alt="logo" /> Follow Booth</Button>
                                    <Button variant="dark" className='e3-button mr-2' size="sm" > <Image className="mr-1" src={share} alt="logo" /> Share</Button>
                                    <ThreeDotsVertical className="gray mt-2" /></div>
                            </div>
                        </Col>
                        <Col md={3} className="p-0">
                            <VideoStreamChat />
                        </Col>
                    </Row>

                </main>
            </React.Fragment>
        );
    }
}

