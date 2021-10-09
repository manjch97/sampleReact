import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './PeopleNetwork.scss'
// import './ActivePeopleItem.scss';
import './RecommendPeople.scss'
export const RecommendedActive = (props) => {
    const {activePeople} = props;
    return (
        <React.Fragment>
            {activePeople.map((item, i) => {
                return(
                    <div key={`${item.name}${i}`} className="e3-people-item-recommend">
                        <figure className="e3-people-img-recommend recommendImage">
                            <img src={item.image} alt=''/>
                            <div className="e3-people-video-tag-recommend recommendVideo">
                                <FontAwesomeIcon icon={faVideo} />
                            </div>
                        </figure>
                        <div className="e3-people-content-recommend">
                            <p className="e3-people-name-recommend recommendName">{item.name}</p>
                            <div className="e3-people-tags-recommend">
                            {item.tags.map((tag, index) => {
                                return <span tabIndex="4" key={`tag${index}`} className="badge">{tag}</span>
                            })}
                            </div>
                        </div>
                        <button type='button' className="btn btn-warning   py-0 follow" style={{color:"#333333"}} tabIndex="4">
                            Follow
                        </button>
                    </div>
                )
            })}
        </React.Fragment>
        
    )
}
export default RecommendedActive;