import React from "react";
import { Tab, Tabs, Container, Row, Col, Button, Image } from "react-bootstrap";
import { RewardTabsMain } from "./RewardTabsMain";
import Rewards from "./Rewards";



export const GoalsrewardsTabs = (props) => {
    return (
        <React.Fragment>
            <Tabs className='e3-nav-tabs goals-popup-tabs' transition={false} defaultActiveKey="GOALS">
                <Tab className='e3-tab-content' eventKey="GOALS" title="GOALS">
                    <RewardTabsMain {...props} />
                </Tab>
                {props.goalsrewards !== "true" ?
                    <Tab className='e3-tab-content e3-event-tab pt-0' eventKey="REWARDS" title="REWARDS">
                        <Rewards />
                    </Tab>
                    : null}
                {props.goalsrewards === "true" ?
                    <Tab className='e3-tab-content e3-event-tab pt-0' eventKey="REWARDS" title="REWARDS" disabled>
                        <Rewards />
                    </Tab>
                    : null}
            </Tabs>
        </React.Fragment>
    );
}

export default GoalsrewardsTabs;