import React, { Component, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import PublicDemo from "./publicDemos/PublicDemo";
import GameInvite from "./gameInvites/gameInvite";
import './NavTabs.scss';

export const NavTabsMain = (props) => {
    const [key, setKey] = useState('PUBLIC DEMOS');
    return (
        <React.Fragment>
            <Tabs className='e3-nav-tabs bottonspace_tap15' role="tablist" transition={false} defaultActiveKey={key}
                onSelect={(k) => setKey(k)}>
                <Tab className='p-0' eventKey="PUBLIC DEMOS" title="PUBLIC DEMOS">
                    {
                        key === "PUBLIC DEMOS" && <PublicDemo upcomingGames={props.upcomingGames} />
                    }
                </Tab>
                <Tab className='e3-event-tab p-0' eventKey="DEMO INVITES" title="DEMO INVITES" >
                    {
                        key === "DEMO INVITES" && <GameInvite upcomingGames={props.upcomingGames} />
                    }
                </Tab>
            </Tabs>
        </React.Fragment>
    );
}

