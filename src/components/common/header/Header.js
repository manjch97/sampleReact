import { useHistory } from "react-router-dom";
import { Navbar, Button, Row, Col, InputGroup, Form, Nav, Image, Modal } from 'react-bootstrap'
import { Search, Trophy, ChatLeftDots, Globe, Bell } from "react-bootstrap-icons";
import getptc1 from '../../../assets/img/booths/Vector3.svg';
import Logo from '../../../assets/img/logo.svg';
import getptc from '../../../assets/img/landing/getptc.svg';
import dollar from '../../../assets/img/booths/Path.svg';
import fire from '../../../assets/img/header/fire.svg';
import search from '../../../assets/img/header/search.svg';
import message from '../../../assets/img/header/message.svg';
import notification from '../../../assets/img/header/notification.svg';
import trophy from '../../../assets/img/header/Trophy.svg';


import points from '../../../assets/img/landing/points.svg';
import arrow from '../../../assets/img/landing/arrow.svg';
import { useState } from "react";
import { useRef } from "react";
import { fireClickEvent } from '../../../helper/GTMHelper'
import help from '../../../assets/img/landing/help.svg';
import './Header.scss';
import { Overlay, Popover, Card } from "react-bootstrap";
import '../../../assets/styles/style.scss'
import { useSelector } from "react-redux";
import { GetProfileAvatar, GetSimpleAvatar } from "../../../helper/CommonHelper";
import { ProgressBar } from "react-bootstrap";
import pitems from '../../../assets/img/landing/p-items.svg';
import card from '../../../assets/img/landing/card.svg';
import settings from '../../../assets/img/landing/settings.svg';
import friend from '../../../assets/img/landing/frnds.svg';
import share from '../../../assets/img/landing/share.svg';
import logout from '../../../assets/img/landing/logout.svg';
import Settings from '../../account/profile/settings/Settings';
import ShareProfile from '../../account/profile/settings/ShareProfile';
import { GoalsrewardsTabs } from '../../booth/rewards/GoalsnRewardstabs';
import { DailyGoals } from '../../booth/rewards/DailyGoals';
import { OverlayTrigger } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import NotificationPopup from "./NotificationPopup";
import Setting from "../../account/profile/settings/Setting"
import SearchAll from "../../search/SearchAll";

