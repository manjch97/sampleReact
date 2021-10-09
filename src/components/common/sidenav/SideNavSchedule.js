import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import { GetSpinner } from "../../../helper/CommonHelper";
import { ScheduleItem } from '../ScheduleItem/ScheduleItem';
import { SideNavTitle } from './SideNavTitle';

export const SideNavSchedule = (props) => {

    const scheduleData = props.data;
    if(scheduleData.loading === true){
        return (<GetSpinner/>);
    }

    return (
        <Col className="e3-schedule-container">
            <SideNavTitle text='Your Schedule' link='/customer/schedules'/>
            <ScheduleItem schedules={scheduleData.data} />
        </Col>
    );
}