import React, { Component } from "react";
import { connect } from "react-redux";
import PeopleItemPeople from "./PeopleItemPeople";
import {Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faChevronRight ,faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons';
const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class PeopleInfo extends Component {
    constructor(props) {
        super(props);
        // React Ref is created here
        this.navRef = React.createRef();
      }
      handleNav = (direction) => {
        const width = this.navRef.current.offsetWidth;
        if (direction === 'left') {
          this.navRef ? (this.navRef.current.scrollLeft -= width) : null;
        } else {
          this.navRef ? (this.navRef.current.scrollLeft += width) : null;
        }
      }
    render(){
            
        return (
            <React.Fragment>
                <Row>
                <p className="head">Some Dummy Headings</p>
                <div type='button' className='e3-people-arrow-card-scroll d-block d-md-none'>
                <Row>
                <FontAwesomeIcon icon={faAngleLeft} className="scrollIcon"
                onClick={() => this.handleNav('left')}></FontAwesomeIcon>
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faAngleRight} className="scrollIcon"
                onClick={() => this.handleNav('right')}></FontAwesomeIcon>
                </Row>
                </div>
                </Row>
                <PeopleItemPeople refe={this.navRef}/>
               
            </React.Fragment>
        );
    }
  }
  export default PeopleInfo;