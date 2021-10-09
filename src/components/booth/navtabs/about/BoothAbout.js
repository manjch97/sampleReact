import React from "react";
import { GetSpinner } from "../../../../helper/CommonHelper";
import {
    ABOUT_EMPTY
  } from "../../../../constants/CommonConstants";

const BoothAbout = (props) => {

    const about = props.data;
    if (about.loading) {
        return <GetSpinner/>;
    }
    if (about.dataLoaded && about.data.length <= 0) {
        return (<div className="black text-24 font-weight-500">{ABOUT_EMPTY}</div>)
    }

    return (
        <React.Fragment>
            <h4 className='e3-tab-title'>{about.data.title}</h4>
            <p className="e3-contentdesc">
                {about.data.description}
            </p>
        </React.Fragment>
    );
}
export default BoothAbout;