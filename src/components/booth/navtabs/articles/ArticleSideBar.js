import React from "react";
import {ArticleSideBarItem} from './ArticleSideBarItem';

export const ArticleSideBar = (props) => {
    
    const sideArticleData = props.data;
    return (
        <React.Fragment>
            <h4 className='e3-tab-title'>Articles</h4>
            {
                sideArticleData.data.map((item,index) => {
                    return <ArticleSideBarItem key={`articleSideItem${index}`} data={item} boothId = {props.boothId} />
                })
            }
        </React.Fragment>
    )
}