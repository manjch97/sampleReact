import React, { Component } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import "../../../../assets/styles/style.scss";
import * as InputFields from './InputFields';

function MediaFields(props) {
    let industryObj = {};
    let MediaCheckboxTitle = "Are you sure you want to opt-out";
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
                <InputFields.FirstName {...props}/>
           </Col> 
           <Col>
                <InputFields.LastName {...props}/>
           </Col> 
        </Row>
        <Row xs={1} md={2} >
           
            <Col>
                <InputFields.JobTitle {...props}/> 
            </Col> 
            <Col>
                <InputFields.PublicationName {...props}/> 
            </Col>
        </Row> 
        <Row xs={1} md={2} >
           
           <Col>
               <InputFields.PublicationLink {...props}/>
               
           </Col> 
           <Col>
                <InputFields.EmployerPhone {...props}/>
            </Col>
          
       </Row>
       <Row xs={1} md={2} >
            {/* <Col>
                <InputFields.Address {...props}/>
            </Col> */}
            <Col>
                <InputFields.City {...props}/>
            </Col> 
            <Col>
                <InputFields.State {...props}/>
            </Col>
        </Row>
       <Row xs={1} md={2} >
            
            <Col>
               <InputFields.Country {...props}/>
           </Col>
           <Col>
                <InputFields.PostalCode {...props}/>
            </Col> 
        </Row>
        <Row xs={1} md={2} >
            
            
            {/* <Col>
                <InputFields.PhoneNumber {...props}/>
            </Col>  */}
            {/* <Col>
                <InputFields.DateOfBirth {...props}/> 
            </Col> */}
           
        </Row>
        <Row xs={1} md={2}>
            <Col>    
                <InputFields.Email {...props}/>
            </Col> 
             <Col>
                <InputFields.SocialMediaHandles {...props}/>     
            </Col> 
            
        </Row>
        <Row xs={1} md={1} className="coveredE3Row">
            {/* <Col>
                <InputFields.Age {...props}/>
            </Col>  */}
            <Col>
                <div>
                <InputFields.CoveredE3 {...props}/>
                </div>
                {props.errors.coveredE3 && (
                <p className="text-danger_forms dropdownerrmsg">{props.errors.coveredE3}</p>
                )}
            </Col>
            
        </Row>
      
        <Row xs={1} md={2} >
            <Col>
                <InputFields.Password {...props}/>
            </Col> 
            <Col>
                <InputFields.ConfirmPassword {...props}/>
            </Col> 
        </Row>
     
       
        <Row xs={1} md={2} >
            <Col>
                <InputFields.SupervisorName {...props}/> 
            </Col>
            <Col>
                <InputFields.SupervisorEmail {...props}/>
            </Col> 
        </Row>
        <Row xs={1} md={2}>
            <Col>
                <InputFields.DateOfBirth {...props}/>
            </Col>
        </Row>
       
      
        <Row xs={1} md={2}>
            {industryObj.isMultipleUpload === true ?
            <Col>
                <InputFields.MultipleFileInput {...props}/>
            </Col>
            : null 
            }
           
            {industryObj.isSingleUpload === true ?
            <Col className="mt-3 mt-md-0">
                <InputFields.PhotoFileInput {...props}/>
            </Col>
            : null 
            }
        </Row>
        <Row style={{ marginTop: 20 }}>
            <Col>
                    <Form.Group controlId="mediaCheckbox" >
                        <Form.Check inline type="checkbox" value={props.mediaCheckbox} label={MediaCheckboxTitle} onChange={props.mediaChecked}
                checked={props.mediaCheckbox}/>
                </Form.Group>
                
            </Col>
        </Row>
        </div>
    ); 
}
export default MediaFields;



