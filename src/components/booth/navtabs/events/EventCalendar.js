import React, { Component } from "react";
import { Calendar } from 'react-big-calendar'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./EventCalendar.css";
import {Row, Col, Image, Button} from "react-bootstrap";
import leftArrow from "../../../../assets/img/booths/events/LeftArrow.png";
import rightArrow from "../../../../assets/img/booths/events/RightArrow.png";
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
                <div className="eventflexContanier">
                    <span className="rbc-btn-group center">
                        <button type="button" className="event-leftarrow" onClick={() => {this.navigate(navigate.PREVIOUS, this.props.date)}} style = {{border:0, paddingRight: "1px"}}><Image src={leftArrow} alt="previous"/></button>
                        <span className="eventdatelabel rbc-toolbar-label">{label}</span>
                        <button type="button" className="event-rightarrow" onClick={() => {this.navigate(navigate.NEXT, this.props.date)}} style = {{border:0, paddingLeft: "1px"}}><Image src={rightArrow} alt="next"/></button>
                    </span>
                    <span className="eventpush">
                        <Button tabIndex="0" variant="primary" className='e3-button evnt-primary mr-1'>Import CSV File</Button>
                        <Button tabIndex="1" variant="success" className='e3-button event-secondary mr-1' onClick={() => this.props.onAddEventButtonClick()}>
                            <FontAwesomeIcon icon={faPlus} /> Add Event
                        </Button>
                    </span>
                </div>
            </div>
        )
    }
}

const CustomEvent = (event) => { 
    return ( 
        <>
            <Row>
                {event.event.resource  && <Col><Image src={event.event.resource}/></Col>}
                <Col><span> <strong> {event.title} </strong> </span> </Col>
            </Row>
        </>
    ) 
  }

const EventCalendar = props => {

    return (
        <Calendar
            selectable
            formats={{dayHeaderFormat: props.dayFormat}}
            showAllEvents={false}
            localizer={props.localizer}
            style={{ height: 1800}}
            toolbar={true}
            events={props.eventCalendar.events}
            step={60}
            timeslots={1}
            views={['day']}
            view="day"
            onView={() => {}}
            date={props.eventCalendar.date}
            defaultDate={moment().toDate()}
            onSelectSlot={props.handleSelect}
            onSelectEvent={event => props.onSelectEventHandler(event)}
            onNavigate={date => props.onNavigateHandler(date)}
            components = {{toolbar : (customProps) => (<CustomToolbar {...customProps} 
                                                        onAddEventButtonClick={props.onAddEventButtonClick}/>), 
                         event: CustomEvent}}
            //dayLayoutAlgorithm={'no-overlap'}
        />
    );
}

export default EventCalendar;

