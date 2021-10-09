import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import {Col,Card,Image,Row} from 'react-bootstrap';
import {
    NOTIFICATION_EMPTY
  } from "../../../constants/CommonConstants";

export const NotificationMessages = props => {
    let history = useHistory();
    if(!props.messages || props.messages.length < 1){
        return (<div className="black text-24 font-weight-500">{NOTIFICATION_EMPTY}</div>)
      }
    return (
        <React.Fragment>
            {props.messages.map((item, i) => {
                return(
                    // <Card className="head-card card-noti mt-1 ml-1" style={{ width: '97%' }}>
                    //     <div className="d-flex flex-row cursor" tabIndex="0">
                    //     <div className="p-2 e3-notification-img"> <Image src={item.image} alt="points" />
                    //     <div className={`e3-notification-video recommendVideo`}>
                    //     <FontAwesomeIcon icon={faVideo} />
                    //     </div></div>
                    //     <div className="p-2 mt-1 e3-notification-content"> 
                    //     <p className="e3-notification-name recommendName">{item.name}</p>
                    //         <div className="e3-notification-subtitle">
                    //        {item.subtitle}
                    //         </div>
                    //     </div>
                    //     <div className=" p-2 mt-1 e3-notification-time"> {item.time}</div>
                    //     </div>
                                                            
                    // </Card>
                    <Card className="MessageNotifications"  tabIndex="0" aria-label=" Notification" style={{ width: '95%' }}>
                    <div>
                    <Row>
                    <figure className="e3-notification-img mt-1 ml-3">
                        <img src={item.image} alt="loading.." />
                        <div className={`e3-notification-video ${item.class}`}>
                           <FontAwesomeIcon icon={faVideo} />
                        </div>
                    </figure>
                    <div className=" ml-1"> 
                        <p className="mt-2 messageName">{item.name}</p>
                        <p className="messageSubtitle">{item.subtitle}</p>
                       
                     </div>
                    </Row>
                    </div>
                    <div className="d-flex align-items-center ">
                    <p className="notificationTime">{item.time}</p>
                    </div>
                </Card>
                 
                )
            })}
        </React.Fragment>
        
    )
}
export default NotificationMessages;