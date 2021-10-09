import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {GetSimpleAvatar} from './../../../helper/CommonHelper'
import './ActivePeopleItem.scss';
import { useHistory } from "react-router-dom";
export const ActivePeopleItem = (props) => {
    const history = useHistory();

    const navigateToUserProfile=(customerId)=>{
        history.push("/global/userdetails/"+customerId)
    }

    const {activePeople} = props;
    if(!activePeople){
        return (<h5>No Active People</h5>);
    }
    return (
        <React.Fragment>
            {activePeople.map((item, i) => {
                return(
                    <div key={`${item.displayName}${i}`} className="e3-people-item">
                        <div className="figure_act">
                            <figure className="e3-people-img">
                                <GetSimpleAvatar avatarUrl={item.avatarUrl} avatarInitial={item.avatarInitial}/>
                                <div className="e3-people-video-tag">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </figure>
                        </div>
                        <div className="e3-people-content">
                            <p className="e3-people-name">{item.displayName}</p>
                            <div className="e3-people-tags">
                            {item.status.map((tag, index) => {
                                return <span key={`tag${index}`} className="badge">{tag}</span>
                            })}
                            </div>
                        </div>
                        <button type='button' aria-label={`Person Details-${item.customerId}`}  className='e3-people-arrow' onClick={()=>navigateToUserProfile(item.customerId)}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                )
            })}
        </React.Fragment>
        
    )
}