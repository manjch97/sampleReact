import React, { Component,useRef } from "react";
import { connect } from "react-redux";
import "./PeopleNetwork.scss";
import { Badge, ResponsiveEmbed, Row, Col, Image } from 'react-bootstrap';
import {  CameraVideoFill,ChevronRight } from 'react-bootstrap-icons';
import './People.scss'
import NBA from '../../assets/img/dashboard/2k2d.jpg';
import { faVideo, faChevronRight ,faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import SideNavActivePeople from '../common/sidenav/SideNavActivePeople'
import PeopleNetworkPeople from "./PeopleNetworkPeople";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  class PeopleNetwork extends Component {
    constructor(props) {
        super(props);
        // React Ref is created here
        this.navRef = React.createRef();
      }
      handleNav = (direction) => {
        if (direction === 'left') {
          this.navRef ? (this.navRef.current.scrollLeft -= 200) : null;
        } else {
          this.navRef ? (this.navRef.current.scrollLeft += 200) : null;
        }
      }
    
    render(){
            
        return (
            <React.Fragment>
                <div className="e3-booth-header e3-people-header">
                <Row>
                <p className="head">Find People to network</p>
                <div type='button' className='e3-people-arrow-scroll d-block d-md-none'>
                <Row>
                <FontAwesomeIcon icon={faAngleLeft} className="scrollIcon"
                onClick={() => this.handleNav('left')}></FontAwesomeIcon>
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faAngleRight} className="scrollIcon"
                onClick={() => this.handleNav('right')}></FontAwesomeIcon>
                </Row>
                </div>
                </Row>
                <PeopleNetworkPeople refe={this.navRef}/>
                </div>
            </React.Fragment>
        );
    }
  }
  export default PeopleNetwork;