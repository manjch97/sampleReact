import React, { Component } from "react";
import { connect } from "react-redux";
import { SideNavTopVideo } from './SideNavTopVideo'
import { SideNavSchedule } from './SideNavSchedule'
import { SideNavActivePeople } from './SideNavActivePeople'
import { withRouter } from "react-router-dom";
import {getCustomerSideVideosAction,getCustomerSchedulesAction, getCustomerActivePeopleAction} from '../../../redux/actions/sideNavAction'

import './SideNav.scss';

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
  videos : state.sidenav.videos,
  schedule: state.sidenav.schedule,
  activePeople: state.sidenav.activePeople,
});


const mapDispatchToProps = (dispatch) => ({
  onGetCustomerVideos: () => {
    return getCustomerSideVideosAction({ })(dispatch);
  },
  onGetCustomerSchedules: () => {
    return getCustomerSchedulesAction({ })(dispatch);
  },
  onGetGlobalActivePeople: () => {
    return getCustomerActivePeopleAction({ })(dispatch);
  },
});

class SideNavMain extends Component {

  state = {
    "videos":this.props?.videos,
    "schedule":this.props?.schedule,
    "activePeople":this.props?.activePeople
  }

  componentDidMount() {
    // Load all side nav data
    let videos = this.state.videos; 
    if(this.state.videos?.data && this.state.videos.data?.length <= 0){
      videos = this.props.onGetCustomerVideos();
    }
    let schedules = this.state.schedules;
    if(this.state.schedule?.data && this.state.schedule.data?.length <= 0){
      schedules = this.props.onGetCustomerSchedules();
    }
    let activePeople = this.state.activePeople; 
    if(this.state.videos?.data && this.state.videos.data?.length <= 0){
      activePeople = this.props.onGetGlobalActivePeople();
    }

    this.setState({
      videos : {
        loading: false,
        data: videos?videos:[]
      },
      schedule: {
        loading: false,
        data: schedules?schedules:[]
      },
      activePeople: {
        loading: false,
        data: activePeople?activePeople:[]
      }
    });
  }

  render() {
    return (
      <nav className="e3-sidenav desktop-view">
        <SideNavTopVideo props={this.props} data={this.props?.videos}/>
        <hr className="e3-h-divider d-none d-md-block" />
        <SideNavSchedule props={this.props} data={this.props?.schedule}/>
        <hr className="e3-h-divider d-none d-md-block" />
        <SideNavActivePeople props={this.props} data={this.props?.activePeople}/>
      </nav>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideNavMain));
