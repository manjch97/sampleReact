import React, { useState } from "react";
import DemosInvitesPublic from "./DemosInvitesPublic"
export const ArcadeTabsMain = (props) => {
    const [key, setKey] = useState('PUBLIC DEMOS');
    return (
        <React.Fragment>
            <Tabs defaultActiveKey={key} onSelect={(k) => setKey(k)}>
                <Tab title="PUBLIC DEMOS" eventKey="PUBLIC DEMOS">
                    {
                        key === "PUBLIC DEMOS" && <DemosInvitesPublic props={props.publicDemoData} />
                    }
                </Tab>
                <Tab title="DEMO INVITES" eventKey="DEMO INVITES">
                    {
                        key === "DEMO INVITES" && <DemosInvitesPublic props={props.DemoInviteData} />
                    }
                </Tab>
            </Tabs>
        </React.Fragment>
    );
}

