import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  class Goals extends Component {

    state = {

    }

    componentDidMount() {

    }

    render(){
            
        return (
            <React.Fragment>
                Goals
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Goals));
