import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WebHeader } from "../../helper/CommonHelper";
import SideNavMain from "../common/sidenav/SideNavMain";
import {PopulateMetaTags} from "../../helper/CommonHelper";

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  class ViewAllBooths extends Component {

    state = {

    }

    componentDidMount() {

    }

    render(){
            
        return (
            <React.Fragment>
                <PopulateMetaTags  title={"E3 Expo Event-Booth"} description={"E3 Expo Event-Booth"}/>
                <WebHeader props={this.props}/>
                <main className="e3-main-wrapper">
                <SideNavMain/>
                <section className="e3-content-wrapper">
                    <div className="containerspace">
                    </div>
                </section>
                </main>
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ViewAllBooths));
