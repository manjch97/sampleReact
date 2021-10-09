import React from "react";

import './GameTag.scss';
import TagLogo from '../../../assets/img/booths/pubg.png';
import isURL from "validator/lib/isURL";

export const GameTag = (props) => {
    const { tagData } = props;
    return (
        <React.Fragment>
            {
                tagData && 
                <div className="e3-game-tag">
                    <figure className="e3-game-tag-img">
                        <img src={isURL(tagData?.eventIconUrl) ? tagData.eventIconUrl : TagLogo} alt="loading..." />
                    </figure>
                    <p className="e3-game-tag-text">{tagData.eventTitle}</p>
                </div>
            }
        
        </React.Fragment>
    );
} 