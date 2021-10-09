import React, { useState } from 'react';
import { Form,Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import FocusLock, { AutoFocusInside } from "react-focus-lock";
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';
import { useIdleTimer } from 'react-idle-timer'
import { logoutAction } from '../../../redux/actions/authAction';
import { useDispatch } from "react-redux";
import {isLoggedin} from './../../../services/AuthService'

const SessionHelper = () =>{
   
    const dispatch = useDispatch();
    const history = useHistory();
    let initialSessionState = {
        showPopup: false,
        timeOutVar: null
    }
    const [sessionState, setSessionState] = useState(initialSessionState);

    const showSessionPopup=(showFlag)=>{
        setSessionState({...sessionState,showPopup:showFlag});
    }

    console.log("timeOutVar before create",sessionState.timeOutVar)

    const cancelShowPopup=()=>{
        clearTimeout(sessionState.timeOutVar);
        showSessionPopup(false);
        if (isLoggedin()) {
            logoutAction({})(dispatch);
            history.push("/login");
        }
    }

    const continueSessionAction = () => {
        if(sessionState.timeOutVar){
            clearTimeout(sessionState.timeOutVar);
        }
        showSessionPopup(false);
        handleReset();
    }

    const timer = () => {
        setTimeout(() => {
            cancelShowPopup();
        },
        (1000 * 60 * process.env.REACT_APP_SESSION_WARNING_TIME_MINS)
        //250 * 60 * 1 // For testing only
        )
    };

    const handleOnIdle = event => {
        if (!window.cordova && isLoggedin()) {
            //showSessionPopup(true);
            const timerId = timer();
            setSessionState({...sessionState,showPopup:true, timeOutVar:timerId});
            console.log("timeOutVar after create",sessionState.timeOutVar)
        }
    }
    const {
        reset,
        pause,
        resume,
        getRemainingTime,
        getLastActiveTime,
        getElapsedTime
      } = useIdleTimer({
        timeout: 1000 * 60 * (process.env.REACT_APP_SESSION_TIME_OUT_MINS),
        //timeout: 500 * 60 * 1, // For testing only
        onIdle: handleOnIdle,
        eventsThrottle: 1000,
        debounce: 1000
    })

    const handleReset = () => reset();

    if( window.cordova){
        return null;
    }
    
    return (
        <Modal centered show={sessionState.showPopup} dialogClassName="" onHide={cancelShowPopup}>
                <FocusLock>
                    <AutoFocusInside>
                        <Modal.Header className="font-weight-light border-0 pt-0" closeButton >
                            Session Timeout
                        </Modal.Header>
                        <Modal.Body className="pb-md-3 pt-3 px-md-3">
                            <Form.Group className="">
                                <Form.Label> 
                                    You are being timed out due to inactivity. Please chose to stay signed in or logoff. 
                                    <br/>Otherwise you will be logged off automatically.
                                </Form.Label>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer className="pt-0 pb-3">
                            <div className="d-flex justify-content-end align-items-center">
                                <Button variant="primary" size="xs" onClick={continueSessionAction} className="mr-2 submit"><span className="pr-2"><CheckCircleFill /></span>Extend Session</Button>
                                <Button variant="primary" size="xs" className="cancel" onClick={cancelShowPopup}><span className="pr-2"><XCircleFill /></span>Log Off</Button>
                            </div>
                        </Modal.Footer>
                    </AutoFocusInside>
                </FocusLock>
            </Modal>
    )

} 

export default SessionHelper;