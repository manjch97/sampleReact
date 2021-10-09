import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {fireClickEvent} from '../../helper/GTMHelper'

const mapStateToProps = (state) => ({
    currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

class DemosInvitesPublic extends Component {

    state = {

    }

    componentDidMount() {
        fireClickEvent({ id: this.props?.currentUser?.email }, this.props.history?.location?.pathname, "arcade_publicdemos_click", { userId: this.props?.currentUser?.email });
    }

    render() {

        return (
            <React.Fragment>
                PublicDemos or Demo Invites will be rendered based on the NavTab click
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DemosInvitesPublic));
