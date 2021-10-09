import { useHistory } from "react-router-dom";
import { Navbar, Button, Row, Col, InputGroup, Form, Nav, Image } from 'react-bootstrap'
import React, { Component } from "react";

import './Header.scss';
import '../../../assets/styles/style.scss'
import people1 from '../../../assets/img/booths/people/2.jpg';
import people2 from '../../../assets/img/booths/people/2.jpg';
import people3 from '../../../assets/img/booths/people/3.jpg';
import NotificationMessages from "./NoticationMessages";
const messages = [{
    image: people1,
    name: 'Microsoft',
    subtitle:'Added new event',
    time:'0 min ago',
    class:"liveVideo"
}, {
    image: people2,
    name: 'Microsoft',
    subtitle:'Started Broadcast',
    time:'1 hr ago',
    class:" "
}, {
    image: people3,
    name: 'Microsoft',
    subtitle:'You unlocked badge',
    time:'2 hr ago',
    class:" "
}
]
const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class NotificationPopup extends Component {

    render(){
            
        return (
            <React.Fragment>
                <div className="NotificationAlign">
                <Row className="mobileSkins">
                    <a className="p-2 ml-2 todayNotifications">TODAY</a>
                </Row>
                <Row>
                <a className="p-2 mr-2 clearNotifications">CLEAR ALL</a>
                </Row>
                </div>
                <Row className="">
                    <NotificationMessages messages={messages}/>
                </Row>
                <Row className="mt-3 ml-1">
                    <div md={3} xs={3} className="cursor">
                        <p className="ThisWeek">THIS WEEK</p>
                    </div>
                                               
                </Row>
                <Row className="d-flex ">
                    <NotificationMessages messages={messages}/>
                </Row>
                <Row className="mt-2">
                    <div md={3} xs={3} className="showAll-noti cursor ">
                        <a>SHOW ALL</a>
                    </div>
                                               
                </Row>
            </React.Fragment>
        );
    }
  }
  export default NotificationPopup;