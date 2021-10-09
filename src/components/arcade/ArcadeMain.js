import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WebHeader } from "../../helper/CommonHelper";
import {ArcadeTabsMain} from './ArcadeTabsMain'
import { ArcadeSideBar } from "./ArcadeSideBar";

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  class ArcadeMain extends Component {

    state = {

    }

    componentDidMount() {

    }

    BoothLayout = ()=>{
        
    }

    render(){
            
        return (
            <React.Fragment>
                <WebHeader props={this.props}/>
                <SideNavMain/>
                <ArcadeTabsMain/>
                <ArcadeSideBar/>
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ArcadeMain));
