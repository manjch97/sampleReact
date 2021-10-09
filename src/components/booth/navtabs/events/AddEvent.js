import React from "react";
import { useState,useRef } from "react";
import { Modal, Form } from "react-bootstrap";
import { Row, Col, Button, Image } from 'react-bootstrap';
import close from "../../../../assets/img/booths/Vector9.svg";
import { EVENT_DATE_FORMAT } from "../../../../constants/CommonConstants";
import uploadicon from "../../../../assets/img/events/uploadicon.svg";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import file from "../../../../assets/img/upload/file.svg";
import "react-datepicker/dist/react-datepicker.css";
import { OtherGameDemos } from './OtherGameDemos'
export const AddEvent = (props) => {
  const [modalStatus, setSignupStatus] = useState(false);

  const onHide = () => {
    setSignupStatus(!modalStatus);
    props.handleModalShowHide;

  }

  let CheckboxTitle = "This is an available slot";
  let eventCheckbox = false;
    const initEvent = {
        eventName: "",
        company: "",
        notes:"",
        fileInput:null,
        mediaCheckbox:false,
         timeSlotFrom: props.currentSelectedData.startDate,
         timeSlotTo: props.calculateEndDateMinTime(props.currentSelectedData.endDate, props.currentSelectedData.startDate),
         minStartTime: props.calculateStartDateMinTime(new Date()),
         minEndTime: props.calculateEndDateMinTime(new Date(), new Date()),

        // notes: undefined
    };

    const changeHandler = (event) => {
        event.preventDefault();
        setFormData({
          ...eventFormData,
          [event.target.id]: event.target.value
        });
    };

    const startDateHandler=(date) =>{
      if(date === null){
        return false;
      }
        setFormData({
            ...eventFormData,
            timeSlotFrom: date,
            timeSlotTo: props.calculateEndDateMinTime(date, date),
            minStartTime: props.calculateStartDateMinTime(date),
            minEndTime: props.calculateEndDateMinTime(date, date)
          });
    }

    const endDateHandler=(date) =>{
      if(date === null){
        return false;
      }
        setFormData({
            ...eventFormData,
            timeSlotTo: date,
          });
    }
    const availableSlotChecked = (e) =>{
      eventCheckbox = !eventCheckbox;

    }
    const isSlotsAvailable = (event) =>{
      setFormData({
        ...eventFormData,
        [event.target.id]: !eventFormData.mediaCheckbox
      });
    }

    const [eventFormData, setFormData] = useState(initEvent);
    const hiddenFileInput = React.useRef(null);
    
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      setFormData({
        ...eventFormData,
        [event.target.id]: fileUploaded
      });
    };

    return (
      <React.Fragment>
        <Modal size="lg" className="confirmationPopup" keyboard={true} show={props.show} onHide={props.handleModalShowHide}>
            <Modal.Header className="font-weight-light border-0 py-3" closeButton />
          <Modal.Body className="pt-0"> 
            <Col className="px-md-4 pb-4 pt-4">
            <Row>
              <Col xl={12} xs={12} className="text-center">
                <h5 className="title">ADD EVENT</h5>
                <span className="sub-title text-md font-weight-400" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
              </Col>
            </Row>
            <div className="my-2 pt-3"></div>
            <Row>
              <Col md={6}>
                <Form.Group controlId="eventName" className="input-field">
                {props.errors.eventName && (
                    <p className="text-danger_forms" role="alert"  >{props.errors.eventName}</p>
                )}
                  <Form.Control
                    type="text"
                    placeholder="Event Name *"
                    value={eventFormData.eventName}
                    onChange={changeHandler}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-4">
                <Form.Group controlId="fileInput" className="input-field position-relative datepickerIcon">
                {props.errors.fileInput && (
                    <p className="text-danger_forms" role="alert"  >{props.errors.fileInput}</p>
                )}
                <div className="border-gray position-relative custom-top">
                {eventFormData.fileInput === null || eventFormData.fileInput === undefined ?
                  <small className="text-16 gray3">Image</small>:
                 <div className="text-16 gray3 d-flex justify-content-start">
                   <img src={file}  alt="file-loaded" className="pr-1"/>
                   <span className="image_name">{eventFormData.fileInput.name}</span></div> 
                }
                 
                </div> 
                <div className="position-absolute uploadicon " onClick={handleClick}>
                  <img src={uploadicon} alt="upload icon" className="uploadimg"/>
                  <small className="text-10 text-grey4">Max-size: 2mb</small>
                </div>
                   
                
                <Form.Control
                  type="file"
                  placeholder="Image"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  className="form-control"
                  style={{display:'none'}}
                /> 
                 
                </Form.Group>
              </Col>
              <Col xl={12} xs={12}>
                <Form.Group controlId="company" className="input-field">
                  {props.errors.company && (
                    <p className="text-danger_forms" role="alert" >{props.errors.company}</p>
                  )}
                  <Form.Control
                    type="text"
                    placeholder="Company"
                    value={eventFormData.company}
                    onChange={changeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="timeSlotFrom" className="input-field eventdatefld datepickerIcon">
                    <Form.Label>From</Form.Label>
                    <DatePicker
                        selected={new Date(eventFormData.timeSlotFrom)}
                        onChange={date => startDateHandler(date)}
                        minDate={moment().toDate()}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        minTime={eventFormData.minStartTime}
                        maxTime={moment().endOf('day').toDate()}
                        placeholderText = "Event Timing"
                        dateFormat={EVENT_DATE_FORMAT}
                        className="form-control dateicon"
                    />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="timeSlotTo" className="input-field eventdatefld datepickerIcon">
                    <Form.Label>To</Form.Label>
                    <DatePicker
                        onFocus={e => e.target.blur()}
                        selected={new Date(eventFormData.timeSlotTo)}
                        onChange={date => endDateHandler(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        minTime={eventFormData.minEndTime}
                        maxTime={moment().endOf('day').toDate()}
                        // placeholderText = "mm / dd / yyyy"
                        dateFormat={EVENT_DATE_FORMAT}
                        className="form-control timeicon"
                    />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xl={12} xs={12}>
                <Form.Group controlId="notes" className="input-field">
                {props.errors.notes && (
                    <p className="text-danger_forms" role="alert" >{props.errors.notes}</p>
                  )}
                  <Form.Control
                    type="textarea"
                    placeholder="Notes"
                    value={eventFormData.notes}
                    onChange={changeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                  {/* <Form.Group controlId="mediaCheckbox" className="d-flex justify-content-start align-items-center">
                      <Form.Check type="checkbox"   className="pr-0 mr-0 checkbox_label_left_eventpopup" value={eventFormData.mediaCheckbox} label={CheckboxTitle} onChange={changeHandler}
                    checked={eventFormData.mediaCheckbox}/>
                  </Form.Group> */}

                  <Form.Group controlId="mediaCheckbox" className="d-flex justify-content-start align-items-center">

                    <Form.Check inline  aria-label="I agree to the terms of services" className="pr-0 mr-0 checkbox_label_left_eventpopup" type="checkbox" value={eventFormData.mediaCheckbox} label={CheckboxTitle}
                      onChange={isSlotsAvailable}
                      checked={eventFormData.mediaCheckbox} />

                  </Form.Group>
                  
              </Col>
            </Row>
            <div className="my-2 pt-3"></div>
            <Row>
              <Col className="text-right PrimaryBtn sm-eventpopup-btn p-sm-1 p-lg-3 p-md-2" xs={6}>
                <Button variant="primary" className="my-2 mx-xs-1 " onClick={() => props.handleAddEvent(eventFormData)}>Submit</Button>
              </Col>
              <Col className="text-left BlackBtn sm-eventpopup-btn p-sm-1 p-lg-3 p-md-2" xs={6}>
                <Button variant="Black" className="my-2 mx-xs-1 " onClick={props.handleModalShowHide}>Delete</Button>
              </Col>
            </Row>
          </Col>
            <Button onClick={onHide}>Click</Button>
          </Modal.Body>
        </Modal>
        <OtherGameDemos show={modalStatus} onHide={onHide}/>
        </React.Fragment>
    )
}