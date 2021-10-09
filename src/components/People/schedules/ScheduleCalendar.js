import React, { Component } from "react";
import { Calendar } from 'react-big-calendar'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./ScheduleCalendar.css";
import {Row, Col, Image, Button} from "react-bootstrap";
import leftArrow from "../../../assets/img/booths/events/LeftArrow.png";
import rightArrow from "../../../assets/img/booths/events/RightArrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export let navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
}

class CustomToolbar extends Component {
    navigate = action => {
        this.props.onNavigate(action);
    }
    
    render() {
        let { label } = this.props
        return(
            <div className="rbc-toolbar">
                <div className="eventflexContanier my-3 py-3">
                    <span className="rbc-btn-group center">
                        <button type="button" className="event-leftarrow" onClick={() => {this.navigate(navigate.PREVIOUS, this.props.date)}} style = {{border:0, paddingRight: "1px"}}><Image src={leftArrow} alt="previous"/></button>
                        <span className="eventdatelabel rbc-toolbar-label">{label}</span>
                        <button type="button" className="event-rightarrow" onClick={() => {this.navigate(navigate.NEXT, this.props.date)}} style = {{border:0, paddingLeft: "1px"}}><Image src={rightArrow} alt="next"/></button>
                    </span>
                    
                    {/* <span  tabIndex="0" className="eventpush">
                        <Button  variant="success" className='e3-button event-secondary mr-1' onClick={() => this.props.onAddScheduleButtonClick()}>
                            <FontAwesomeIcon icon={faPlus} /> Add Schedule
                        </Button>
                    </span> */}
                </div>
            </div>
        )
    }
}

const CustomSchedule = (event) => { 
    console.log("Custom Schedule: ", event);
    return ( 
        <>
            <Row>
                {event.event.resource  && <Col><Image src={event.event.resource}/></Col>}
                <Col><span> <strong> {event.title} </strong> </span> </Col>
            </Row>
        </>
    ) 
  }

const ScheduleCalendar = props => {

    return (
        <Calendar
            selectable
            formats={{dayHeaderFormat: props.dayFormat}}
            showAllEvents={false}
            localizer={props.localizer}
            style={{ height: 1800}}
            toolbar={true}
            events={props.scheduleCalendar.schedules}
            step={60}
            timeslots={1}
            views={['day']}
            view="day"
            onView={() => {}}
            date={props.scheduleCalendar.date}
            defaultDate={moment().toDate()}
            onSelectSlot={props.handleSelect}
            onSelectSchedule={schedule => props.onSelectScheduleHandler(schedule)}
            onNavigate={date => props.onNavigateHandler(date)}
            components = {{toolbar : (customProps) => (<CustomToolbar {...customProps} 
                                                        onAddScheduleButtonClick={props.onAddScheduleButtonClick}/>), 
                         event: CustomSchedule}}
            //dayLayoutAlgorithm={'no-overlap'}
        />
    );
}

export default ScheduleCalendar;

