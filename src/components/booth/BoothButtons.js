import React from "react";
import './Booth.scss';
import { BoothTitle } from './BoothTitle';
import { Button, Row, Col, Image } from "react-bootstrap";
import message from '../../assets/img/booths/message.svg';
import profile from '../../assets/img/booths/profile.svg';
import rewards from '../../assets/img/booths/rewards.svg'
import lock from '../../assets/img/booths/lock.svg'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { EditBoothSchedule } from "./EditBoothSchedule";
// import upload from '../../assets/img/upload/upload.svg';
import { fireClickEvent } from "../../helper/GTMHelper";
import ShareProfile from "../account/profile/settings/ShareProfile";
import { useState } from "react";

export const BoothButtons = (props) => {

    let history = useHistory();
    const [isOpen, setIsOpen] = React.useState(false);
    const headerData = props.data;

    const currentLoggedinUser = useSelector(
        state => state.auth.user
    );

    const showModal = () => {
        fireClickEvent({ id: currentLoggedinUser?.email }, history.location.pathname, "booth_editschedule_openmodal_click", { userId: currentLoggedinUser?.email });
        setIsOpen(true);
    };

    const hideModal = () => {
        fireClickEvent({ id: currentLoggedinUser?.email }, history.location.pathname, "booth_editschedule_hidemodal_click", { userId: currentLoggedinUser?.email });
        setIsOpen(false);
    };

    const rewards = (e) => {
        e.preventDefault();
        fireClickEvent({ id: currentLoggedinUser?.email }, history.location.pathname, "booth_reward_click", { userId: currentLoggedinUser?.email });
        history.push('/booths/' + props.boothId + '/rewards-goals');
    }

    const gameDemos = (e) => {
        e.preventDefault();
        fireClickEvent({ id: currentLoggedinUser?.email }, history.location.pathname, "booth_gamedemos_click", { userId: currentLoggedinUser?.email });
        history.push('/game-demos');
    };

    const [showShareProfile, setShowShareProfile] = useState(false);
    const handleShareYourProfileClick = () => {
        setShowShareProfile(!showShareProfile);
    };

    return (
        <Row className='mt-n3'>
            <Col xl={3} xs={6} className='pr-xs-0 '>
                <BoothTitle data={headerData} />
            </Col>
            <Col xl={2} xs={6} className='px-xs-0 mt-4 pt-2'>
                <Button variant="secondary" className='e3-button mr-2' onClick={props.boothFollowClickHandler}>{headerData.isFollowing ? "Following" : "Follow Booth"}</Button>
                <Button variant="primary" className='e3-button' size="sm" onClick={showModal}>Edit</Button>
            </Col>
            <Col xl={7} xs={12} className='px-xs-0 text-xl-right mt-4 pt-2 justify-content-end align-items-end responsealign'>
                <Button variant="dark" className='e3-button mr-1 mb-1 ' onClick={handleShareYourProfileClick}><Image src={profile} className="mr-2 ml-1" alt="" />Drop Business Card</Button>
                <Button variant="dark" className='e3-button mr-1 mb-1' size="sm" onClick={gameDemos}>Arcade
                {/* <div className="ml-1 count">{headerData.arcadeCount}</div> */}
                </Button>
                <Button variant="dark" className='e3-button mr-1 mb-1' size="sm"><Image src={message} className="mr-2 ml-1" alt="" />Send Message</Button>
                <Button variant="dark" className='e3-button mr-1 mb-1 mr-4 responreward' size="sm" onClick={rewards}><Image src={rewards} className="mr-2" alt="" />Rewards<Image src={lock} className="mt-n2 ml-1" alt="" /></Button>
                <Button variant="dark" className='e3-button e3-follow-btn' size="sm">
                    <span>Followers</span>
                    <span className='e3-btn-likes'>{headerData.followerCount}</span>
                </Button>
            </Col>
            <EditBoothSchedule show={isOpen} hideModal={() => hideModal()} />
            {
                showShareProfile && <ShareProfile show={showShareProfile} handleShareYourProfileClick={handleShareYourProfileClick} />
            }
        </Row>
    )
}