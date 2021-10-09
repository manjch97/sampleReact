import React from "react";
import { WebHeader } from "../../helper/CommonHelper";
import NavTabsMain from "./navtabs/NavTabsMain";
import SideNavMain from "../common/sidenav/SideNavMain";
import BoothHeader from "./BoothHeader";
import {PopulateMetaTags} from "../../helper/CommonHelper";

const BoothMain = (props) => {


    return (
        <React.Fragment>
            <PopulateMetaTags  title={"E3 Expo Event-Booth Main"} description={"E3 Expo Event-Booth Main"}/>
            <WebHeader props={props} />
            <main className="e3-main-wrapper">
                <SideNavMain />
                <section className="e3-content-wrapper">
                    <div className="containerspace">
                        <BoothHeader props={props} />
                        <NavTabsMain props={props} />
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}
export default BoothMain;

