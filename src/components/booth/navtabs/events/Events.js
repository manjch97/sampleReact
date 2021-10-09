import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col, Button } from 'react-bootstrap';
import { BellFill } from "react-bootstrap-icons";
import { BoothDetails } from '../../../../services/Api';
import { AddEvent } from "./AddEvent";
import {validateData} from '../../../../components/account/commonValidation';
import { EditEvent } from "./EditEvent";
import EventCalendar from "./EventCalendar";
import events from "./EventList";
import moment from "moment";
import { momentLocalizer } from 'react-big-calendar'
import { EVENT_TITLE_DATE_FORMAT } from "../../../../constants/CommonConstants";
import { fireClickEvent } from "../../../../helper/GTMHelper";
import {
  FILE_UPLOAD_EVENT,FILE_UPLOAD_MAX_SIZE
} from "../../../../constants/CommonConstants";
const localizer = momentLocalizer(moment);

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

class Events extends Component {

  state = {
    boothId: this.props.match?.params?.boothId,
    currentSelectedData: {},
    show: false,
    showEditEvent: false,
    eventCalendar: {
      view: "day",
      date: null,
      width: 500,
      events
    },
    loading: false,
    errors: {},
  }

  componentDidMount = () => {
    this.getBoothEvents(moment(new Date()).format("MMDDYYYY"));
  }

