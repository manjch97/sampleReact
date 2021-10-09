import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WebHeader } from "../../../helper/CommonHelper";
import ProfileSkin from "./ProfileSkin";
import './skins.scss';
const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class Skins extends Component {

    render(){
            
        return (
            <React.Fragment>
                <WebHeader props={this.props}/>
                <main className="e3-main-wrapper skin">
                   <ProfileSkin/>
                </main>
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Skins));