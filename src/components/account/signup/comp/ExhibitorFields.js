import React, { Component } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import "../../../../assets/styles/style.scss";
import {FirstName,LastName,Company,CompanyWebsite,Email,JobTitle,Country,State,City,Password,
    ConfirmPassword,PhoneNumber,Address,PostalCode,OnlineHandle,PartneredChannel,NameofChannel,MultipleFileInput,
    LinkToChannel,LinkToWebsite,SocialMediaHandlesArray,SubscriberCount,ManagerName,ManagerEmail,Age,CoveredE3,
    DateOfBirth} from './InputFields';

function ExhibitorFields(props) {
    let CreatorCheckboxTitle = "Are you sure you want to opt-out";
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
       
        <Row xs={1} md={2}>
            <Col>
                <OnlineHandle {...props}/>    
            </Col> 
            <Col>
                <PartneredChannel {...props}/>
            </Col>
        </Row>
        <Row xs={1} md={2}>
            
            <Col>
                <NameofChannel {...props}/>    
            </Col> 
            <Col>
                <LinkToChannel {...props}/>
            </Col>
        </Row>
        {/*<Row xs={1} md={2}>
            
            <Col>
                <SocialMediaHandles {...props}/>    
            </Col> 
            <Col>
                <SubscriberCount {...props}/>
            </Col>
        </Row>*/}
        <SocialMediaHandlesArray {...props}/>  
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
                <LinkToWebsite {...props}/>
            </Col>
        </Row>
        <Row xs={1} md={1}>
            {/* <Col>
                <Age {...props}/>
            </Col> */}
              <Col>
                  <div>
                    <CoveredE3 {...props}/>
                  </div>
                    {props.errors.coveredE3 && (
                  <p className="text-danger_forms dropdownerrmsg">{props.errors.coveredE3}</p>
              )}
            </Col>
        </Row>
        <Row xs={1} md={2}>
            <Col>
                <ManagerName {...props}/>
            </Col>
            <Col>
                <ManagerEmail {...props}/>
            </Col> 
        </Row>
        <Row xs={1} md={2}>
            <Col>
               <DateOfBirth {...props}/>
            </Col>
        </Row>
        <Row xs={1} md={2} className="mt-4">
            <Col>
                <MultipleFileInput {...props} />
            </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
            <Col>
                <Form.Group controlId="mediaCheckbox" >
                    <Form.Check inline type="checkbox" value={props.mediaCheckbox} label={CreatorCheckboxTitle} onChange={props.mediaChecked}
                    checked={props.mediaCheckbox}/>
                </Form.Group>
            </Col>
        </Row>
        
        </div>
    ); 
}
export default ExhibitorFields;