  getBoothEvents = (selectedDate) => {
    this.setState({ loading: true });
    BoothDetails.getBoothEvents(this.state.boothId, selectedDate).then(response => {
      const eventsList = [];
      response.map(event => {
        const startDate = moment(event.startDate, "MMDDYYYY").toDate();
        const startTime = event.startTime?.split(":");

        const endDate = moment(event.endDate, "MMDDYYYY").toDate();
        const endTime = event.endTime?.split(":");

        if (event.image) {
          eventsList.push({
            id: event.eventId,
            title: event.eventName,
            start: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startTime[0], startTime[1], startTime[2]),
            end: new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endTime[0], endTime[1], endTime[2]),
            desc: event.notes,
            resource: event.image,
            company: event.place
          });
        } else {
          eventsList.push({
            id: event.eventId,
            title: event.eventName,
            start: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startTime[0], startTime[1], startTime[2]),
            end: new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endTime[0], endTime[1], endTime[2]),
            desc: event.notes,
            company: event.place
          });
        }
      });
      this.setState((prevState) => ({
        eventCalendar: {
          ...this.state.eventCalendar,
          events: eventsList
        },
        loading: false
      }));
    }).catch(err => {
      this.setState({ loading: false });
      console.log("Error occured while getting the Booth Events for the date ", selectedDate, err)
    });
  };

  convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    })
  };

  constructEventPayload = async (event, id) => {
    const selectedStartDate = new Date(event.timeSlotFrom);
    const formattedStartDate = moment(selectedStartDate).format("MMDDYYYY");
    const formattedStartTime = moment(selectedStartDate).format("HH:mm:ss");
    const selectedEndDate = new Date(event.timeSlotTo);
    const formattedEndDate = moment(selectedEndDate).format("MMDDYYYY");
    const formattedEndTime = moment(selectedEndDate).format("HH:mm:ss");

    let imageContent = null;
    if (event.image) {
      imageContent = await this.convertToBase64(event.image);
    }
    

    const payload = {
      eventId: id ? id : null,
      eventName: event.eventName,
      startDate: formattedStartDate,
      startTime: formattedStartTime,
      endDate: formattedEndDate,
      endTime: formattedEndTime,
      place: event.company,
      image: imageContent,
      notes: event.notes
    };
    return payload;
  }
  isValidFile = (file, count) => {
    let fileType = FILE_UPLOAD_EVENT;
    if (fileType.every((type) => file.type !== type)) {
      return "Invalid File Format, png and jpeg are allowed";
    }
    if (file.size > FILE_UPLOAD_MAX_SIZE) {
      return (
        "File is greater than allowed size - " +
        FILE_UPLOAD_MAX_SIZE / (1000 * 1000) +
        "MB"
      );
    }
    return undefined;
  };

  createBoothEvent =async event => {
    if (event.fileInput) {
      const typeError = this.isValidFile(event.fileInput, "EventfileUpload");
      if (typeError) {
        this.setState((prevState) => ({
          errors: { ...prevState.errors, fileInput: typeError },
        }));
        return;
      }
    }
    event.image = event.fileInput;
    this.setState({ loading: true });
    const payload = await this.constructEventPayload(event, null);
      BoothDetails.createBoothEvent(this.state.boothId, payload).then(response => {
        this.getBoothEvents(payload.startDate);
        this.setState({ loading: false });
        this.handleModalShowHide();
      }).catch(err => {
        this.setState({ loading: false });
        console.log("Error occured while creating the Booth Event: ", event, err)
      });
   
  };

  updateBoothEvent = async (event) => {
    if (event.fileInput) {
      const typeError = this.isValidFile(event.fileInput, "EventfileUpload");
      if (typeError) {
        this.setState((prevState) => ({
          errors: { ...prevState.errors, fileInput: typeError },
        }));
        return;
      }
    }
    this.setState({ loading: true });
    const payload = await this.constructEventPayload(event, event.id);
    console.log("About to call updateBoothEvent with payload: ", payload);
    BoothDetails.updateBoothEvent(this.state.boothId, payload).then(response => {
      this.getBoothEvents(payload.startDate);
      this.setState({ loading: false });
      this.handleEditEventShowHide();
    }).catch(err => {
      this.setState({ loading: false });
      console.log("Error occured while updating the Booth Event: ", event, err)
    });
  };

  calculateStartDateMinTime = date => {
    let isToday = moment(date).isSame(moment(), 'day');
    if (isToday) {
      // let nowAddOneHour = moment(new Date()).add({hours: 1}).toDate();
      return moment(new Date()).toDate();
    }
    return moment().startOf('day').toDate();
  }

  calculateEndDateMinTime = (endDate, startDate) => {
    //return moment(date).add({hours: 1}).toDate(); 
    let isSameHour = moment(endDate).isSame(moment(startDate), 'hour');
    if (isSameHour) {
      return moment(endDate).add({ minutes: 15 }).toDate();
    }
    else {
      return moment(endDate).toDate();
    }
  }

  handleModalShowHide = () => {
    const eventname = this.state.show ? "booth_events_addevent_hidemodalbtn_click" : "booth_events_addeventbtn_click";
    fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, eventname, { userId: this.props.currentUser?.id });
    this.setState({
      show: !this.state.show
    })
  }
  handleEditEventShowHide = () => {
    const eventname = this.state.show ? "booth_events_editevent_hidemodalbtn_click" : "booth_events_editeventbtn_click";
    fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, eventname, { userId: this.props.currentUser?.id });
    this.setState({
      showEditEvent: !this.state.showEditEvent
    })
  }

  openAddEvent = (currentSelectedData) => {
    this.setState({
      currentSelectedData: currentSelectedData
    })
    this.handleModalShowHide();
  }
  openEditEvent = (currentSelectedData) => {
    this.setState({
      currentSelectedData: currentSelectedData
    })
    this.handleEditEventShowHide();
  }

  onAddEventButtonClick = () => {
    this.setState({
      currentSelectedData: {
        startDate: new Date(),
        endDate: new Date()
      }
    })
    this.handleModalShowHide();
  }

  handleAddEvent = (formData) => {
    this.validateInputs(formData,"add");
    
  }
  handleEditEvent = (formData) => {
    this.validateInputs(formData,"edit");
    
    
  }
  validateInputs = (formData,data) =>{
    let errors = validateData(formData);
    if (Object.keys(errors).length) {
      this.setState({ errors: errors,eventAutoFocus: true });
      return;
    } else {
      this.setState({ errors: {} });
    }
    if(data==="add"){
      fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_events_addevent_submitbtn_click", { userId: this.props.currentUser?.id });
      this.createBoothEvent(formData);
    }
    else{
      fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_events_editevent_submitbtn_click", { userId: this.props.currentUser?.id });
      this.updateBoothEvent(formData);
    }
   
    
  }

  onSelectEventHandler = (event) => {
    this.setState({
      currentSelectedData: {
        id: event.id,
        title: event.title,
        company: event.company,
        start: event.start,
        end: event.end,
        notes: event.desc,
        resource:event.resource
      }
    })
    this.handleEditEventShowHide();
  }

  onNavigateHandler = (date) => {
    console.log("onNavigateHandler called", date);
    const selectedDate = new Date(date);
    const formattedDate = moment(selectedDate).format("MMDDYYYY");
    this.getBoothEvents(formattedDate);

    this.setState({
      eventCalendar: {
        ...this.state.eventCalendar,
        date
      }
    });
  };

  handleSelect = ({ start, end }) => {
    this.openAddEvent({ startDate: start, endDate: end });
  }


  showAllRequest = () => {
    fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_showallrequest_click", { userId: this.props.currentUser?.id });
    this.props.history.push("/booths/" + this.state.boothId + "/allrequests");
  }
  dayFormat = (date, culture, localizer) => localizer.format(date, EVENT_TITLE_DATE_FORMAT, culture);

  render() {

    return (
      <React.Fragment>
        <div className="eventrequest">
          <Row className="requestflexrow">
            {/* <Col><h4 className='e3-tab-title'>Events</h4></Col> */}
            <Col className="flexcol">
              <Button variant="dark" className='e3-button d-inline-block' onClick={this.showAllRequest} size="sm">
                <div className="d-inline-block">
                  <div className="bell mr-2 pr-1"><div>12</div><BellFill /></div>
                </div>
              Show all Requests
           </Button>
            </Col>
            <Col className='text-right'>

              {/* <Button variant="primary" className='e3-button mr-1'>Import CSV File</Button>
          <Button variant="success" className='e3-button mr-1' onClick={() => this.onAddEventButtonClick()}>
            <FontAwesomeIcon icon={faPlus} /> Add Event
              </Button> */}
            </Col>
          </Row>
        </div>

        {
          this.state.show &&
          <AddEvent show={this.state.show} errors={this.state.errors}
            handleModalShowHide={this.handleModalShowHide}
            handleAddEvent={this.handleAddEvent}
            currentSelectedData={this.state.currentSelectedData}
            calculateStartDateMinTime={this.calculateStartDateMinTime}
            calculateEndDateMinTime={this.calculateEndDateMinTime}
          />
        }
        {
          this.state.showEditEvent &&
          <EditEvent show={this.state.showEditEvent} errors={this.state.errors}
            handleEditEventShowHide={this.handleEditEventShowHide}
            handleEditEvent={this.handleEditEvent}
            currentSelectedData={this.state.currentSelectedData}
            calculateStartDateMinTime={this.calculateStartDateMinTime}
            calculateEndDateMinTime={this.calculateEndDateMinTime}
          />
        }

        <EventCalendar props={this.props}
          handleSelect={this.handleSelect}
          onNavigateHandler={this.onNavigateHandler}
          eventCalendar={this.state.eventCalendar}
          dayFormat={this.dayFormat}
          onAddEventButtonClick={this.onAddEventButtonClick}
          onSelectEventHandler={this.onSelectEventHandler}
          localizer={localizer} />

      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Events));
