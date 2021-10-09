import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WebHeader } from "../../../helper/CommonHelper";
import SideNavMain from "../../common/sidenav/SideNavMain";
import {Col,Row} from 'react-bootstrap';
import UserProfileHeader from "./UserProfileHeader";
import {UserProfileTabs} from './UserProfileTabs'
import {PopulateMetaTags} from "../../../helper/CommonHelper";

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class UserProfile extends Component {
      state = {
  
  };
     componentDidMount() {
      
    }

    render(){
            
        return (
            <React.Fragment>
              <PopulateMetaTags  title={"E3 Expo Event-User Profile"} description={"E3 Expo Event-User Profile"}/>
                <WebHeader props={this.props}/>
                <main className="e3-main-wrapper">
                   <SideNavMain/>
                   <section className="e3-content-wrapper">
                    <div className="containerspace">
                      <UserProfileHeader props={this.props}></UserProfileHeader>
                      <UserProfileTabs/>
                    </div>
                   </section>
                </main>
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UserProfile));