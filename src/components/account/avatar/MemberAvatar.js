import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../../../assets/styles/style.scss";
import "../../common/header/Header.scss";
import { GetSpinner, WebHeader } from "./../../../helper/CommonHelper";
import { fireClickEvent } from "../../../helper/GTMHelper";
import { ArrowRight } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAvatarUpdateAction } from "../../../redux/actions/authAction";
import {PopulateMetaTags} from "../../../helper/CommonHelper";
import { Profile } from "../../../services/Api";
import { displayToastError, displayToastSuccess } from "../../../helper/ToastHelper";
import { FaLastfmSquare } from "react-icons/fa";

const MemberAvatar = (props) => {
    
  const history = useHistory();
  const dispatch = useDispatch();
  const currentLoggedinUser = useSelector(
    state => state.auth.user
  );

  const [confirmEnabled,setEnableConfirm] = useState(false);
  const [loading,setLoading] = useState(false);

  const uploadFailure=(img)=>{
    console.log("In React, got control back with failure...");
    userAvatarUpdateAction({avatarUrl:img})(dispatch);
  }
  const confirmAvatar=()=>{
    let flag = window.triggerConfirmAction();
    if(!flag){
      //you can show valiation message here
    }
  }

  const enableConfirm=()=>{
    setEnableConfirm(true);
  }
  
  const gotoInterests=()=>{
    fireClickEvent({id:currentLoggedinUser?.email}, history?.location?.pathname,"avatar_skip_click",{userId:currentLoggedinUser?.email});
    history.push("/profile/interests");
  }

  const gotoInterestsAfterAvatar=()=>{
    fireClickEvent({id:currentLoggedinUser?.email}, history.location.pathname,"avatar_confirm_click",{userId:currentLoggedinUser?.email});
    history.push("/profile/interests");
  }
  
  const uploadSuccess= async (img)=>{
    if(img){
      const payload = {
        fileName:"Avatar-"+(Math.random() + '').replace('0.', ''),
        fileType:"png",
        imgData:img
      }
      setLoading(true);
      const response = await Profile.saveAvatar(payload);
      setLoading(false);
      if(response){
        userAvatarUpdateAction({avatarUrl:img})(dispatch);
        gotoInterestsAfterAvatar();
      }
    }
    
  }

    useEffect(() => {
      window.loadAvatar(uploadSuccess,uploadFailure,process.env.REACT_APP_SELF_URL,process.env.REACT_APP_GATEWAY_BASEURL,enableConfirm);
    },[]);

    return (
      <React.Fragment>
        <PopulateMetaTags  title={"E3 Expo Event-Avatar"} description={"E3 Expo Event-Avatar"}/>
        <WebHeader props={props} />
        {props.mobile ?
          <div className="my-3 pt-3"></div>
          : <div className="my-4 pt-5"></div>
        }
        <Container>
          <Col md={{ span: 8, offset: 2 }}>
            <Row className="text-center justify-content-center align-items-center m-auto">
              <Col md="auto">
                <h1 className="avatar_title">CREATE YOUR <span>AVATAR</span></h1>
                <div id="svgAvatars" tabIndex="0" aria-label=" Avatar Change"></div>
              </Col>
            </Row>
          </Col>
          <Col>
          <div className="text-center PrimaryBtn my-3">
            <Button variant="primary" className="my-2" size="sm" disabled={!confirmEnabled} onClick={confirmAvatar} onKeyPress={confirmAvatar}>
              Confirm
            </Button>{loading && <GetSpinner/>}
          </div>
              <div className="text-center" onClick={gotoInterests} onKeyPress={gotoInterests}>
                  <b className="cursor gray-light text-muted" tabIndex="0" aria-label=" Skip Avatar Editing">
                    Skip
                    <span className="text-lg pl-1">
                      <ArrowRight />
                    </span>
                  </b>
                </div>
                <br/>
                <br/>
          </Col>
        </Container>
      </React.Fragment>
    );
  }
  export default MemberAvatar;