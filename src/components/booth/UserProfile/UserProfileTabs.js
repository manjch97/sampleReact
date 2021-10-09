// import BoothAbout from "./about/BoothAbout"
// import Articles from "./articles/Articles"
// import Events from "./events/Events"
// import Media from "./media/Media"
import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import UserProfileAbout from "./UserProfileAbout";
import '../navtabs/NavTabs.scss';

export const UserProfileTabs = (props) => {
    return (
        <React.Fragment>
            <Tabs className='e3-nav-tabs mt-3' transition={false} defaultActiveKey="ABOUT">
                <Tab className='e3-tab-content' eventKey="ABOUT" title="ABOUT">
                    {/* <BoothAbout/> */}
                    <UserProfileAbout/>
                </Tab>
                <Tab className='e3-tab-content e3-event-tab' eventKey="FOLLOWING"  title="FOLLOWING" >
                    {/* <Events/> */}
                </Tab>
                
            </Tabs>
        </React.Fragment>
    );
}

export default UserProfileTabs;