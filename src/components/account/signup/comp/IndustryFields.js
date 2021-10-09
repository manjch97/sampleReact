import React, { Component } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import {FirstName,LastName,Company,CompanyWebsite,Address,PostalCode,Email,FileInput,JobTitle,Age,Gender,
    AttendedE3,AIASMember,Country,State,City,Password,ConfirmPassword,PhoneNumber,MultipleFileInput,
    PhotoFileInput,CoveredE3,DateOfBirth,CouponCode
} from './InputFields';
import "../../../../assets/styles/style.scss";


function IndustryFields(props) {
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
                <Company {...props}/>
            </Col> 
            <Col>
                <JobTitle {...props}/> 
            </Col>      
        </Row>
        
        <Row xs={1} md={2}>
            <Col>
                <Email {...props}/>
            </Col> 
            <Col>
                <CompanyWebsite {...props}/>
            </Col>   
         
        </Row>
        <Row xs={1} md={2} >   
            {/* <Col>
                <Address {...props}/>
            </Col>  */}
            <Col>
                <City {...props}/> 
            </Col>
             <Col>
                <State {...props}/>
            </Col>     
        </Row>
        <Row xs={1} md={2} >     
            <Col>
                <Country {...props}/>
            </Col>
            <Col>
                <PostalCode {...props}/>
            </Col>    
        </Row>
       
        {/* <Row xs={1} md={2}>
             <Col>
                <Age {...props}/>
            </Col> 
            <Col>
                <Gender {...props}/>
            </Col>    
        </Row> */}
        <Row xs={1} md={2} >
            <Col>
                <Password {...props}/>
            </Col> 
            <Col>
                <ConfirmPassword {...props}/>
            </Col> 
        </Row>
        
        <Row xs={1} md={1}>
            <Col>
                <div>
                <CoveredE3 {...props}/>
                </div>
                {props.errors.coveredE3 && (
                <p className="text-danger_forms dropdownerrmsg">{props.errors.coveredE3}</p>
                )}
            </Col>
            <Col>
                <AIASMember {...props}/>
            </Col>
        </Row>
        <Row xs={1} md={2}>
            {props.industry.ismemberofAIAS === true?
            <Col>
                <CouponCode {...props}/>
            </Col>
            :null}
            <Col>
                <DateOfBirth {...props}/>
            </Col>
        </Row>
        
        
       
        <Row xs={1} md={2}>
            
            {industryObj.isMultipleUpload === true ?
            <Col>
                <MultipleFileInput {...props}/>
            </Col>
            : null 
            }
           
            {industryObj.isSingleUpload === true ?
            <Col className="mt-3 mt-md-0">
                <PhotoFileInput {...props}/>
            </Col>
            : null 
            }
        </Row>
       
        </div>
    ); 
}
export default IndustryFields;





