import React from "react";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Row, Col, Button, Image } from 'react-bootstrap';
import close from "../../../assets/img/booths/Vector9.svg";
import { EVENT_DATE_FORMAT } from "../../../constants/CommonConstants";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

export const AddSchedule = props => {
    
    const initSchedule = {
         timeSlotFrom: props.currentSelectedData.startDate,
         timeSlotTo: props.calculateEndDateMinTime(props.currentSelectedData.endDate, props.currentSelectedData.startDate),
         minStartTime: props.calculateStartDateMinTime(new Date()),
         minEndTime: props.calculateEndDateMinTime(new Date(), new Date()),
    };

    const changeHandler = (event) => {
        event.preventDefault();
        setFormData({
          ...scheduleFormData,
          [event.target.id]: event.target.value
        });
    };

    const startDateHandler=(date) =>{
        setFormData({
            ...scheduleFormData,
            timeSlotFrom: date,
            timeSlotTo: props.calculateEndDateMinTime(date, date),
            minStartTime: props.calculateStartDateMinTime(date),
            minEndTime: props.calculateEndDateMinTime(date, date)
          });
    }

    const endDateHandler=(date) =>{
        setFormData({
            ...scheduleFormData,
            timeSlotTo: date,
          });
    }

    const [scheduleFormData, setFormData] = useState(initSchedule);

    return (
        
        <Modal size="md" className="confirmationPopup" keyboard={true} show={props.show}>
          <Modal.Body className="p-3">
            <Image onClick={() => props.handleModalShowHide()} className='fl-right' src={close} alt="Logo"></Image>
            <Row>
              <Col tabIndex="0" xl={12} xs={12} className="text-center">
                <h5   className="title">ADD SCHEDULE</h5>
                <span className="sub-title" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
              </Col>
            </Row>
            <div className="my-2 pt-3"></div>
            <Row>
              <Col xl={12} xs={12}>
                <Form.Group controlId="scheduleName" className="input-field">
                  <Form.Control
                    type="text"
                    placeholder="Schedule name"
                    value={scheduleFormData.scheduleName}
                    onChange={changeHandler}
                  />
                </Form.Group>
              </Col>
              <Col xl={12} xs={12}>
                <Form.Group controlId="company" className="input-field">
                  <Form.Control
                    type="text"
                    placeholder="Company"
                    value={scheduleFormData.company}
                    onChange={changeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xl={12} xs={12}>
                <Form.Group controlId="timeSlotFrom" className="input-field eventdatefld">
                    <Form.Label>From:</Form.Label>
                    <DatePicker
                        selected={new Date(scheduleFormData.timeSlotFrom)}
                        onChange={date => startDateHandler(date)}
                        minDate={moment().toDate()}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        minTime={scheduleFormData.minStartTime}
                        maxTime={moment().endOf('day').toDate()}
                        dateFormat={EVENT_DATE_FORMAT}
                        className="form-control"
                    />
                </Form.Group>
              </Col>
              <Col xl={12} xs={12}>
                <Form.Group controlId="timeSlotTo" className="input-field eventdatefld">
                    <Form.Label>To:</Form.Label>
                    <DatePicker
                        onFocus={e => e.target.blur()}
                        selected={new Date(scheduleFormData.timeSlotTo)}
                        onChange={date => endDateHandler(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        minTime={scheduleFormData.minEndTime}
                        maxTime={moment().endOf('day').toDate()}
                        dateFormat={EVENT_DATE_FORMAT}
                        className="form-control"
                    />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xl={12} xs={12}>
                <Form.Group controlId="notes" className="input-field">
                  <Form.Control
                    type="textarea"
                    placeholder="Notes"
                    value={scheduleFormData.notes}
                    onChange={changeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="my-2 pt-3"></div>
            <Row>
              <Col className="text-center PrimaryBtn">
                <Button variant="primary" className="my-2" onClick={() => props.handleAddSchedule(scheduleFormData)}>Submit</Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
    )
}