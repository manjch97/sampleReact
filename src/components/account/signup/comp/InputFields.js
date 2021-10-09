import React, { Component , useRef ,useEffect, useCallback,useState, createRef } from 'react';
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import "../../../../assets/styles/style.scss";
import { ArrowLeft, ArrowRight, Upload } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { InfoCircleFill,PlusSquare,XSquare } from "react-bootstrap-icons";
import upload from '../../../../assets/img/upload/upload.svg';
import file from "../../../../assets/img/upload/file.svg";
import deleteFile from "../../../../assets/img/upload/delete.svg";
import Select from 'react-select';
import { GetDisplayFileSize } from '../../../../helper/CommonHelper';
export const FirstName = (props) => {
    const firstNameRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='firstName' && props.errors['firstName'] !== null && props.eventAutoFocus===true ){
             /*window.scrollTo(0, firstNameRef.current.offsetTop+100);*/
             firstNameRef.current.focus();
        }
    })
    return(
    <Form.Group  controlId="firstName" className="input-field">
        {props.errors.firstName && (
            <p className="text-danger_forms" role="alert"  >{props.errors.firstName}</p>
        )}
        <Form.Control
            type="text"
            placeholder="First Name *"
            aria-required="true"
            value={props.industry.firstName.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={firstNameRef}
        />
    </Form.Group>

)};
export const LastName = (props) => {
    const lastNameRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='lastName' && props.errors['lastName'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, lastNameRef.current.offsetTop+100);*/
            lastNameRef.current.focus();
        }
    })
   return(
    <Form.Group controlId="lastName" className="input-field">
        {props.errors.lastName && (
            <p className="text-danger_forms" role="alert" >{props.errors.lastName}</p>
        )}
        <Form.Control
            type="text"
            aria-required="true"
            placeholder="Last Name *"
            value={props.industry.lastName.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={lastNameRef}
        />
    </Form.Group>
)};

export const Address = (props) => {
    const addressRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='address' && props.errors['address'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, addressRef.current.offsetTop+200);*/
            addressRef.current.focus();
        }
    }) 
   return(
    <Form.Group controlId="address">
        {props.errors.address &&
            <p className="text-danger_forms mb-0" role="alert" >{props.errors.address}</p>
        }
        <Form.Control type="text" ref={addressRef}  autoComplete = "on" maxLength="150" aria-required="true"  placeholder="Address *" className="addressfield" value={props.industry.address.value} onChange={props.eventFunction} />
    </Form.Group>
)};

export const PostalCode = (props) => {
    const postalCodeRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='postalCode' && props.errors['postalCode'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, postalCodeRef.current.offsetTop+200);*/
            postalCodeRef.current.focus();
        }
    }) 
    return(
    <Form.Group controlId="postalCode" className="input-field">
        {props.errors.postalCode && (
            <p className="text-danger_forms" role="alert" >{props.errors.postalCode}</p>
        )}
        <Form.Control
            type="text"
            aria-required="true"
            placeholder="Postal Code *"
            value={props.industry.postalCode.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={postalCodeRef}
        />
    </Form.Group>
)};

export const Company = (props) => {
    const companyRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='company' && props.errors['company'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, companyRef.current.offsetTop+200);*/
            companyRef.current.focus();
        }
    }) 
    return(
    <Form.Group controlId="company" className="input-field">
        {props.errors.company && (
            <p className="text-danger_forms" role="alert" >{props.errors.company}</p>
        )}
        <Form.Control type="text" autoComplete = "on" ref={companyRef} placeholder="Company" value={props.industry.company.value} onChange={props.eventFunction} />
    </Form.Group>
)};

export const CompanyWebsite = (props) => {
    const webSiteRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='webSite' && props.errors['webSite'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, webSiteRef.current.offsetTop+200);*/
            webSiteRef.current.focus();
        }
    }) 
    return(
    <Form.Group controlId="webSite" className="input-field">
        {props.errors.webSite && (
            <p className="text-danger_forms" role="alert" >{props.errors.webSite}</p>
        )}
        <Form.Control type="text" autoComplete = "on" ref={webSiteRef} placeholder="Website" value={props.industry.webSite.value} onChange={props.eventFunction} />
    </Form.Group>
)};

