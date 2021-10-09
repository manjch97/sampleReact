import React from "react";
import '../Booth.scss';
import UserProfileTitle from './UserProfileTitle';
import {Button, Row, Col} from "react-bootstrap";
import './UserProfile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments} from '@fortawesome/free-solid-svg-icons';
export const UserProfileButtons = (props) => {
    return(
        <Row className='justify-content-between align-items-center e3-userprofile-buttons-container'>
            <Col xl={4} xs={8} className='pr-xs-0 '>
                <UserProfileTitle data={props.boothTitle} />
            </Col>
            <Col xl={2} xs={4} md={3} className='px-xs-0  ml-0 pt-2'>
                <Button variant="secondary" className='e3-button e3-follow-button ' size="sm">Following</Button>
            </Col>
            <Col xl={6} xs={12} className='px-xs-0 text-xl-right text-center pt-2'>
                <Button variant="dark" className='e3-button e3-follow-btn mr-3 mb-1 button-we e3-button-dis' size="sm">
                    <span>Badges</span>
                    <span className='e3-btn-likes'>50</span>
                </Button>
                <Button variant="dark" className='e3-button e3-follow-btn mr-3 mb-1 button-we e3-button-dis' size="sm">
                    <span>Drop Bussiness Card</span>
                    <span className='e3-btn-likes'>123</span>
                </Button>
                <Button variant="dark" className='e3-button e3-follow-btn mr-3 mb-1 button-we e3-button-dis' size="sm">
                    <span>Rewards</span>
                    <span className='e3-btn-likes'>56</span>
                </Button>
                <Button variant="dark" className='e3-button mr-3 mb-1 e3-bu-align' size="sm">
                <FontAwesomeIcon className="mr-1" icon={faComments} />Send Message</Button>
                <Button variant="dark" className='e3-button e3-follow-btn button-we' size="sm">
                    <span>Followers</span>
                    <span className='e3-btn-likes'>2.6k</span>
                </Button>
            </Col>
        </Row>
    )
}
export default UserProfileButtons;