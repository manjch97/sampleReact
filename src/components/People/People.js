import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WebHeader } from "../../helper/CommonHelper";
import SideNavMain from "../common/sidenav/SideNavMain";
import PeopleNetwork from './PeopleNetwork';
import PeopleInfo from './PeopleInfo';
import {Col,Row} from 'react-bootstrap';
import RecommendedPeople from './RecommendedPeople'
const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class People extends Component {

    render(){
            
        return (
            <React.Fragment>
                <WebHeader props={this.props}/>
                <main className="e3-main-wrapper">
                   <SideNavMain/>
                   <section className="e3-content-wrapper">
                       <div className="containerspace">
                       <Row>
                       <Col xl={8}>
                       <PeopleNetwork/>
                       <PeopleInfo/>
                       </Col>
                       <Col xl={4}>
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
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(People));