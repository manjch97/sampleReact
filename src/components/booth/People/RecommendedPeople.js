import React, { Component } from "react";
import { connect } from "react-redux";
import "./PeopleNetwork.scss";
import RecommendedPeopleList from './RecommendedPeopleList';
// import './People.scss'
const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class RecommendedPeople extends Component {

    render(){
            
        return (
            <React.Fragment>
                <div className="e3-booth-header">
                <p className="head1">RECOMMENDED PEOPLE</p>
                <RecommendedPeopleList/>
                </div>
               
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(RecommendedPeople);