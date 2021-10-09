import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Customer } from '../../../services/Api';
import { AddSchedule } from "./AddSchedule";
import { EditSchedule } from "./EditSchedule";
import ScheduleCalendar from "./ScheduleCalendar";
import moment from "moment";
import { momentLocalizer } from 'react-big-calendar'
import { EVENT_TITLE_DATE_FORMAT } from "../../../constants/CommonConstants";

const localizer = momentLocalizer(moment);

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

class Schedules extends Component {

  state = {
    currentSelectedData: {},
    show: false,
    showEditSchedule: false,
    scheduleCalendar: {
      view: "day",
      date: null,
      width: 500,
      schedules: []
    },
    loading: false
  }

  componentDidMount=() => {
    this.getSchedules(moment(new Date()).format("MMDDYYYY"));
  }

  getSchedules = (selectedDate) => {
    this.setState({ loading: true });
    console.log("About to call getSchedules API with date ", selectedDate);
    Customer.getSchedules(selectedDate).then(response => {
      const schedulesList = [];
      response.map(schedule => {
         const startDate = moment(schedule.startDate, "MMDDYYYY").toDate();
         const startTime = schedule.startTime?.split(":");
         
         const endDate = moment(schedule.endDate, "MMDDYYYY").toDate();
         const endTime = schedule.endTime?.split(":");

         if(schedule.image){
            schedulesList.push({id: schedule.scheduleId, 
              title: schedule.scheduleName, 
              start: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startTime[0], startTime[1], startTime[2]), 
              end: new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endTime[0], endTime[1], endTime[2]),
              desc: schedule.notes,
              resource: schedule.image,
              company: schedule.place
            });
         }else{
            schedulesList.push({id: schedule.scheduleId, 
              title: schedule.scheduleName, 
              start: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startTime[0], startTime[1], startTime[2]), 
              end: new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endTime[0], endTime[1], endTime[2]),
              desc: schedule.notes,
              company: schedule.place
            });
        }
      });
      this.setState((prevState) => ({
        scheduleCalendar: {
          ...this.state.scheduleCalendar,
          schedules: schedulesList
        },
        loading: false
      }));
    }).catch(err => {
      this.setState({ loading: false });
      console.log("Error occured while getting the schedules for the date ", selectedDate, err)
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
    });
  };

  constructSchedulePayload = (schedule, id) => {
    const selectedStartDate = new Date(schedule.timeSlotFrom);
    const formattedStartDate = moment(selectedStartDate).format("MMDDYYYY");
    const formattedStartTime = moment(selectedStartDate).format("HH:mm:ss");
    const selectedEndDate = new Date(schedule.timeSlotTo);
    const formattedEndDate = moment(selectedEndDate).format("MMDDYYYY");
    const formattedEndTime = moment(selectedEndDate).format("HH:mm:ss");

    let imageContent = null;
    if(schedule.image){
       imageContent = this.convertToBase64(file);
    }

    const payload = {
      scheduleId: id ? id : null,
      scheduleName: schedule.scheduleName,
      startDate: formattedStartDate,
      startTime: formattedStartTime,
      endDate: formattedEndDate,
      endTime: formattedEndTime,
      place: schedule.company,
      image: imageContent,
      notes: schedule.notes
    };
    return payload;
  }

  createSchedule = schedule => {
    this.setState({ loading: true });
    const payload = this.constructSchedulePayload(schedule, null);
    console.log("About to call createSchedule with payload: ", payload);
    Customer.createSchedule(payload).then(response => {
        this.getSchedules(payload.startDate);
        this.setState({ loading: false });
    }).catch(err => {
      this.setState({ loading: false });
      console.log("Error occured while creating the Schedule: ", schedule, err)
    });
  };

  updateSchedule = async (schedule) => {
    this.setState({ loading: true });
    const payload = this.constructSchedulePayload(schedule, schedule.id);
    Customer.updateSchedule(payload).then(response => {
        this.getSchedules(payload.startDate);
        this.setState({ loading: false });
    }).catch(err => {
      this.setState({ loading: false });
      console.log("Error occured while updating the Schedule: ", schedule, err)
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
    if(isSameHour) {
      return moment(endDate).add({minutes: 15}).toDate(); 
    }
    else {
      return moment(endDate).toDate(); 
    }
  }

  handleModalShowHide=()=> {
    this.setState({
        show: !this.state.show
    })
  }
  handleEditScheduleShowHide=()=> {
    this.setState({
      showEditSchedule: !this.state.showEditSchedule
    })
  }

  openAddSchedule=(currentSelectedData) => {
    this.setState({
      currentSelectedData: currentSelectedData
    })
    this.handleModalShowHide();
  }
  openEditSchedule=(currentSelectedData) => {
    this.setState({
      currentSelectedData: currentSelectedData
    })
    this.handleEditScheduleShowHide();
  }

  onAddScheduleButtonClick=() => {
    this.setState({
      currentSelectedData: {
        startDate: new Date(),
        endDate: new Date()
      }
    })
    this.handleModalShowHide();
  }

  handleAddSchedule=(formData)=> {
    this.createSchedule(formData);
    this.handleModalShowHide();
  }
  handleEditSchedule=(formData)=> {
    this.updateSchedule(formData);
    this.handleEditScheduleShowHide();
  }

  onSelectScheduleHandler = (schedule) => {
    this.setState({
      currentSelectedData: {
         id: schedule.id,
         title: schedule.title,
         company: schedule.company,
         start: schedule.start,
         end: schedule.end,
         notes: schedule.desc
      }
    })
    this.handleEditScheduleShowHide();
  }

  onNavigateHandler = (date) => {
    console.log("onNavigateHandler called",date);
    const selectedDate = new Date(date);
    const formattedDate = moment(selectedDate).format("MMDDYYYY");
    this.getSchedules(formattedDate);

    this.setState({ 
      scheduleCalendar: {
        ...this.state.scheduleCalendar,
          date
      }
    });
  };

  handleSelect = ({ start, end }) => {
    this.openAddSchedule({startDate:start, endDate: end});  
  }

  dayFormat = (date, culture, localizer) => localizer.format(date, EVENT_TITLE_DATE_FORMAT, culture);
  
  render() {
    
    return (
      <React.Fragment>
        {
          this.state.show &&
          <AddSchedule show={this.state.show} 
                        handleModalShowHide={this.handleModalShowHide} 
                        handleAddSchedule={this.handleAddSchedule} 
                        currentSelectedData={this.state.currentSelectedData}
                        calculateStartDateMinTime = {this.calculateStartDateMinTime}
                        calculateEndDateMinTime = {this.calculateEndDateMinTime}
                        />
        }
        {
          this.state.showEditSchedule &&
          <EditSchedule show={this.state.showEditSchedule} 
                        handleEditScheduleShowHide={this.handleEditScheduleShowHide} 
                        handleEditSchedule={this.handleEditSchedule} 
                        currentSelectedData={this.state.currentSelectedData}
                        calculateStartDateMinTime = {this.calculateStartDateMinTime}
                        calculateEndDateMinTime = {this.calculateEndDateMinTime}
                        />
        }

        <ScheduleCalendar props={this.props} 
              handleSelect = {this.handleSelect} 
              onNavigateHandler = {this.onNavigateHandler} 
              scheduleCalendar = {this.state.scheduleCalendar} 
              dayFormat = {this.dayFormat}
              onAddScheduleButtonClick = {this.onAddScheduleButtonClick}
              onSelectScheduleHandler = {this.onSelectScheduleHandler}
              localizer = {localizer}/> 

      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Schedules));