const Header = (props) => {

    let history = useHistory();

    const currentLoggedinUser = useSelector(
        state => state.auth.user
    );

    const toProfile = () => {

        history.push('/global/userdetails/1');
    }

    const Tologin = () => {
        history.push('/login');
    };
    const gameDemos = () => {
        fireClickEvent(null, history.location.pathname, "gamedemos_click", {});
        history.push('/game-demos');
    };

    const toTrending = () => {
        history.push('/trending');
    }


    const toDashBoard = () => {
        history.push('/dashboard');
    }

    const toHelp = () => {
        history.push('/global/help');
    }

    const [show, setShow] = useState(false);

    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        fireClickEvent(null, history.location.pathname, "header_avatar_click", {});
        setShow(!show);
        setTarget(event.target);
    };
    const [showNotification, setShowNotification] = useState(false);

    const [targetNotification, setTargetNotification] = useState(null);
    const refNotication = useRef(null);
    const handleClickNotification = (event) => {
        fireClickEvent(null, history.location.pathname, "header_notification_click", {});
        setShowNotification(!showNotification);
        setTargetNotification(event.target);
    };

    const [showShareProfile, setShowShareProfile] = useState(false);
    const handleShareYourProfileClick = () => {
        setShowShareProfile(!showShareProfile);
    };

    const [showSettings, setShowSettings] = useState(false);
    const handleSettingsClick = () => {
        setShowSettings(!showSettings);
    };

    const percentage = 60;
    const value = 0.66;
    const popover = (
        <Popover className="d-none d-md-block header-popover" id="popover-basic">
            <Popover.Title>
                <DailyGoals Goalspopupdata="true" />
            </Popover.Title>
            <Popover.Content>
                <GoalsrewardsTabs goalsrewards="true" />
            </Popover.Content>
        </Popover>
    );

    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClose = () => setShowSearch(false);
    const handleSearchShow = () => setShowSearch(true);

    return (
        <div className="Header">

            <div className="row">
                <div className="col-md-12 ">

                    <Navbar bg="bg-white" variant="light" expand="lg" className="fixed-top shadow-sm safearea-header">
                        <Col xs={1} className="d-none d-lg-block ">
                            <Row className="justify-content-start align-items-center cursor" onClick={toDashBoard}>
                                <Image className="logo ml-3" src={Logo} alt="E3 header logo" />
                            </Row>
                        </Col>
                        <Col className="d-none d-xl-block">
                            <InputGroup className="search">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><Search /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" placeholder="Search.." onClick={handleSearchShow} />
                            </InputGroup>
                        </Col>
                        <Col className="Mobilemenu">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#/booths">Booths</Nav.Link>
                                    <Nav.Link href="#/global/people">People</Nav.Link>
                                    <Nav.Link href="#/global/events/all">Events</Nav.Link>
                                    <Nav.Link href="#">Shop</Nav.Link>
                                    <Nav.Link href="#/forum">Forum</Nav.Link>
                                    <Nav.Link href="#/booths/1"><b>TempBooth</b></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-end ">
                            <Row>
                                <Col className="p-0 d-none d-md-block">
                                    <Button variant="secondary" onClick={gameDemos} className="mr-2 btn-secondary" size="lg">
                                        Game Demos
                                    </Button>
                                    <Button variant="primary" tabIndex="0" size="sm" className="d-inline-flex">
                                        <Image className="mr-1" src={getptc} alt="logo" /><span>Get Pts</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col className=" bd-highlight icons d-flex justify-content-end">
                            <div className="d-flex widthIcon justify-content-center align-items-center bd-highlight">
                                <div className="icon-space"><Image src={fire} alt="icon" tabIndex="0" onClick={toTrending} onKeyPress={toTrending} />
                                </div>
                                <div className="icon-space"><Image src={trophy} alt="icon" tabIndex="0" /></div>
                                <div className="icon-space"><Image src={message} alt="Message Icon" tabIndex="0" /></div>
                                <div className="icon-space">
                                    <div ref={ref}>
                                    <div className="bell"><div >12</div><Image src={notification} alt="Notification" onClick={handleClickNotification} tabIndex="0" /></div>
                                    <Overlay
                                      show={showNotification}
                                      target={targetNotification}
                                      placement="bottom"
                                      container={refNotication.current}
                                      containerPadding={20}>
                                          <Popover id="popover-contained">
                                          <Popover.Content style={{ background: '#F2F2F2' }}>
                                               <NotificationPopup/>
                                          </Popover.Content>
                                          </Popover>
                                      </Overlay>
                                    </div>
                                </div>
                                <div className="icon-space"><Image src={search} alt="Search" tabIndex="0" /></div>

                                <div className="icon-space">
                                    <div ref={ref}>
                                        <button className="Topavatar" onClick={handleClick} tabIndex="0">
                                            <GetProfileAvatar avatarUrl={currentLoggedinUser?.avatarUrl} avatarInitial={'SA'} />
                                        </button>
                                        {/* <AutoFocusInside> */}
                                        <Overlay
                                            show={show}
                                            target={target}
                                            placement="bottom"
                                            container={ref.current}
                                            containerPadding={20} >
                                            <Popover id="popover-contained">
                                                <Popover.Title>
                                                    <Row className="d-flex alignitemcenter">
                                                        <Col md={3} xs={3} className="col-smal-sp" onKeyPress={() => { history.push('/profile/avatar'); }} onClick={() => { history.push('/profile/avatar'); }}>
                                                            <div className="avatarCirclhd" tabIndex="0"><GetProfileAvatar avatarUrl={currentLoggedinUser?.avatarUrl} avatarInitial={'SA'} /></div>
                                                        </Col>
                                                        <Col md={5} xs={5} className="col-no-sp cursor" tabIndex="0" onKeyPress={toProfile} onClick={toProfile}>
                                                            <div className="d-flex justify-content-start headlab">Anna Smith <span> (21)</span></div>
                                                            <div className="headsublab">Begining</div>
                                                        </Col>
                                                        <Col md={4} xs={4} className="col-smal-sp">
                                                            <Button variant="default" tabIndex="0" className="d-flex e3-accepted-status w-100" >
                                                                <Image src={dollar} alt="logo" />
                                                                <span className="dolortxt">255</span></Button>
                                                        </Col>
                                                        {/*<Col md={{ span: 5, offset: 2 }} onClick={toProfile}>
                                                            <span className="d-flex justify-content-centerf f-12 ml-2 beg" style={{ color: '#313131' }}>Begining</span>
                                                        </Col>*/}
                                                    </Row>
                                                    <Row>
                                                        <Col xs={12} md={12} className="p-3 d-flex justify-content-center">
                                                            <Col className="p-bars">
                                                                <div className="progressBars pb-2 mt-2">
                                                                    <span className="f-10 start-no d-flex justify-content-start">0</span>
                                                                    <Image className="center keys" src={getptc1} alt="" />
                                                                    <span className="center levels f-10">
                                                                        5/60
                                                                    </span>
                                                                    <span className="f-10 d-flex justify-content-end">60</span>
                                                                    <ProgressBar variant="danger" now={percentage} />
                                                                </div>
                                                            </Col>
                                                        </Col>
                                                        <Col xs={12} md={12} className="beg d-none d-md-block cursor" >
                                                            <OverlayTrigger trigger="click" placement="left" overlay={popover} trigger="focus">
                                                                <span className="f-12 " style={{ color: '#313131', whiteSpace: 'nowrap' }}><a tabIndex="0" className="goals1"><strong>MY CURRENT QUEST AND THE PROGRESS</strong></a></span>
                                                            </OverlayTrigger>
                                                        </Col>
                                                    </Row>
                                                </Popover.Title>
                                                <Popover.Content style={{ background: '#F2F2F2' }}>
                                                    <Scrollbars autoHeight
                                                        autoHeightMin={100}
                                                        autoHeightMax={300}>

                                                        <Card className="head-card mt-2">
                                                            <div className="d-flex flex-row cursor" tabIndex="0">
                                                                <div className="p-2"> <Image src={points} alt="points" /></div>
                                                                <div className="p-2 mt-1"> <p className="d-flex align-items-start  sub-testhead"> Points</p></div>
                                                                <div className="ml-auto p-2 mt-1"> <Image src={arrow} alt="" /></div>
                                                            </div>
                                                            <div className="d-flex flex-row cursor" tabIndex="0">
                                                                <div className="p-2"> <Image src={pitems} alt="points" /></div>
                                                                <div className="p-2 mt-1"> <p className="d-flex align-items-start  sub-testhead"> Physical Items</p></div>
                                                                <div className="ml-auto p-2 mt-1"> <Image src={arrow} alt="" /></div>
                                                            </div>
                                                        </Card>
                                                        <Card className="head-card mt-2">
                                                            <div className="d-flex flex-row cursor" tabIndex="0">
                                                                <div className="p-2"> <Image src={card} alt="points" /></div>
                                                                <div className="p-2 mt-1"> <p className="d-flex align-items-start sub-testhead"> Watch  History</p></div>
                                                                <div className="ml-auto p-2 mt-1"> <Image src={arrow} alt="" /></div>
                                                            </div>
                                                            <div className="d-flex flex-row cursor" tabIndex="0" onClick={() => { history.push('/profile/settings') }} onKeyPress={() => { history.push('/profile/settings') }}>
                                                                <div className="p-2"> <Image src={settings} alt="points" /></div>
                                                                <div className="p-2 mt-1"> <p className="d-flex align-items-start  sub-testhead"> Setting Account
                                                                </p></div>
                                                                <div className="ml-auto p-2 mt-1"> <Image src={arrow} alt="" /></div>
                                                            </div>
                                                            <div className="d-flex flex-row cursor" tabIndex="0" onClick={() => { history.push('/global/people/following') }} onKeyPress={() => { history.push('/global/people/following') }}>
                                                                <div className="p-2"> <Image src={friend} alt="points" /></div>
                                                                <div className="p-2 mt-1"> <p className="d-flex align-items-start  sub-testhead"> Friends</p></div>
                                                                <div className="ml-auto p-2 mt-1"> <Image src={arrow} alt="" /></div>
                                                            </div>
                                                            <div className="d-flex flex-row cursor" tabIndex="0" onClick={handleShareYourProfileClick} onKeyPress={handleShareYourProfileClick}>
                                                                <div className="p-2"> <Image src={share} alt="points" /></div>
                                                                <div className="p-2 mt-1"><p className="d-flex align-items-start sub-testhead"> Share your profile
                                                                {
                                                                        showShareProfile && <ShareProfile show={showShareProfile} handleShareYourProfileClick={handleShareYourProfileClick} />
                                                                    }
                                                                </p>
                                                                </div>
                                                                <div className="ml-auto p-2 mt-1"> <Image src={arrow} alt="" /></div>
                                                            </div>

                                                        </Card>
                                                        <Card className="head-card mt-2">
                                                            <div className="d-flex flex-row" tabIndex="0" onClick={() => { history.push('/global/help') }} onKeyPress={() => { history.push('/global/help') }}>
                                                                <div className="p-2"> <Image src={help} alt="points" /></div>
                                                                <div className="p-2 mt-1"> <p className="d-flex align-items-start  sub-testhead"> Help</p></div>
                                                                <div className="ml-auto p-2 mt-1"> <Image src={arrow} alt="" /></div>
                                                            </div>
                                                            <div className="d-flex flex-row" tabIndex="0" onClick={Tologin} onKeyPress={Tologin}>
                                                                <div className="p-2"> <Image src={logout} alt="points" /></div>
                                                                <div className="p-2 mt-1"> <p className="d-flex align-items-start  sub-testhead"> Log Out</p></div>
                                                                <div className="ml-auto p-2 mt-1"> <Image src={arrow} alt="" /></div>
                                                            </div>

                                                        </Card>

                                                    </Scrollbars>
                                                </Popover.Content>
                                            </Popover>
                                        </Overlay>
                                        {/* </AutoFocusInside> */}
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Navbar>

                </div>
            </div>
            <Modal dialogClassName="searchscreen-modal" show={showSearch} onHide={handleSearchClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                     <SearchAll />
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default Header;