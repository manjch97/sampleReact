import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WebHeader } from "../../../helper/CommonHelper";
import SideNavMain from "../../common/sidenav/SideNavMain";
import {Col,Row} from 'react-bootstrap';
import RecommendedPeople from "../recommendations/RecommendedPeople";
import FollowingPeople from "./FollowingPeople";
import {PopulateMetaTags} from "../../../helper/CommonHelper";

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
const mapDispatchToProps = (dispatch) => ({});

class Following extends Component {
  state={
  
  }
  componentDidMount(){
   
  }

  render(){
      return (
          <React.Fragment>
             <PopulateMetaTags  title={"E3 Expo Event-Following"} description={"E3 Expo Event-Following"}/>
              <WebHeader props={this.props}/>
              <main className="e3-main-wrapper">
                  <SideNavMain/>
                  <section className="e3-content-wrapper">
                    <div className="containerspace">
                      <Row>
                        <Col xl={8}><FollowingPeople/></Col>
                        <Col xl={4} className="py-sm-3"><RecommendedPeople/></Col>
                      </Row>
                    </div>
                  </section>
              </main>
          </React.Fragment>
      );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Following));