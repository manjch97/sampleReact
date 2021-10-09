import React from "react";
import { GameTag } from '../GameTag/GameTag';
import { useHistory } from "react-router-dom";
 
import './ScheduleItem.scss';

import Schedule1 from '../../../assets/img/booths/1.svg';
import isURL from "validator/lib/isURL";

// "scheduleId": "1",
// "eventTitle": "PUBG Mobile",
// "eventIconUrl": "",
// "description": "Event 1",
// "imageUrl": "imageUrl1",
// "scheduleTime": "11:00 AM"

export const ScheduleItem = (props) => {
    let history = useHistory();
    const toVideo = () => {

        history.push('/global/video');
    }

    if (Array.isArray(props.schedules)) {
        if (props.schedules.length <= 0) {
            return (<h5>No Schedules</h5>);
        }
    }

    if (!props.schedules) {
        return (<h5>No Schedules</h5>);
    }

    return (
        props.schedules.map((item, i) => {
            return (
                <div key={i} className="e3-schedule-item" onClick={toVideo}>
                    <figure className="e3-schedule-img">
                        <img src={isURL(item.imageUrl) ? item.imageUrl : Schedule1} alt="loading.." />
                        <figcaption className="e3-schedule-next">Next</figcaption>
                    </figure>
                    <div className="e3-schedule-content">
                        <p className="e3-schdule-title">{item.description}</p>
                        <GameTag tagData={item} />
                        <small className="e3-schedule-time">{item.scheduleTime}</small>
                    </div>
                </div>
            )
        })

    );
}