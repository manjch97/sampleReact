import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WebHeader } from "../../helper/CommonHelper";
import SideNavMain from "../common/sidenav/SideNavMain";
import {Col,Row} from 'react-bootstrap';
import RecommendedPeople from "../People/recommendations/RecommendedPeople";
import PeopleActive from "./PeopleActive";
import {PopulateMetaTags} from "../../helper/CommonHelper";
const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class Active extends Component {
    state = {
    
  };

     componentDidMount() {
        
    }

    render(){
            
        return (
            <React.Fragment>
               <PopulateMetaTags  title={"E3 Expo Event-Active People"} description={"E3 Expo Event-Active People"}/>
                <WebHeader props={this.props}/>
                <main className="e3-main-wrapper">
                   <SideNavMain/>
                   <section className="e3-content-wrapper">
                     <div className="containerspace">
                       <Row>
                       <Col xl={8}>
                       <PeopleActive/>
                       
                       </Col>
                       <Col xl={4} className="py-sm-3">
                         <RecommendedPeople/>
                       </Col>
                       </Row>
                      </div>
                   </section>
                </main>
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Active));