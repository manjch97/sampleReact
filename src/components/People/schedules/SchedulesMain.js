import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WebHeader } from "../../../helper/CommonHelper";
import Schedules from './Schedules';
import { Container } from "react-bootstrap";
import {PopulateMetaTags} from "../../../helper/CommonHelper";
const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  class SchedulesMain extends Component {
      state={
        
      }
      componentDidMount(){
        
      }

    render(){
            
        return (
            <React.Fragment>
                <PopulateMetaTags  title={"E3 Expo Event-Schedule"} description={"E3 Expo Event-Schedule"}/>
                <WebHeader props={this.props}/>
                <Container className="my-5 py-5">
                    <Schedules />
                </Container>
                
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SchedulesMain));
