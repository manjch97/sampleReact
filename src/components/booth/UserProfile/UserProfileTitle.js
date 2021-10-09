import React from "react";
// import '../Booth.scss';
import './UserProfile.scss';
import {Row} from 'react-bootstrap';
export const UserProfileTitle = (props) => {
    return (
        <div className='e3-userprofile-title-container'>
            <div className='e3-userprofile-logo'>
                <img src={props.data.logo} />
                <span className='e3-userprofile-badge badge badge-dis'>{props.data.status}</span>
            </div>
            <div className='e3-userprofile-title'>
                <h4>{props.data.name}</h4>
                <Row className="e3-userprofile-subtitle">
                <span className="badge">Fortnite</span>
                <span className="badge">LOL</span>
                </Row>
                {/* <p className='e3-userprofile-sub-title'>{props.data.season}</p> */}
            </div>
        </div>
    )
}
export default UserProfileTitle;