import React from "react";
import { useHistory } from "react-router-dom";
import isURL from "validator/lib/isURL";
import Image1 from '../../../../assets/img/booths/1.svg';
import { AutoFocusInside } from "react-focus-lock";

export const ArticleSideBarItem = (props) => {
    let history = useHistory();
    const { data } = props;
    return (
        <AutoFocusInside>
            <div className='e3-article-side-item align-items-center'  tabIndex="1" onClick={()=> history.push('/booths/'+ props.boothId +'/featurearticles/'+ data.articleId)} >
                <div className='e3-article-side-img'>
                    <img src={isURL(data?.imageUrl) ? data.imageUrl : Image1} alt="loading... " />
                </div>
                <div>
                    <h6 className='e3-article-side-title'>{data.articleTitle}</h6>
                    <small className='e3-article-side-date'>{data.articleDate}</small>
                </div>
            </div>
        </AutoFocusInside>
    )
}