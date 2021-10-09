import React, { Component } from "react";
import { Row, Col, Form, Container, Button, Modal } from "react-bootstrap";
import { ArrowLeft, ArrowRight, Upload } from "react-bootstrap-icons";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../../../assets/styles/style.scss";
import "../../common/header/Header.scss";
import moment from 'moment';
import TermofService from "./Terms";
import {
  CUSTOMER_INDUSTRY,
  FILE_UPLOAD_MAX_SIZE,
  MULTIPLEFILE_UPLOAD_TYPES, PHOTOFILE_UPLOAD_TYPES,SIGNUP_CREATOR,SIGNUP_FAN,
  SIGNUP_INDUSTRY,SIGNUP_MEDIA
} from "../../../constants/CommonConstants";
import {validateData} from '../commonValidation';
import { signupAction } from "../../../redux/actions/authAction";
import bsCustomFileInput from "bs-custom-file-input";
import topicon from "../../../assets/img/landing/top.svg";
import MediaFields from "./comp/MediaFields";
import IndustryFields from "./comp/IndustryFields";
import * as InputFields from './comp/InputFields';
import ExhibitorFields from "./comp/ExhibitorFields";
import Attendee from "./Attendee";
import { Account } from "../../../services/Api";
import { Auth as authApi } from '../../../services/Api';
import { forEach, size } from "lodash";
import { InfoCircleFill } from "react-bootstrap-icons";
import { fireClickEvent } from "../../../helper/GTMHelper";
import { Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";
import {PopulateMetaTags} from "../../../helper/CommonHelper";
const mapStateToProps = (state) => ({
  localUser: state.authlocal.localUser,
});

const mapDispatchToProps = (dispatch) => ({
  onSignup: (userData) => {
    return signupAction(userData)(dispatch);
  }, // Payload and callback
});

class Industry extends Component {
  constructor() {
    super();
    window.scrollTo(0, 0)
  }
  componentDidMount() {
    let industryType = this.props.match.params.industryType;
    if (industryType) {
      this.setState({
        industryTypeSignin: industryType
      });
      if (industryType === SIGNUP_FAN) {
        this.setState({
          industryType: SIGNUP_FAN, submitdisabled: false,industryName: SIGNUP_FAN
        });
      }
      if (industryType === SIGNUP_CREATOR) {
        this.setState({
          industryType: SIGNUP_CREATOR, submitdisabled: false,industryName: SIGNUP_CREATOR
        });
      }
    }
    else {
      this.setState({
        industryTypeSignin: "All"
      });
    }
    bsCustomFileInput.init();
    this.getAllTypes();
    this.getAllCountries();
  }

  getAllTypes = async () => {
      this.setState({
        containerLoading: true
      });

    let response = await authApi.industryTypes();
    if ( response) {
      response.forEach(element => {
        element.isShow = true;
      });
      this.setState({
        industryTypes: response,containerLoading: false
      });
    }
    else{
      this.setState({
        containerLoading: false
      });
    }
  }
  getAllCountries = async () => {
    let response = await authApi.countriesList();
    if ( response) {
      this.setState({ countryList: response });
    }else{
      this.setState({
        containerLoading: false
      });
    }
  }

  state = {
    show: true,
    industry: {
      firstName: '',
      lastName: '',
      company: '',
      webSite: '',
      address: '',
      contactNumber: '',
      email: '',
      publicationName: '',
      publicationLink: '',
      jobTitle: '',
      password: '',
      confirmPassword: '',
      mediaCredentials: '',
      licenseFileUpload: '',
      multiFileUpload: {},
      photoFileUpload: {},
      Age: '',
      dateofBirth:'',
      gender: '',
      attendedE3: '',
      isMember: '',
      supervisorName: '',
      supervisorEmail: '',
      coveredE3: [],
      socialMediaHandles: '',
      socialMediaHandlesArray: [{handle : "",subscriberCount: ""}],
      employerPhone: '',
      country: '',
      state: '',
      city: '',
      mediaOptions: '',
      industryTypeSignin: '',
      mediaCheckbox: false,
      terms: { Agreed: false, readTermsOfServices: false, termsOfServices: "", dataLoaded: false },
      postalCode: '',
      multifilereset: '',
      singlefilereset: '',
      ManagerEmail: '',
      ManagerName: '',
      subscriberCount: '',
      linktoChannel: '',
      linktoWebsite:'',
      onlineHandle: '',
      partneredChannel: '',
      nameofChannel: '',
      couponCode: '',
      ismemberofAIAS: false
    },
    infoIconOpen: false,
    modalCheckboxOpen: false,
    industryTypes: [],
    countryList: [],
    errors: {},
    eventAutoFocus: false,
    industryType: '',
    industryName: '',
    helpText: '',
    submitdisabled: true,
    loginLoading: false,
    termsloading: false,
    containerLoading: false,
    fileValidations: [{
      "name": "Broadcast Media/Journalists",
      min: 2, max: 5, isSingleUpload: true, isMultipleUpload: true
    },
    {
      "name": "Digital Production Companies",
      min: 2, max: 2, isSingleUpload: false, isMultipleUpload: true
    },
    {
      "name": "Podcasts",
      min: 2, max: 3, isSingleUpload: false, isMultipleUpload: true
    },
    {
      "name": "Industry and Financial Analysts",
      min: 2, max: 4, isSingleUpload: false, isMultipleUpload: true
    },
    {
      "name": "Online Media (News Websites)",
      min: 2, max: 2, isSingleUpload: false, isMultipleUpload: true
    },
    {
      "name": "RETAILER",
      min: 2, max: 4, isSingleUpload: false, isMultipleUpload: true
    },
    {
      "name": "Editorial YouTube/Twitch Channels",
      min: 2, max: 5, isSingleUpload: false, isMultipleUpload: false
    },
    {
      "name": "Freelance Journalists",
      min: 2, max: 2, isSingleUpload: false, isMultipleUpload: true
    },
    {
      "name": "INDUSTRY",
      min: 2, max: 4, isSingleUpload: false, isMultipleUpload: true
    },
    {
      "name": SIGNUP_CREATOR,
      min: 2, max: 4, isSingleUpload: false, isMultipleUpload: true
    },
    {
      "name": "GamaeFreePaid",
      min: 0, max: 0, isSingleUpload: false, isMultipleUpload: false
    },
    {
      "name": "VIP BUYERS",
      min: 2, max: 4, isSingleUpload: false, isMultipleUpload: true
    },
    {
      "name": "Print Media (Newspapers, Magazines, Newsletters, etc.)",
      min: 2, max: 4, isSingleUpload: false, isMultipleUpload: true
    },
    ],
    selectPeriod: [{ year: '2020', id: 1 }, { year: '2019', id: 2 }
      , { year: '2018', id: 3 }, { year: '2017', id: 4 }, { year: '2016', id: 5 }, { year: '2015', id: 6 },
    { year: '2014', id: 7 }, { year: '2013', id: 8 }, { year: '2012', id: 9 }, { year: '2011', id: 10 }
      , { year: '2010', id: 11 }, { year: '2009', id: 12 }, { year: '2008', id: 13 }, { year: '2007', id: 14 }
      , { year: '2006', id: 15 }, { year: '2005', id: 16 }, { year: '2004', id: 17 }, { year: '2003', id: 18 },
      , { year: '2002', id: 19 }, { year: '2001', id: 20 }, { year: '2000', id: 21 }, { year: '1999', id: 22 },
      , { year: '1998', id: 23 },{ year: '1997', id: 24 },{ year: '1996', id: 25 },{ year: '1995', id: 26 }
    ],
    style: {
      chips: {
        background: "#F2F2F2",
        color: "#828282",
        "borderRadius": "5px",
      },
      searchBox: {
        border: "none",
        "borderBottom": "2px solid #F2F2F2",
        "borderRadius": "0px"
      },
      inputField: { // To change input field position or margin
        border: "none",
      },
      option: { // To change css for dropdown options
        color: "#828282",
        "marginLeft": "20px",
        "marginRight": "20px",

      },
      optionContainer: { // To change css for option container 
        background: "#F2F2F2",
        "borderRadius": "4px",
        border: "1px solid #F2F2F2",
        "listStyleType": "none",
      },
      multiselectContainer: { // To change css for multiselect (Width,height,etc..)
        zIndex: 10,
      }

    }
  };


  changeHandler = (event) => { 
    event.preventDefault();
    let value = event.target.value;
    this.setState((prevState) => ({
      industry: { ...prevState.industry, [event.target.id]: value },
      errors: { ...prevState.errors, [event.target.id]: null },
      eventAutoFocus:  false
    }));
    
  };


  socialChangeHandler = (event) => {
    event.preventDefault();
    if(event.target.id.includes("socialMediaHandles")) {
      this.state.industry.socialMediaHandlesArray[event.target.dataset.attr].handle = event.target.value;
    } else {
      this.state.industry.socialMediaHandlesArray[event.target.dataset.attr].subscriberCount = event.target.value;
    }
    
    this.setState((prevState) => ({
      industry: { ...prevState.industry, socialMediaHandlesArray: this.state.industry.socialMediaHandlesArray },
      //errors: { ...prevState.errors, socialMediaHandles: [{socialMediaHandle : "",subscriberCount: ""}] },
      eventAutoFocus:  false
    }));
  

  }

  eventDynamicFielddAdd = (idx) => {
   if(this.state.industry.socialMediaHandlesArray.length<5) this.state.industry.socialMediaHandlesArray.push({handle : "",subscriberCount: ""})
  }
  eventDynamicFielddDelete = (idx) => {
    this.state.industry.socialMediaHandlesArray.splice(idx, 1);
  }
  selectedCountry = (event) => {
    if(event && event.id){
      this.setState((prevState) => ({
        industry: { ...prevState.industry, country: event.id },
        errors: { ...prevState.errors, country: null },
        eventAutoFocus:  false
      }));
    }
  }
  changeDateofBirth = date => {
    this.setState((prevState) => ({
      industry: { ...prevState.industry, dateofBirth: date },
      errors: { ...prevState.errors,dateofBirth: null },
    }));
};
  openModalCheckbox = () => this.setState({ modalCheckboxOpen: true });
  closeModalCheckbox = () => this.setState({ modalCheckboxOpen: false });
  handleAgree = () => {
    this.closeModalCheckbox();
    let dateobj;
    this.enableSubmit(dateobj);

  };
  isCheckedMedia = (event) => {
    let value = false;
    if (event.target.checked === true) {
      value = true;
    }
    this.setState((prevState) => ({
      industry: { ...prevState.industry, mediaCheckbox: value },
    }), () => {
    });
  }

  toggleCheckbox = (event) => {
    event.persist();
    let key = event.target.value;
    let checked = event.target.checked;
    this.setState((prevState) => ({
      industry: {
        ...prevState.industry,
        ...(prevState.industry[event.target.id][key] = checked),
      },
      errors: { ...prevState.errors, [event.target.id]: null },
    }));
  };
  toggleMediaCheckbox = (event, industry) => {
    let key = event.target.value;
    let keyName = industry.typeName;
    let hiddenKey = industry.typeId;
    let helpText = industry.helpText;
    let submit = false;
    const arr = this.state.industryTypes;
    let tempArr = [...arr];
    tempArr.forEach(element => {
      if (event.target.checked === false) {
        element.isShow = true;
        key = '';
        helpText = '';
        submit = true;
      }
      else {
        if (element.typeId !== hiddenKey) {
          element.isShow = false;
        }
      }
    });
    this.setState({ industryType: key, industryName: keyName, industryTypes: tempArr, helpText: helpText, submitdisabled: submit });

    this.setState((prevState) => ({
      industry: {
        ...prevState.industry, firstName: '', lastName: '', company: '',
        webSite: '', address: '', contactNumber: '', email: '', publicationName: '', publicationLink: '',
        jobTitle: '', password: '', confirmPassword: '', mediaCredentials: '', licenseFileUpload: '',
        multiFileUpload: {}, photoFileUpload: {}, Age: '', dateofBirth: '', gender: '', attendedE3: '', isMember: '',
        supervisorName: '', supervisorEmail: '', coveredE3: [], socialMediaHandles: '', socialMediaHandlesArray: [{handle : "",subscriberCount: ""}], employerPhone: '',
        country: '', state: '', city: '', mediaOptions: '', mediaCheckbox: false
      },
      errors: {}
    }));
  };

  commonObj = () => {
    return {
      firstName: this.state.industry.firstName,
      lastName: this.state.industry.lastName,
      email: this.state.industry.email,
      password: this.state.industry.password,
      confirmPassword: this.state.industry.confirmPassword,
      address: this.state.industry.address,
      city: this.state.industry.city,
      state: this.state.industry.state,
      country: this.state.industry.country,
      postalCode: this.state.industry.postalCode,
      industryType: this.state.industry.mediaOptions,
      terms: this.state.industry.terms,
      contactNumber: this.state.industry.contactNumber
    }
  }


  commonCompanyObj = () => {
    return {
      company: this.state.industry.company,
      webSite: this.state.industry.webSite,
      jobTitle: this.state.industry.jobTitle,
    }
  }

  handleIndustrySignup = async (event) => {
    let industryObj = {};
    let industryName = this.state.industryName;
    let industryArray = this.state.fileValidations;
    let dateobj;
    if (this.state.industryType === SIGNUP_FAN) {
      dateobj  = moment(this.state.industry.dateofBirth).format("MM/DD/YYYY");
      
    } 
    industryArray.forEach(element => {
      if (element.name === industryName) {
        industryObj = element;
      }
    });
    event.preventDefault();
    let MediaObj = {
      firstName: this.state.industry.firstName,
      lastName: this.state.industry.lastName,
      jobTitle: this.state.industry.jobTitle,
      publicationName: this.state.industry.publicationName,
      publicationLink: this.state.industry.publicationLink,
      employerPhone: this.state.industry.employerPhone,
      // address: this.state.industry.address,
      city: this.state.industry.city,
      state: this.state.industry.state,
      country: this.state.industry.country,
      postalCode: this.state.industry.postalCode,
      // contactNumber: this.state.industry.contactNumber,
      email: this.state.industry.email,
      socialMediaHandles: this.state.industry.socialMediaHandles,
      coveredE3: this.state.industry.coveredE3,
      password: this.state.industry.password,
      confirmPassword: this.state.industry.confirmPassword,
      supervisorName: this.state.industry.supervisorName,
      supervisorEmail: this.state.industry.supervisorEmail,
      dateofBirth:this.state.industry.dateofBirth,
      industryType: this.state.industry.mediaOptions,
      mediaCheckbox: this.state.industry.mediaCheckbox
    }
    let IndustryObj = {
      firstName: this.state.industry.firstName,
      lastName: this.state.industry.lastName,
      company: this.state.industry.company,
      jobTitle: this.state.industry.jobTitle,
      email: this.state.industry.email,
      webSite: this.state.industry.webSite,
      // address: this.state.industry.address,
      city: this.state.industry.city,
      state: this.state.industry.state,
      country: this.state.industry.country,
      postalCode: this.state.industry.postalCode,
      password: this.state.industry.password,
      confirmPassword: this.state.industry.confirmPassword,
      coveredE3: this.state.industry.coveredE3,
      isMember: this.state.industry.isMember,
      dateofBirth:this.state.industry.dateofBirth,
    }
    let ExhibitorObj = {
      firstName: this.state.industry.firstName,
      lastName: this.state.industry.lastName,
      password: this.state.industry.password,
      confirmPassword: this.state.industry.confirmPassword,
      onlineHandle: this.state.industry.onlineHandle,
      partneredChannel: this.state.industry.partneredChannel,
      nameofChannel: this.state.industry.nameofChannel,
      linktoChannel: this.state.industry.linktoChannel,
      socialMediaHandlesArray: this.state.industry.socialMediaHandlesArray,
      // /*subscriberCount: this.state.industry.subscriberCount,*/
      // address: this.state.industry.address,
      city: this.state.industry.city,
      state: this.state.industry.state,
      country: this.state.industry.country,
      postalCode: this.state.industry.postalCode,
      email: this.state.industry.email,
      linktoWebsite:this.state.industry.linktoWebsite,
      coveredE3: this.state.industry.coveredE3,
      ManagerName: this.state.industry.ManagerName,
      ManagerEmail: this.state.industry.ManagerEmail,
      dateofBirth:this.state.industry.dateofBirth,
      mediaCheckbox: this.state.industry.mediaCheckbox
    }
    let FanObj = {
      firstName: this.state.industry.firstName,
      lastName: this.state.industry.lastName,
      password: this.state.industry.password,
      confirmPassword: this.state.industry.confirmPassword,
      city: this.state.industry.city,
      state: this.state.industry.state,
      country: this.state.industry.country,
      postalCode: this.state.industry.postalCode,
      email: this.state.industry.email,
      dateofBirth:this.state.industry.dateofBirth,
    }
    let formData;

    if (this.state.industryType === SIGNUP_MEDIA) {
      formData = MediaObj;
    }
    else if (this.state.industryType === SIGNUP_INDUSTRY) {
      formData = IndustryObj;
    }
    else if (this.state.industryTypeSignin === SIGNUP_CREATOR) {
      formData = ExhibitorObj;
    }
    else if (this.state.industryType === SIGNUP_FAN) {
      formData = FanObj;
    }
    if(this.state.industry.ismemberofAIAS === true){
      formData.couponCode = this.state.industry.couponCode;
    }
    if (industryObj.isMultipleUpload === true) {
      formData.multiFileUpload = this.state.industry.multiFileUpload;
      formData.minVal = industryObj.min;
      formData.maxVal = industryObj.max;
    }
    if (industryObj.isSingleUpload === true) {
      formData.photoFileUpload = this.state.industry.photoFileUpload;
      formData.minVal = industryObj.min - 1;
      formData.maxVal = industryObj.max - 1;
    }

     formData.terms = this.state.industry.terms;
    // let formData = { ...this.state.industry };
    let errors = validateData(formData);
    if (Object.keys(errors).length) {
      if (document.getElementById(Object.keys(errors)[0]) != null) {
        if(Object.keys(errors)[0] === "terms") {
          document.getElementById("termlink").focus();
        }
      }
      
      this.setState({ errors: errors,eventAutoFocus: true });
      return;
    } else {
      this.setState({ errors: {} });
    }
    if (this.state.industryType === SIGNUP_MEDIA || this.state.industryType === SIGNUP_CREATOR) {
      if (formData.mediaCheckbox === true) {
        this.openModalCheckbox();
        return;
      }
    }
    this.enableSubmit(dateobj);
  };
  enableSubmit = async (dateobj) => {
    this.setState({ loginLoading: true, submitdisabled: true });
    fireClickEvent(null, this.props.history.location.pathname, "industry_signup_register_click", { "userid": this.state.industry.email });
    let response = await this.props.onSignup(this.prepareSignupCustomerData(dateobj));
    this.setState({ loginLoading: false, submitdisabled: false });
    if (response) {
      this.props.history.push("/signup/thankyou/"+this.state.industryType);
    } else {
      console.log("Invalid response", response);
    }
  }

  prepareSignupCustomerData = (dateobj) => {
    
    let data;
    let multiFileArray;
    let multifileobj = {};
    let years = [];
    let yearobj;
    let optout = "0";
    let terms = "0";
    if (this.state.industryType === SIGNUP_INDUSTRY || this.state.industryType === SIGNUP_MEDIA || this.state.industryType === SIGNUP_CREATOR) {
      multiFileArray = Object.values(this.state.industry.multiFileUpload);
      if (this.state.industryName === "Broadcast Media/Journalists") {
        let singleFileArray = {};
        singleFileArray = Object.values(this.state.industry.photoFileUpload);
        multiFileArray.push({ "type": singleFileArray[0].type, "name": "photo_" + singleFileArray[0].name, "content": singleFileArray[0].content })
      }
      multiFileArray.forEach((data, i) => {
        let index = i + 1;
        multifileobj['FileType' + index] = data.type;
        multifileobj['FileName' + index] = data.name;
        multifileobj['FileData' + index] = data.content;
      })

    }
    if(this.state.industryType === SIGNUP_INDUSTRY || this.state.industryType === SIGNUP_MEDIA|| this.state.industryType === SIGNUP_CREATOR){
    this.state.industry.coveredE3.forEach((data,i)=>{
      years.push(data.year)
      yearobj = JSON.stringify(years)
    })
    if(years.length===0){
      yearobj = ""
    }
  }
      if(this.state.industry.terms.Agreed===true){
        terms="1";
      }
      if(this.state.industry.mediaCheckbox===true){
        optout = "1";
      }
    if(this.state.industryType === SIGNUP_INDUSTRY){  
      return this.industryPayload(multifileobj,yearobj,terms);
    } 
    if(this.state.industryType === SIGNUP_FAN){  
      return this.fanPayload(terms,dateobj);
    } 
   
    if(this.state.industryType === SIGNUP_MEDIA){
      return this.mediaPayload(multifileobj,yearobj,terms,optout); 
    }

    if(this.state.industryTypeSignin === SIGNUP_CREATOR){
      return this.exhibitorPayload(yearobj,terms,optout,multifileobj);    
    } 


};
fanPayload(terms,dateobj){
    let data = { 
      "data":{
      "filedata": {}, 
      "customer": { 
          "email":  this.state.industry.email, 
          "firstname": this.state.industry.firstName, 
          "lastname": this.state.industry.lastName, 
          "confirmation":"Review",
          "dob": this.state.industry.dateofBirth,
          "addresses": [ 
              { 
                "region": { 
                  "region": this.state.industry.state
              },
                  "telephone": "0000000000", 
                  "postcode": this.state.industry.postalCode,
                  "city": this.state.industry.city,
                  "firstname": this.state.industry.firstName, 
                  "lastname": this.state.industry.lastName, 
                  // "street": [ 
                  //   this.state.industry.address
                  // ], 
                  "country_id": this.state.industry.country, 
                  "default_shipping": true, 
                  "default_billing": true, 
                  "extension_attributes": {}, 
                  "custom_attributes": [
                  ] 
              } 
          ], 
          "custom_attributes": [ 
            { 
              "attribute_code": "signuptospopup", 
              "value": terms 
          },
          {
            "attribute_code": "IndustryType",
            "value": this.state.industryType
          },
          {
            "attribute_code": "SignupType",
            "value": this.state.industryType
          },  
          ] 
      }, 
      "password": this.state.industry.password 
    } 
    }
    return data;
  }

mediaPayload(multifileobj,years,terms,optout){
  let data = { 
    "data":{
    "filedata": multifileobj, 
    "customer": { 
        "email": this.state.industry.email, 
        "firstname": this.state.industry.firstName, 
        "lastname": this.state.industry.lastName,
        "confirmation":"Review", 
        "dob": this.state.industry.dateofBirth,
        "addresses": [ 
            { 
                "region": { 
                    "region": this.state.industry.state
                }, 
                // "telephone": this.state.industry.contactNumber, 
                "city": this.state.industry.city,
                "postcode": this.state.industry.postalCode,
                "firstname": this.state.industry.firstName, 
                "lastname": this.state.industry.lastName, 
                // "street": [ 
                //   this.state.industry.address
                // ], 
                "country_id": this.state.industry.country, 
                "default_shipping": true, 
                "default_billing": true, 
                "extension_attributes": {}, 
                "custom_attributes": [] 
            } 
        ], 
        "custom_attributes": [ 
            { 
                "attribute_code": "publication", 
                "value": this.state.industry.publicationName 
            }, 
            { 
              "attribute_code": "publicationlink", 
              "value": this.state.industry.publicationLink 
          }, 
            { 
                "attribute_code": "jobtitle", 
                "value": this.state.industry.jobTitle 
            }, 
            { 
              "attribute_code": "editorName", 
              "value": this.state.industry.supervisorName 
            },
            {
              "attribute_code": "editorEmail",
              "value": this.state.industry.supervisorEmail
            },
            {
              "attribute_code": "socialmedia",
              "value": this.state.industry.socialMediaHandles
            },
            {
              "attribute_code": "businessNumber",
              "value": this.state.industry.employerPhone
            },
            {
              "attribute_code": "attendedyear",
              "value": years
            },
            {
              "attribute_code": "signuptospopup",
              "value": terms
            },
            {
              "attribute_code": "optout",
              "value": optout
            },
            {
              "attribute_code": "IndustryType",
              "value": this.state.industryType
            },
            {
              "attribute_code": "SignupType",
              "value": this.state.industryType
          },

          ]
        },
        "password": this.state.industry.password
      }
    }
    return data;
  }
  exhibitorPayload(years, terms, optout, multifileobj) {
    let data = {
      "data": {
        "filedata": multifileobj, 
        "customer": {
          "email": this.state.industry.email,
          "firstname": this.state.industry.firstName,
          "lastname": this.state.industry.lastName,
          "confirmation": "Review",
          "dob": this.state.industry.dateofBirth,
          "addresses": [
            {
              "region": {
                "region": this.state.industry.state
              },
              // "company": this.state.industry.company, 
              // "telephone": this.state.industry.contactNumber, 
              "city": this.state.industry.city,
              "postcode": this.state.industry.postalCode,
              "firstname": this.state.industry.firstName,
              "lastname": this.state.industry.lastName,
              // "street": [
              //   this.state.industry.address
              // ],

              "country_id": this.state.industry.country,
              "default_shipping": true,
              "default_billing": true,
              "extension_attributes": {},
              "custom_attributes": []
            }
          ],
          "custom_attributes": [
            {
              "attribute_code": "onlineHandle",
              "value": this.state.industry.onlineHandle
            },
            {
              "attribute_code": "parterneredChannel",
              "value": this.state.industry.partneredChannel
            },
            {
              "attribute_code": "channelName",
              "value": this.state.industry.nameofChannel
            },
            {
              "attribute_code": "channelLink",
              "value": this.state.industry.linktoChannel
            },
            {
              "attribute_code": "socialmedia",
              "value": this.state.industry.socialMediaHandlesArray
            },
            {
              "attribute_code": "websiteLink",
              "value": this.state.industry.linktoWebsite
            },
            /*{
              "attribute_code": "subscriberCount",
              "value": this.state.industry.subscriberCount
            },*/
            {
              "attribute_code": "managersName",
              "value": this.state.industry.ManagerName
            },
            {
              "attribute_code": "managersEmail",
              "value": this.state.industry.ManagerEmail
            },
            {
              "attribute_code": "attendedyear",
              "value": years
            },
            {
              "attribute_code": "signuptospopup",
              "value": terms
            },
            {
              "attribute_code": "IndustryType",
              "value": this.state.industryType
            },
            {
              "attribute_code": "SignupType",
              "value": this.state.industryType
            },
            {
              "attribute_code": "optout",
              "value": optout
            },
          ]
        },
        "password": this.state.industry.password
      }
    }
    return data;
  }
  industryPayload(multifileobj, years, terms) {
    let data = {
      "data": {
        "filedata": multifileobj,
        "customer": {
          "coupon_code" : this.state.industry.couponCode,
          "email": this.state.industry.email,
          "firstname": this.state.industry.firstName,
          "lastname": this.state.industry.lastName,
          "confirmation": "Review",
          "dob": this.state.industry.dateofBirth,
          "addresses": [
            {
              "region": {
                "region": this.state.industry.state
              },
              "company": this.state.industry.company,
              // "telephone": this.state.industry.contactNumber,
              "postcode": this.state.industry.postalCode,
              "city": this.state.industry.city,
              "firstname": this.state.industry.firstName,
              "lastname": this.state.industry.lastName,
              // "street": [
              //   this.state.industry.address
              // ],
              "country_id": this.state.industry.country,
              "default_shipping": true,
              "default_billing": true,
              "extension_attributes": {},
              "custom_attributes": []
            }
          ],
          "custom_attributes": [
            {
              "attribute_code": "companyWebsite",
              "value": this.state.industry.webSite
            },
            {
              "attribute_code": "jobtitle",
              "value": this.state.industry.jobTitle
            },
            {
              "attribute_code": "member",
              "value": this.state.industry.isMember
            },
            {
              "attribute_code": "attendedyear",
              "value": years
            },
            {
              "attribute_code": "signuptospopup",
              "value": terms
            },
            {
              "attribute_code": "IndustryType",
              "value": this.state.industryType
            },
            {
              "attribute_code": "SignupType",
              "value": this.state.industryType
            },
           

          ]
        },
        "password": this.state.industry.password
      }
    }
    return data;
  }
  handleDOBChange = (e) =>{
    let val = e.target.value;
    if (val.length === 2) {

      val += '/';

    } else if (val.length === 5) {

      val += '/';

    }
    else if (val.length === 11) {

      return false;

    }
    this.setState((prevState) => ({
      industry: { ...prevState.industry, dateofBirth: val },
      errors: { ...prevState.errors,dateofBirth: null },
      eventAutoFocus:  false
    }));
  }
  DOBkeyPressFunc = (e) => {
    if(e.which === 8) {
      var val = this.state.industry.dateofBirth;
      if(val.length == 3 || val.length == 6) {
          val = val.slice(0, val.length-1);
          this.setState((prevState) => ({
            industry: { ...prevState.industry, dateofBirth: val },
            errors: { ...prevState.errors,dateofBirth: null },
            eventAutoFocus:  false
          }));
      }
    }
  }


  uploadImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      const typeError = this.isValidFile(file);
      if (typeError) {
        e.target.value = null;
        this.setState((prevState) => ({
          industry: { ...prevState.industry, licenseFileUpload: "" },
          errors: { ...prevState.errors, licenseFileUpload: typeError },
        }));
        return;
      }
      const imageContent = await this.convertToBase64(file);
      this.setState((prevState) => ({
        industry: { ...prevState.industry, licenseFileUpload: imageContent },
      }));
    } else {
      this.setState((prevState) => ({
        industry: { ...prevState.industry, licenseFileUpload: "" },
      }));
    }
  };

  isValidFile = (file, count) => {
    let fileType = PHOTOFILE_UPLOAD_TYPES;
    if (count === "multiple") {
      fileType = MULTIPLEFILE_UPLOAD_TYPES;
    }
    if (fileType.every((type) => file.type !== type)) {
      return "Invalid File Format";
    }
    if (file.size > FILE_UPLOAD_MAX_SIZE) {
      return (
        "File is greater than allowed size - " +
        FILE_UPLOAD_MAX_SIZE / (1000 * 1000) +
        "MB"
      );
    }

    return undefined;
  };

  convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  goBack = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };

  handler = () => {
    this.setState((prevState) => ({
      industry: { ...prevState.industry, terms: { Agreed: true } },
      errors: { ...prevState.errors, terms: null },
    }));
  };

  handleScroll = (event) => {
    const target = event.target;

    const val1 = Math.ceil(target.scrollHeight - target.scrollTop) + 5;
    const val2 = Math.ceil(target.scrollHeight - target.scrollTop) - 5;
    const val3 = target.clientHeight;
    if (val1 >= val3 && val2 <= val3) { // Adjust for Android as well
      const updatedTerms = { ...this.state.industry.terms };
      updatedTerms["readTermsOfServices"] = true;
      this.setState((prevState) => ({ industry: { ...prevState.industry, terms: updatedTerms } }));
    }
  };

  termsAgreedHanlder = () => {
    const updatedTerms = { ...this.state.industry.terms };
    updatedTerms["Agreed"] = true;
    this.setState((prevState) => ({ industry: { ...prevState.industry, terms: updatedTerms } }));
  };


  termsClickHandler = () => {
    const updatedTerms = { ...this.state.industry.terms };
    updatedTerms["Agreed"] = !updatedTerms["Agreed"];
    this.setState((prevState) => ({ industry: { ...prevState.industry, terms: updatedTerms } }));
  };

  getTermsPolicyHandler = async () => {
    const payLoad = { type: "industry" }
    const updatedTerms = { ...this.state.industry.terms };
    if(!updatedTerms.dataLoaded){
      console.log("122122");
      this.setState({termsloading: true});
      const response = await Account.getTermsOfService(payLoad);
      if (response) {
        updatedTerms["termsOfServices"] = response.terms;
        updatedTerms.dataLoaded = true;
        this.setState({termsloading: false});
      } else {
        updatedTerms.dataLoaded = false;
        updatedTerms["termsOfServices"] = "Sorry! We are unable to fecth Terms of Services at this time. Please contact Admin";
      }
    }
    this.setState((prevState) => ({ industry: { ...prevState.industry, terms: updatedTerms } }));
  }

  multiFileDeleteHandler = (fileName) => {
    const multiFiles = {};
    Object.keys(this.state.industry.multiFileUpload).map((eachFileName, index) => {
      if (eachFileName !== fileName) {
        multiFiles[eachFileName] = this.state.industry.multiFileUpload[eachFileName];
      }
    });

    this.setState((prevState) => ({
      industry: { ...prevState.industry, multiFileUpload: multiFiles, multifilereset: '' },
    }));

  }
  multiFileSelectedHandler = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const typeError = this.isValidFile(file, "multiple");
      if (typeError) {
        e.target.value = null;
        this.setState((prevState) => ({
          //industry: { ...prevState.industry, licenseFileUpload: "" },
          errors: { ...prevState.errors, multiFileUpload: typeError },
        }));
        return;
      }
      const imageContent = await this.convertToBase64(file);
      console.log("imageContent",imageContent)
      this.setState((prevState) => ({
        industry: { ...prevState.industry, multiFileUpload: { ...prevState.industry.multiFileUpload, [file.name]: { content: imageContent, size: file.size, name: file.name, type: file.type } } },
        errors: { ...prevState.errors, multiFileUpload: '' },
      }));
      console.log(this.state.industry.multiFileUpload[file.name].size);
    }

  };

  photoFileSelectedHandler = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const typeError = this.isValidFile(file, "single");
      if (typeError) {
        e.target.value = null;
        this.setState((prevState) => ({
          //industry: { ...prevState.industry, licenseFileUpload: "" },
          errors: { ...prevState.errors, photoFileUpload: typeError },
        }));
        return;
      }
      const imageContent = await this.convertToBase64(file);
      this.setState((prevState) => ({
        industry: { ...prevState.industry, photoFileUpload: { [file.name]: { content: imageContent, size: file.size, name: file.name, type: file.type } } },
        errors: { ...prevState.errors, photoFileUpload: '' },
      }));
    }
  };

  photoFileDeleteHandler = (fileName) => {

    this.setState((prevState) => ({
      industry: { ...prevState.industry, photoFileUpload: {}, singlefilereset: '' },
    }));
  }

  onSelect = (selectedList, selectedItem) => {
    this.chosenYears(selectedList);
  }
  genderChangeFunction=(e)=>{
    this.setState((prevState) => ({
      industry: { ...prevState.industry, gender: e.value },
    }));
  }
  memberChangeFunction=(e)=>{
    console.log("e.label",e.label)
    let isMember = false;
    if(e.label === "Yes"){
      isMember = true;
    }
    this.setState((prevState) => ({
      industry: { ...prevState.industry, isMember: e.label ,ismemberofAIAS:isMember},
    }));
  }

  onRemove = (selectedList, removedItem) => {
    this.chosenYears(selectedList);
  }
  chosenYears = (selectedList) => {
    this.setState((prevState) => ({
      industry: { ...prevState.industry, coveredE3: selectedList },
      eventAutoFocus:  false
    }));
  }
  openInfo = () => {
    this.setState({
      infoIconOpen: true
    });
  }
  closeInfomodal = () => {
    this.setState({
      infoIconOpen: false
    });
  }

  pageTitle () {
    const moduleType = this.state.industryType || this.state.industryTypes.filter(o => o.isShow && (o.groupid === this.state.industryTypeSignin || this.state.industryTypeSignin === "All"))[0]?.groupid;
    if(moduleType === SIGNUP_FAN){
     return document.title="E3 Expo Event-Fan SignUp";
    }
    else if(moduleType ===SIGNUP_MEDIA)
    {
      return document.title="E3 Expo Event-Media SignUp";
    }
    
    else if(moduleType ===SIGNUP_INDUSTRY)
    {
      return document.title="E3 Expo Event-Industry SignUp";
    }
    else if(moduleType === SIGNUP_CREATOR)
    {
      return document.title="E3 Expo Event-Influencer/Creator SignUp";
    }
    return moduleType;
}

  handleKeyDownFn = ({ event, state, props, methods, setState }) => {
    const { cursor } = state;
    const escape = event.key === 'Escape';
    const enter = event.key === 'Enter';
    const arrowUp = event.key === 'ArrowUp';
    const arrowDown = event.key === 'ArrowDown';
    if (enter && cursor === null) {
      return setState({ cursor: 0, dropdown: true });
    }

  }
  

  render() {

    return (

      <React.Fragment>
                <PopulateMetaTags  title={this.pageTitle()} description={this.pageTitle()}/>

        <main id="main-content" className="from_containeralign safearea-header"  role="main">
        <div className="my-5"></div>
          <Container>
            <Col>
              <div className="safearea-top px-0 sp-container-pad">
                <Link aria-label=" back to signup page" onClick={this.goBack} to={() => { }}>

              <a className="cursor underline bold_A" role="button">
                <span className="text-lg pr-1">
                  <ArrowLeft />
                </span>
              BACK
            </a>
                </Link>
              </div>
              </Col>
            <Col className="industry-header mt-4">
              <Row>
                <Col className="text-center" id="signup_page">
                  {this.state.industryTypeSignin === SIGNUP_FAN ?
                    <h1 className="text-xl text-uppercase word-space">
                      Attendee  /  Public Attendance
                </h1>
                    :
                    this.state.industryTypeSignin === SIGNUP_MEDIA ?
                      <h1 className="text-xl text-uppercase gray word-space">
                        Media
              </h1> :
                      this.state.industryTypeSignin === SIGNUP_INDUSTRY ?
                        <h1 className="text-xl text-uppercase gray word-space">
                          Industry
               </h1> :
                        this.state.industryTypeSignin === SIGNUP_CREATOR ?
                          <h1 className="text-xl text-uppercase gray word-space">
                            Influencer  /  Creator
                </h1> : null
                  }
                  <p className="my-4 text-muted text-md">
                    Please enter your details below
                </p>
              </Col>
            </Row>
            {this.state.containerLoading ? (
                    <React.Fragment>
                      <Spinner
                        className="position-absolute left-0 right-0 mt-1 cont_spinnercolor"
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Loading...</span>
                    </React.Fragment>
                  ) : (
                      <React.Fragment></React.Fragment>
                    )}
            <Row className="">
              <Col aria-labelledby="signup_page">
              {this.state.industryType === SIGNUP_FAN || this.state.industryTypeSignin === SIGNUP_CREATOR ?null:
                <div className="text-uppercase font-weight-bold text-left gray">
                  Industry Type
                </div>
                  }
                  <Row xs={1} md={2} lg={3}  >
                    {this.state.industryTypes.map(industry =>
                      this.state.industryTypeSignin === SIGNUP_CREATOR ? null :
                        this.state.industryTypeSignin === "All" ?
                          industry.isShow === true ?
                            (

                              <Col key={industry.typeId} >
                                <Form.Group
                                  controlId={industry.typeName}
                                  className="font-weight-normal"
                                >

                                  <Form.Check inline
                                    type="checkbox"
                                    label={industry.typeName}
                                    value={industry.groupid}
                                    onChange={(e) => { this.toggleMediaCheckbox(e, industry) }}
                                  />
                                  <div className="d-block d-md-none cursor" aria-label="informatiom for broadcast" tabIndex="0" onClick={this.openInfo} onKeyPress={this.openInfo}>{this.state.helpText ? <InfoCircleFill className="text-lg" /> : null}</div>
                                </Form.Group>
                              </Col>

                            ) :
                            null
                          :
                          industry.groupid === this.state.industryTypeSignin ?

                            industry.isShow === true ?
                              (

                                <Col key={industry.typeId}>
                                  <Form.Group
                                    controlId={industry.typeName}
                                    className="font-weight-normal"
                                  >

                                    <Form.Check inline
                                      type="checkbox"
                                      label={industry.typeName}
                                      value={industry.groupid}
                                      onChange={(e) => { this.toggleMediaCheckbox(e, industry) }}
                                    />
                                    <div className="d-block d-md-none cursor inlineCircle" aria-label="informatiom for Digital production" tabIndex="0" onClick={this.openInfo} onKeyPress={this.openInfo}>{this.state.helpText ? <InfoCircleFill className="text-lg" /> : null}</div>
                                  </Form.Group>
                                </Col>

                              ) :
                              null
                            : null

                    )}
                  </Row>
                  {this.state.errors.mediaOptions && (
                    <p className="text-danger">
                      {this.state.errors.mediaOptions}
                    </p>
                  )}
               
              </Col>
            </Row>
            <Row>
              <Col className="d-none d-md-block">
                {this.state.helpText ?
                  <div className="d-flex justify-content-between align-items-center helptext_bg helpbgcolor">
                    <div className="mr-2"><InfoCircleFill className="text-lg" /></div>
                    <div><p className="mb-0">{this.state.helpText}</p></div>
                  </div>
                  : null}
              </Col>
            </Row>
            {this.state.industryType === SIGNUP_MEDIA || this.state.industryType === SIGNUP_INDUSTRY || this.state.industryTypeSignin === SIGNUP_CREATOR ||
            this.state.industryType === SIGNUP_FAN ?
            <Row>
              <Col>
                <p className="text-danger pt-4">* Required Fields</p>
              </Col>
            </Row>
            : null}
            {this.state.industryType === SIGNUP_MEDIA ?
              <MediaFields {...this.state} eventFunction={this.changeHandler} mediaChecked={this.isCheckedMedia}
                countrySelected={this.selectedCountry}
                handleKeyDownFn={this.handleKeyDownFn}
                multipleFileDeleteHandler={(fileName) => { this.multiFileDeleteHandler(fileName) }}
                multipleFileSelectHandler={(e) => { this.multiFileSelectedHandler(e) }}
                photoFileDeleteHandler={(fileName) => { this.photoFileDeleteHandler(fileName) }}
                photoFileSelectHandler={(e) => { this.photoFileSelectedHandler(e) }}
                selectFunction={this.onSelect} removeFunction={this.onRemove} isExhibitor={false}
                handleDOBChange={this.handleDOBChange} DOBkeyPressFunc={this.DOBkeyPressFunc}
              /> :
              [(this.state.industryType === SIGNUP_INDUSTRY ?
                <IndustryFields {...this.state} eventFunction={this.changeHandler}
                countrySelected={this.selectedCountry} fileUpload={(e) => { this.uploadImage(e) }}
                handleKeyDownFn={this.handleKeyDownFn}
                multipleFileDeleteHandler={(fileName) => { this.multiFileDeleteHandler(fileName) }}
                multipleFileSelectHandler={(e) => { this.multiFileSelectedHandler(e) }}
                photoFileDeleteHandler={(fileName) => { this.photoFileDeleteHandler(fileName) }}
                photoFileSelectHandler={(e) => { this.photoFileSelectedHandler(e) }}
                selectFunction={this.onSelect} removeFunction={this.onRemove} genderFunction={this.genderChangeFunction}
                memberFunction={this.memberChangeFunction} isExhibitor={false}
                handleDOBChange={this.handleDOBChange} DOBkeyPressFunc={this.DOBkeyPressFunc}
                /> :
                [(this.state.industryTypeSignin === SIGNUP_CREATOR ?
                  <ExhibitorFields {...this.state} eventFunction={this.changeHandler} 
                  mediaChecked={this.isCheckedMedia} eventDynamicFunction={this.socialChangeHandler} 
                  eventDynamicFielddAdd={this.eventDynamicFielddAdd}
                   eventDynamicFielddDelete={this.eventDynamicFielddDelete}
                  countrySelected={this.selectedCountry} selectFunction={this.onSelect} removeFunction={this.onRemove} 
                  isExhibitor={true}  multipleFileDeleteHandler={(fileName) => { this.multiFileDeleteHandler(fileName) }}
                  multipleFileSelectHandler={(e) => { this.multiFileSelectedHandler(e) }}
                  handleDOBChange={this.handleDOBChange} DOBkeyPressFunc={this.DOBkeyPressFunc}/> :
                  [(this.state.industryType === SIGNUP_FAN ?
                    <Attendee {...this.state} eventFunction={this.changeHandler}
                      countrySelected={this.selectedCountry} dateofBirthchange={this.changeDateofBirth}
                      handleDOBChange={this.handleDOBChange} DOBkeyPressFunc={this.DOBkeyPressFunc}/> :
                    null)])])]}


              <Row>
                <Col >
                {
                    this.state.errors.terms &&
                    <p className="text-danger termerrormsg">{this.state.errors.terms}</p>
                  }
                  <Form.Group controlId="terms" className="d-flex justify-content-start align-items-center">

                  <Form.Check inline disabled={!this.state.industry.terms.readTermsOfServices} aria-label="I agree to the terms of services" className="px-0" type="checkbox" value="Agreed" label="I agree to the"
                    onChange={this.termsClickHandler}
                    checked={this.state.industry.terms.Agreed} />
                  <TermofService {...this.state} handleScroll={this.handleScroll}
                  
                    readTermsOfServices={this.state.industry.terms.readTermsOfServices}
                    termsAgreedHanlder={this.termsAgreedHanlder}
                    getTermsPolicyHandler={this.getTermsPolicyHandler}
                    termsOfServices={this.state.industry.terms.termsOfServices}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Modal show={this.state.modalCheckboxOpen} onHide={this.closeModalCheckbox} size="lg" aria-labelledby="contained-modal-title-vcenter"
              centered backdrop="static" keyboard={false}>
              <Modal.Header className="font-weight-light border-0 p-0 pb-3" closeButton />
              <Modal.Body className="pb-0  px-5">
                <Row>
                  <Col className="text-center">
                    <p className="text-lg gray3 font-weight-400 text-center">
                      Are you sure you want to opt-out of being included in the official E3 2021 Media List? By opting-out, official E3 exhibitors, publishers and partners may not be able to include you in their outreach regarding media-related announcements, invites and opportunities. If you change your mind and would like to opt-in to the official E3 Media List, please email <span className="text-red text-underline">media@e3expo.com</span>
                    </p>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer className="pt-0 pb-5">
                <Row className="text-center justify-content-center align-items-center m-auto ">
                  <Col className="text-center PrimaryBtn_checkboxgreen pt-3 " sm={6} xs={12}>
                    <Button variant="primary" size="xs" onClick={this.handleAgree} >YES</Button>
                  </Col>
                  <Col className="text-center PrimaryBtn_checkbox pt-3 " sm={6} xs={12}>
                    <Button variant="primary" size="xs" onClick={this.closeModalCheckbox} >NO</Button>
                  </Col>
                </Row>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.infoIconOpen} onHide={this.closeInfomodal} className="InfoModal ">
              <Modal.Header className="font-weight-light border-0" closeButton />
              <Modal.Body className="">
                <Row>
                  <Col className="d-block d-md-none">
                    {this.state.helpText ?
                      <div className="d-flex justify-content-between align-items-start helptext_bg helpbgcolor">
                        <div className="mr-4"><InfoCircleFill className="text-lg" /></div>
                        <div><p className="mb-0">{this.state.helpText}</p></div>
                      </div>
                      : null}
                  </Col>
                </Row>
              </Modal.Body>

            </Modal>
            <Row>
              <Col className="text-center PrimaryBtn pb-4 sp-bttop">
              {this.state.industryType === SIGNUP_MEDIA || this.state.industryType === SIGNUP_INDUSTRY || this.state.industryTypeSignin === SIGNUP_CREATOR ||
              this.state.industryType === SIGNUP_FAN ?
                <p className="text-danger">
                  Please fill out all the Required Information
                </p>
                : null}
                  <Button
                    variant="primary"
                    className="my-2 "
                    size="sm"
                    onClick={this.handleIndustrySignup}
                    disabled={this.state.submitdisabled}
                  >
                    {this.state.loginLoading ? (
                      <React.Fragment>
                        <Spinner
                          className="position-absolute left-0 right-0 mt-1"
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Loading...</span>
                      </React.Fragment>
                    ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    <span>SIGNUP</span>

                  </Button>
                </Col>
              </Row>

              <Row className="my-4"></Row>
            </Col>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Industry));


