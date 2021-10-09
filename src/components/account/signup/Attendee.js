import React, { Component,useState } from "react";
import { Row, Col } from "react-bootstrap";
import {FirstName,LastName,Company,Address,PostalCode,Email,
    Country,State,City,Password,ConfirmPassword,Age,DateOfBirth
} from './comp/InputFields';
import "../../../assets/styles/style.scss";
import DatePicker from 'react-datepicker';
import { EVENT_DATE_FORMAT } from "../../../constants/CommonConstants";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Form } from "react-bootstrap";
function Attendee(props) {
    let industryObj = {};
    let industryName = props.industryName;
    let industryArray = props.fileValidations;
    industryArray.forEach(element => {
       if(element.name === industryName){
        industryObj = element;
       }
    });
    return (
      <div>
          <Row xs={1} md={2}>
              <Col>
                  <FirstName {...props}/>
              </Col> 
              <Col>
                  <LastName {...props}/>
            </Col> 
          </Row>
          <Row xs={1} md={2} >
             <Col>
                 <Password {...props}/>
             </Col> 
             <Col>
                 <ConfirmPassword {...props}/>
             </Col> 
          </Row>
          <Row xs={1} md={2} >
            <Col>
                <City {...props}/> 
            </Col>
            <Col>
                 <State {...props}/>
             </Col>         
          </Row>
          <Row xs={1} md={2}>
              
             <Col>
                 <Country {...props}/>
             </Col>
             <Col>
                 <PostalCode {...props}/>
             </Col> 
          </Row>
          <Row xs={1} md={2}>
            
             <Col>
                 <Email {...props}/>
             </Col>
             <Col>
                <DateOfBirth {...props}/>
            </Col>
                     
          </Row>
         
          </div>
         
       
    ); 
}
export default Attendee;





