import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import './RecommendPeople.scss';
import { GetSimpleAvatar } from "../../../helper/CommonHelper";
import {
    RECOMMENDEDPEOPLE_EMPTY
  } from "../../../constants/CommonConstants";
export const RecommendedActive = props => {
    let history = useHistory();
    if(!props.activePeople || props.activePeople.length < 1){
        return (<div className="black text-24 font-weight-500">{RECOMMENDEDPEOPLE_EMPTY}</div>)
      }
    return (
        <React.Fragment>
            {props.activePeople.map(customer => {
                return(
                        <div key={customer.customerId} className="e3-people-item-recommend">
                            <div className="figure_act my-1">
                                <figure className="e3-people-img-recommend" onClick={()=>history.push('/global/userdetails/'+ customer.customerId)}>
                                    <GetSimpleAvatar avatarUrl={customer.avatarUrl} avatarInitial={customer.avatarInitial}/>
                                    <div className={`e3-people-video-tag-recommend recommendVideo ${customer.isOnline && 'e3-people-online'}`}>
                                        <FontAwesomeIcon icon={faVideo} />
                                    </div>
                                </figure>
                            </div>
                            <div className="e3-people-content-recommend" onClick={()=>history.push('/global/userdetails/'+ customer.customerId)}>
                                <p className="e3-people-name-recommend recommendName">{customer.displayName}</p>
                                <div className="e3-people-tags-recommend">
                                {customer.tags.map((tag, index) => {
                                    return <span key={`tag${index}`} className="badge">{tag}</span>
                                })}
                                </div>
                            </div>
                            <button type='button' className="btn btn-warning btn-sm  py-0 follow" onClick = {(event) => props.followButtonClickHandler(event, customer.customerId)}>
                                Follow
                            </button>
                        </div>
                )
            })}
        </React.Fragment>
        
    )
}
export default RecommendedActive;