export const Email = (props) => {
    const emailRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='email' && props.errors['email'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, emailRef.current.offsetTop+200);*/
            emailRef.current.focus();
        }
    }) 
    return(
    <Form.Group controlId="email" className="input-field">
        {props.errors.email &&
            <p className="text-danger_forms" role="alert">{props.errors.email}</p>
        }
        <Form.Control  autoComplete="on" ref={emailRef}  placeholder="Email *" aria-required="true" value={props.industry.email.value} onChange={props.eventFunction} />
    </Form.Group>
)}

export const FileInput = (props) => (
    <Form.Group className="input-field">
        {
            props.errors.licenseFileUpload &&
            <p className="text-danger_forms validation-message" role="alert">{props.errors.licenseFileUpload}</p>
        }
        <div className="custom-file">
            <Form.Control id="licenseFileUpload" type="file"  className="custom-file-input form-control" onChange={props.fileUpload} />
            <label id="lblLicenseFileUpload" className="custom-file-label form-control" htmlFor="licenseFileUpload">
                Upload License File
                </label>
            <div className="upload">
                <label htmlFor="upload">
                    <div>
                        <Upload />
                    </div>
                    <small>Max-size: 2mb</small>
                </label>
                <div className="upload">
                    <label htmlFor="upload">
                        <div>
                            <Upload />
                        </div>
                        <small>Max-size: 2mb</small>
                    </label>
                </div>
            </div>
        </div>
    </Form.Group>
);

export const MultipleFileInput = (props) => {
    const multifileUploader = useRef(null) 
    const multifilePressed=(e)=>{
        if(e.key ==="Enter"){
            multifileUploader.current.click();
        }
    }
    const multiImgRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='multiFileUpload' && props.errors['multiFileUpload'] !== null && props.eventAutoFocus===true){
            /*/*window.scrollTo(0, multiImgRef.current.offsetTop+200);*/
            multiImgRef.current.focus();
        }
    })
    return (
        <React.Fragment>
            {props.isExhibitor === true? 
            <p className=" document" >Contract or agreement omitting sensitive information showing you are the manager, agent or representative of the channel.</p>:
            <p className=" document" >Upload Support Documents</p>
            }
            <div className="FileUpload position-relative" tabIndex="0"  onKeyPress={multifilePressed}>
                {
                    props.errors.multiFileUpload &&
                    <p className="text-danger_forms validation-message multifileerrormsg  position-absolute">{props.errors.multiFileUpload}</p>
                }
                <div className="d-flex justify-content-start align-items-center mt-2 mb-2" >
                    <div className="file d-flex justify-content-start align-items-center"  >
                        <label htmlFor="multiFileUpload"><img  id="multiFileUpload_img"  ref={multiImgRef} src={upload} alt="Upload Support Documents" /></label>
                        <input ref={multifileUploader} id="multiFileUpload" value={props.industry.multifilereset} style={{ display: 'none' }} type={"file"} onChange={props.multipleFileSelectHandler} />
                    </div>
                    <div className="gray text-muted line-height16 pl-2">
                        Max size 2mb (upload only png, jpeg, gif, pdf, zip)
                </div>
            </div>
            {
                Object.keys(props.industry.multiFileUpload).map((eachFileName, index) => {
                    return (<div className="d-flex justify-content-start align-items-center my-3">
                        <div className="file">
                            <img src={file} className="file-img" alt="" />
                        </div>
                        <div className="d-flex justify-content-start align-items-center delete">
                            <div className="px-3">
                                <span className="filecls_style">{eachFileName}</span>
                                <span className="flsize_style">{GetDisplayFileSize(props.industry.multiFileUpload[eachFileName].size)}</span>
                            </div>
                            <div><img src={deleteFile} alt="Delete" tabIndex="0" onClick={() => props.multipleFileDeleteHandler(eachFileName)} /></div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        </React.Fragment>
    )
};

export const PhotoFileInput = (props) => {
    const singlefileUploader = useRef(null) 
    const photofilePressed=(e)=>{
        if(e.key ==="Enter"){
            singlefileUploader.current.click();
        }
    }
    const photoImgRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='photoFileUpload' && props.errors['photoFileUpload'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, photoImgRef.current.offsetTop+200);*/
            photoImgRef.current.focus();
        }
    })
    return (
        <React.Fragment>
            <p className="document">Photo ID Of Your Media Outlet</p>
            <div className="FileUpload" tabIndex="0" onKeyPress={photofilePressed}>
                {
                    props.errors.photoFileUpload &&
                    <p className="text-danger_forms validation-message uploaderrormsg">{props.errors.photoFileUpload}</p>
                }
                <div className="d-flex justify-content-start align-items-center mt-2 mb-2">
                    <div className="file d-flex justify-content-start align-items-center" >
                        <label htmlFor="photoFileUpload"><img  src={upload} ref={photoImgRef} id="photoFileUpload_img" alt="Photo ID Of Your Media Outlet" /></label>
                        <input ref={singlefileUploader} id="photoFileUpload" value={props.industry.singlefilereset} style={{ display: 'none' }} type={"file"} onChange={props.photoFileSelectHandler} />
                    </div>
                    <div className="gray text-muted line-height16 pl-2">
                        Max size 2mb (upload only png, jpeg, gif)
                </div>
            </div>
            {
                Object.keys(props.industry.photoFileUpload).map((eachFileName, index) => {
                    return (<div className="d-flex justify-content-start align-items-center my-3">
                        <div className="file">
                            <img src={file} className="file-img" alt="" />
                        </div>
                        <div className="d-flex justify-content-start align-items-center delete">
                            <div className="px-3">
                                <span  className="filecls_style">{eachFileName}</span>
                                <span className="flsize_style">{GetDisplayFileSize(props.industry.photoFileUpload[eachFileName].size)}</span>
                            </div>
                            <div><img src={deleteFile} alt="Delete" tabIndex="0" onClick={() => props.photoFileDeleteHandler(eachFileName)} /></div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        </React.Fragment>
    );
}

export const JobTitle = (props) => {
    const jobTitleRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='jobTitle' && props.errors['jobTitle'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, jobTitleRef.current.offsetTop+200);*/
            jobTitleRef.current.focus();
        }
    })
  return(
    <Form.Group controlId="jobTitle" className="input-field">
        {props.errors.jobTitle && (
            <p className="text-danger_forms" role="alert">{props.errors.jobTitle}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Job Title *"
            aria-required="true"
            value={props.industry.jobTitle.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={jobTitleRef}
        />
    </Form.Group>
)};

export const PublicationLink = (props) => {
    const publicationLinkRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='publicationLink' && props.errors['publicationLink'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, publicationLinkRef.current.offsetTop+200);*/
            publicationLinkRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="publicationLink" className="input-field">
        {props.errors.publicationLink && (
            <p className="text-danger_forms" role="alert">{props.errors.publicationLink}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Link to Publication *"
            aria-required="true"
            value={props.industry.publicationLink.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={publicationLinkRef}
        />
    </Form.Group>
)};

export const PublicationName = (props) => {
    const publicationNameRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='publicationName' && props.errors['publicationName'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, publicationNameRef.current.offsetTop+200);*/
            publicationNameRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="publicationName" className="input-field">
        {props.errors.publicationName && (
            <p className="text-danger_forms" role="alert">{props.errors.publicationName}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Name of Publication *"
            aria-required="true"
            value={props.industry.publicationName.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={publicationNameRef}
        />
    </Form.Group>
)};

export const Age = (props) => {
    const ageRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='Age' && props.errors['Age'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, ageRef.current.offsetTop+200);*/
            ageRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="Age" className="input-field">
        {props.errors.Age && (
            <p className="text-danger_forms" role="alert">{props.errors.Age}</p>
        )}
        <Form.Control
            type="number"
            placeholder="Age *"
            aria-required="true"
            value={props.industry.Age.value}
            min="17"
            max="105"
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={ageRef}
        />
    </Form.Group>

)};


export const SubscriberCount = (props) => {
    const subscriberCountRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='subscriberCount' && props.errors['subscriberCount'] !== null){
            /*window.scrollTo(0, subscriberCountRef.current.offsetTop+200);*/
            subscriberCountRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="subscriberCount" className="input-field">
        {props.errors.subscriberCount && (
            <p className="text-danger_forms" role="alert">{props.errors.subscriberCount}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Subscriber Count *"
            aria-required="true"
            value={props.industry.subscriberCount.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={subscriberCountRef}
        />
    </Form.Group>

)};


export const Gender = (props) => {
    const genderRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='gender' && props.errors['gender'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, genderRef.current.offsetTop+200);*/
             genderRef.current.focus();
        }
    })
    const options = [
        { value: '0', label: 'Male' },
        { value: '1', label: 'Female' },
        { value: '2', label: 'Non-binary' },
        { value: '3', label: 'Prefer not to disclose' },
      ];
    return(
    <Form.Group controlId="gender" className="input-field">
        {props.errors.gender && (
            <p className="text-danger_forms" role="alert">{props.errors.gender}</p>
        )}
        <Select
            value={props.industry.gender.value}
            onChange={props.genderFunction}
            options={options}
            placeholder="Gender *"
            aria-required="true"
            className="customSelect_container"
            classNamePrefix="e3_custom"
            autoComplete = "on"
            ref={genderRef}
        />
    </Form.Group>
    )
};

export const AttendedE3 = (props) => {
    const attendedE3Ref=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='attendedE3' && props.errors['attendedE3'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, attendedE3Ref.current.offsetTop+200);*/
            attendedE3Ref.current.focus();
        }
    })
    return(

    <Form.Group controlId="attendedE3" className="input-field">
        {props.errors.attendedE3 && (
            <p className="text-danger_forms" role="alert">{props.errors.attendedE3}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Have You attended E3 in the Past *"
            aria-required="true"
            value={props.industry.attendedE3.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={attendedE3Ref}
        />
    </Form.Group>

)};

export const AIASMember = (props) => {
    const isMemberRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='isMember' && props.errors['isMember'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, isMemberRef.current.offsetTop+200);*/
            isMemberRef.current.focus();
        }
    })
    const options = [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
      ];
      
    return(
    <Form.Group controlId="isMember" className="input-field">
        {props.errors.isMember && (
            <p className="text-danger_forms" role="alert">{props.errors.isMember}</p>
        )}
        <Select
            value={props.industry.isMember.value}
            onChange={props.memberFunction}
            options={options}
            placeholder="Are you a member of AIAS *"
            aria-required="true"
            className="customSelect_container"
            classNamePrefix="e3_custom"
            autoComplete = "on"
            ref={isMemberRef}
            removeSelected={true}
            
        />
    </Form.Group>

    )};

export const SupervisorName = (props) => {
    const supervisorNameRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='supervisorName' && props.errors['supervisorName'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, supervisorNameRef.current.offsetTop+200);*/
            supervisorNameRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="supervisorName" className="input-field">
        {props.errors.supervisorName && (
            <p className="text-danger_forms" role="alert">{props.errors.supervisorName}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Supervising Editor Name *"
            aria-required="true"
            value={props.industry.supervisorName.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={supervisorNameRef}
        />
    </Form.Group>
)};

export const SupervisorEmail = (props) => {
    const supervisorEmailRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='supervisorEmail' && props.errors['supervisorEmail'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, supervisorNameRef.current.offsetTop+200);*/
            supervisorEmailRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="supervisorEmail" className="input-field">
        {props.errors.supervisorEmail && (
            <p className="text-danger_forms" role="alert">{props.errors.supervisorEmail}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Supervising Editor Email *"
            aria-required="true"
            value={props.industry.supervisorEmail.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={supervisorEmailRef}
        />
    </Form.Group>

)};
export const ManagerName = (props) => {
    const ManagerNameRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='ManagerName' && props.errors['ManagerName'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, ManagerNameRef.current.offsetTop+200);*/
            ManagerNameRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="ManagerName" className="input-field">
        {props.errors.ManagerName && (
            <p className="text-danger_forms" >{props.errors.ManagerName}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Manager Name"
            value={props.industry.ManagerName.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={ManagerNameRef}
        />
    </Form.Group>

)};

export const ManagerEmail = (props) => {
    const ManagerEmailRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='ManagerEmail' && props.errors['ManagerEmail'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, ManagerEmailRef.current.offsetTop+200);*/
            ManagerEmailRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="ManagerEmail" className="input-field">
        {props.errors.ManagerEmail && (
            <p className="text-danger_forms">{props.errors.ManagerEmail}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Manager Email"
            value={props.industry.ManagerEmail.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={ManagerEmailRef}
        />
    </Form.Group>

)};

export const LinkToChannel = (props) => {
    const linktoChannelRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='linktoChannel' && props.errors['linktoChannel'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, linktoChannelRef.current.offsetTop+200);*/
            linktoChannelRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="linktoChannel" className="input-field">
        {props.errors.linktoChannel && (
            <p className="text-danger_forms" role="alert">{props.errors.linktoChannel}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Link To Channel *"
            aria-required="true"
            value={props.industry.linktoChannel.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={linktoChannelRef}
        />
    </Form.Group>
)};
export const LinkToWebsite = (props) => {
      const linktoWebsiteRef=useRef();
        useEffect(()=>{
            if(Object.keys(props.errors)[0]==='linktoWebsite' && props.errors['linktoWebsite'] !== null && props.eventAutoFocus===true){
                /*window.scrollTo(0, linktoChannelRef.current.offsetTop+200);*/
                linktoWebsiteRef.current.focus();
            }
        })
        return(
        <Form.Group controlId="linktoWebsite" className="input-field">
            {props.errors.linktoWebsite && (
                <p className="text-danger_forms" role="alert">{props.errors.linktoWebsite}</p>
            )}
            <Form.Control
                type="text"
                placeholder="Link to a website that proves the channel is part of your roster *"
                aria-required="true"
                value={props.industry.linktoWebsite.value}
                onChange={props.eventFunction}
                autoComplete = "on"
                ref={linktoWebsiteRef}
            />
        </Form.Group>
    )};

export const OnlineHandle = (props) => {
    const onlineHandleRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='onlineHandle' && props.errors['onlineHandle'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, onlineHandleRef.current.offsetTop+200);*/
            onlineHandleRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="onlineHandle" className="input-field">
        {props.errors.onlineHandle && (
            <p className="text-danger_forms" role="alert">{props.errors.onlineHandle}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Online Handle *"
            aria-required="true"
            value={props.industry.onlineHandle.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={onlineHandleRef}
        />
    </Form.Group>
)};

export const PartneredChannel = (props) => {
    const partneredChannelRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='partneredChannel' && props.errors['partneredChannel'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, partneredChannelRef.current.offsetTop+200);*/
            partneredChannelRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="partneredChannel" className="input-field">
        {props.errors.partneredChannel && (
            <p className="text-danger_forms" role="alert">{props.errors.partneredChannel}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Partnered Channel *"
            aria-required="true"
            value={props.industry.partneredChannel.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={partneredChannelRef}
        />
    </Form.Group>
)};

export const NameofChannel = (props) => {
    const nameofChannelRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='nameofChannel' && props.errors['nameofChannel'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, nameofChannelRef.current.offsetTop+200);*/
            nameofChannelRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="nameofChannel" className="input-field">
        {props.errors.nameofChannel && (
            <p className="text-danger_forms" role="alert">{props.errors.nameofChannel}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Name of Channel *"
            aria-required="true"
            value={props.industry.nameofChannel.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={nameofChannelRef}
        />
    </Form.Group>

)};

export const CoveredE3 = (props) => {
    const yearRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='coveredE3' && props.errors['coveredE3'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, yearRef.current.offsetTop+200);*/
            yearRef.current.focus();
        }
    })
  let yearObj = props.selectPeriod.map( data => ({label:data.year,value:data.id,year:data.year,id:data.id}) );
     return (
        <div>
           
             <Select
            value={props.industry.coveredE3.value}
            onChange={props.selectFunction}
            options={yearObj}
            placeholder="Whether or not you've covered E3 in the past? If so, what years"
            aria-required="true"
            isMulti={true}
            className="customSelect_container yearfieldsty"
            classNamePrefix="e3_custom"
            id="coveredE3"
            ref={yearRef}
            removeSelected={true}
        />
        </div>
     )

};
export const SocialMediaHandles = (props) => {
    const SocialMediaHandlesRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='socialMediaHandles' && props.errors['socialMediaHandles'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, nameofChannelRef.current.offsetTop+200);*/
            SocialMediaHandlesRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="socialMediaHandles" className="input-field">
        {props.errors.socialMediaHandles && (
            <p className="text-danger_forms" role="alert">{props.errors.socialMediaHandles}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Social Media Handle(s) *"
            aria-required="true"
            value={props.industry.socialMediaHandles.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={SocialMediaHandlesRef}
        />
    </Form.Group>

)};
export const SocialMediaHandlesArray = (props) => {

     var [socialRowCount, setSocialRowCount] = useState(1);

    const socialMediaHandlesArrayRef=useRef({});
    const subscriberCountRef=useRef({});

    useEffect(()=>{

        const err_field = Object.keys(props.errors)[0]+"";
       
        if((err_field.indexOf('socialMediaHandles_Field_') != -1) && props.eventAutoFocus===true){
            socialMediaHandlesArrayRef.current[Number(Object.keys(props.errors)[0].split("_")[2])].focus();
        }
        if((err_field.indexOf('subscriberCount_Field_') != -1) && props.eventAutoFocus===true){
            subscriberCountRef.current[Number(Object.keys(props.errors)[0].split("_")[2])].focus();
        }
    })

    const handleAddField = () => {
        if(socialRowCount<=4) {
            setSocialRowCount(++socialRowCount);
        } else {
            return false;
        }
    }
    const handleDeleteField = (i) => {
        setSocialRowCount(--socialRowCount);
    }

    return(
        <div>
        { [...Array(socialRowCount)].map((field, idx) => {
            const conID = "socialMediaHandles_Field_"+[idx];
            const conCountID = "subscriberCount_Field_"+[idx];
           
         return (
        <Row xs={1} md={2} key={`${field}-${idx}`}>
            <Col>
                <Form.Group controlId={conID} className="input-field">
                    {
                    props.errors[conID] && (
                    <p className="text-danger_forms" role="alert">{props.errors[conID]}</p>
                    )}
                    <Form.Control
                        type="text"
                        placeholder="Social Media Handle(s) *"
                        aria-required="true"
                        value={ props.industry.socialMediaHandlesArray[idx]? props.industry.socialMediaHandlesArray[idx].handle : ""  }
                        onChange={props.eventDynamicFunction}
                        autoComplete = "on"
                        data-attr={idx}
                        data-name="SocialMedia"
                        ref={(element) => socialMediaHandlesArrayRef.current[idx]=element}
                        className="space_rg40"
                    />
                   {
                       (idx === 0 )? <PlusSquare tabIndex="0" onKeyPress={(e) => { if(e.key === "Enter") {handleAddField(); props.eventDynamicFielddAdd(idx) } }} className="socialfld_plus" onClick={(e) => { handleAddField(); props.eventDynamicFielddAdd(idx) }} /> : <XSquare tabIndex="0" data-attr={idx} className="socialfld_plus" onKeyPress={(e) => { if(e.key === "Enter") {handleDeleteField(idx); props.eventDynamicFielddDelete(idx)} }} onClick={(e) => {handleDeleteField(idx); props.eventDynamicFielddDelete(idx)}} />
                   } 
                   
                </Form.Group>
            </Col> 
            <Col>
                <Form.Group controlId={conCountID} className="input-field">
                    {props.errors[conCountID] && (
                        <p className="text-danger_forms" role="alert">{props.errors[conCountID]}</p>
                    )}
                    <Form.Control
                        type="number"
                        placeholder="Subscriber Count *"
                        aria-required="true"
                        value={ props.industry.socialMediaHandlesArray[idx]? props.industry.socialMediaHandlesArray[idx].subscriberCount : ""  }
                        onChange={props.eventDynamicFunction}
                        autoComplete = "on"
                        data-attr={idx}
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                        ref={(element) => subscriberCountRef.current[idx]=element}
                    />
                </Form.Group>
            </Col>
        </Row>
        );
      })}
    </div>
)};
export const EmployerPhone = (props) => {
    const employerPhoneRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='employerPhone' && props.errors['employerPhone'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, employerPhoneRef.current.offsetTop+200);*/
            employerPhoneRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="employerPhone" className="input-field phone_number">
        {props.errors.employerPhone && (
            <p className="text-danger_forms" >{props.errors.employerPhone}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Primary Business Phone of Employer or Cell Phone *"
            aria-required="true"
            value={props.industry.employerPhone.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={employerPhoneRef}
        />
    </Form.Group>
)};



  
export const Country = (props) => {
    const countryRef=useRef();

    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='country' && props.errors['country'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, countryRef.current.offsetTop+200);*/
            countryRef.current.focus();
        }
    })

    let countryObj = props.countryList.map( data => ({label:data.full_name_locale,value:data.id,
        full_name_english:data.full_name_english,full_name_locale:data.full_name_locale,id:data.id,
        three_letter_abbreviation:data.three_letter_abbreviation,two_letter_abbreviation:data.two_letter_abbreviation}) );
    
    const countryIdList = countryObj.map(eachCountry=> eachCountry.value);
    // Feature of focusing selected option when menu is getting opened
    const onMenuOpen = useCallback((countryIdList) => {
      // Getting a selected option
      const option = countryRef.current?.select?.state?.selectValue?.[0]
      if (option) {
        setTimeout(() => {
          if (countryRef.current?.select) {
            const selectedIndex = countryIdList?.indexOf(option.id)
            if (selectedIndex >= 0) {
              // Focusing selected option only if it exists
              countryRef.current.select.scrollToFocusedOptionOnUpdate = true
              countryRef.current.select.inputIsHiddenAfterUpdate = false
              countryRef.current.select.setState({
                focusedValue: null,
                focusedOption: countryRef.current?.select.props?.options[selectedIndex]
              })
            }
          }
        })
      }
  }, [countryRef.current])
    
    const filterOption = (option, inputValue) => {
            const { label, value } = option;
            // looking if other options with same label are matching inputValue
            const otherKey = countryObj.filter(
              opt => opt.label === label && opt.label.toLowerCase().startsWith(inputValue.toLowerCase())
            );
            return label.startsWith(inputValue) || otherKey.length > 0;
    };

        return (
        <div>
        <Form.Group controlId="country" className="input-field">
        <Select
            isClearable
            value={props.industry.country.value}
            onChange={props.countrySelected}
            options={countryObj}
            filterOption={filterOption}
            placeholder="Select Country *"
            aria-required="true"
            handleKeyDownFn={props.handleKeyDownFn}
            label="full_name_locale"  
            className="customSelect_container"
            classNamePrefix="e3_custom"
            onMenuOpen={()=>onMenuOpen(countryIdList)}
            ref={countryRef}
            isMulti={false}
        />
        {props.errors.country && (
                    <p className="text-danger_forms dropdownerrmsg">{props.errors.country}</p>
                )}
                </Form.Group>
        </div>
    )
};

export const State = (props) => {
    const stateRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='state' && props.errors['state'] !== null && props.eventAutoFocus===true){
            window.scrollTo(0, stateRef.current.offsetTop+200)
            stateRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="state" className="input-field">
        {props.errors.state && (
            <p className="text-danger_forms" role="alert">{props.errors.state}</p>
        )}
        <Form.Control
            type="text"
            placeholder="State *"
            aria-required="true"
            value={props.industry.state.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={stateRef}
        />
    </Form.Group>
)};

export const City = (props) => {
    const cityRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='city' && props.errors['city'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, cityRef.current.offsetTop+200);*/
            cityRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="city" className="input-field">
        {props.errors.city && (
            <p className="text-danger_forms" role="alert">{props.errors.city}</p>
        )}
        <Form.Control
            type="text"
            placeholder="City *"
            aria-required="true"
            value={props.industry.city.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={cityRef}
        />
    </Form.Group>

)};
export const Password = (props) => {
    const passwordRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='password' && props.errors['password'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, passwordRef.current.offsetTop+200);*/
            passwordRef.current.focus();
        }
    });
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Password should contain a number, Upper Case letter and special character
        </Tooltip>
      );
    return(
    <Form.Group controlId="password" className="input-field">
        {props.errors.password && (
        <p className="text-danger_forms" role="alert">{props.errors.password} <OverlayTrigger placement="top" delay={{ show: 250, hide: 250 }} overlay={renderTooltip}><InfoCircleFill tabIndex="0" /></OverlayTrigger></p>
        )}
        <Form.Control
        type="password"
        placeholder="Password *"
        aria-required="true"
        value={props.industry.password.value}
        onChange={props.eventFunction}
        autoComplete = "on"
        ref={passwordRef}
        />
        
  </Form.Group>
)};

export const ConfirmPassword = (props) => {
    const confirmPasswordRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='confirmPassword' && props.errors['confirmPassword'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, confirmPasswordRef.current.offsetTop+200);*/
            confirmPasswordRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="confirmPassword" className="input-field">
        {props.errors.confirmPassword && (
        <p className="text-danger_forms" role="alert">
            {props.errors.confirmPassword}
        </p>
        )}
        <Form.Control
        type="password"
        placeholder="Confirm Password *"
        aria-required="true"
        value={props.industry.confirmPassword.value}
        onChange={props.eventFunction}
        autoComplete = "on"
        ref={confirmPasswordRef}
        />
    </Form.Group>
)};

export const PhoneNumber = (props) => {
    const contactNumberRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='contactNumber' && props.errors['contactNumber'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, contactNumberRef.current.offsetTop+200);*/
            contactNumberRef.current.focus();
        }
    })
    return(
    <Form.Group controlId="contactNumber" className="input-field">
        {props.errors.contactNumber && (
        <p className="text-danger_forms" role="alert">
            {props.errors.contactNumber}
        </p>
        )}
        <Form.Control
        type="tel"
        placeholder="Phone Number *"
        aria-required="true"
        min="4"
        max="12"
        value={props.industry.contactNumber.value}
        onChange={props.eventFunction}
        autoComplete = "on"
        ref={contactNumberRef}
        />
    </Form.Group>
)};

export const DateOfBirth = (props) => {
    const dateofBirthRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='dateofBirth' && props.errors['dateofBirth'] !== null && props.eventAutoFocus===true){
            /*window.scrollTo(0, dateofBirthRef.current.offsetTop+200);*/
            dateofBirthRef.current.focus();
        }
    })
    return(
        <Form.Group controlId="dateofBirth" className="input-field eventdatefld">
            <Form.Control type = "text" value={props.industry.dateofBirth} placeholder="Date of Birth (MM/DD/YYYY) *"
            onChange = {props.handleDOBChange} onKeyDown={props.DOBkeyPressFunc}
            id="dateofBirth"
            ref={dateofBirthRef}>
            </Form.Control>
        
            {props.errors.dateofBirth && (
            <p className="text-danger_forms" id="dateofBirthlabel">{props.errors.dateofBirth}</p>
            )}
        </Form.Group>
)};
export const CouponCode = (props) => {
    const couponCodeRef=useRef();
    useEffect(()=>{
        if(Object.keys(props.errors)[0]==='couponCode' && props.errors['couponCode'] !== null && props.eventAutoFocus===true ){
             /*window.scrollTo(0, couponCodeRef.current.offsetTop+100);*/
             couponCodeRef.current.focus();
        }
    })
    return(
    <Form.Group  controlId="couponCode" className="input-field">
        {props.errors.couponCode && (
            <p className="text-danger_forms" role="alert"  >{props.errors.couponCode}</p>
        )}
        <Form.Control
            type="text"
            placeholder="Coupon Code"
            aria-required="true"
            value={props.industry.couponCode.value}
            onChange={props.eventFunction}
            autoComplete = "on"
            ref={couponCodeRef}
        />
    </Form.Group>

)};



