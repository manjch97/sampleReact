import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  class UserProfileAbout extends Component {

    state = {

    }

    componentDidMount() {

    }


    render(){
            
        return (
            <React.Fragment>
                <h4 className='e3-tab-title'>About Me</h4>
                <p className='e3-contentdesc'>Hi guys, I'm Sorata Noshu and my nick name is Sorammm. I'm 23 years old and living in New York City.Hi guys, I'm Sorata Noshu and my nick name is Sorammm. I'm 23 years old living in New York City. Share and follow me. Like, share and follow me.</p>
                <p className='e3-contentdesc'>If you like my streaming or wanna talk with me so you can send me your messages or soramm2122@example.com If you like my streaming or wanna talk with me you can send me your messages or soramm2122@example.com</p>
                <p className='e3-contentdesc'>Hi guys, I'm Sorata Noshu and my nick name is Sorammm. I'm 23 years old and living in New York City.Hi guys, I'm Sorata Noshu and my nick name is Sorammm. I'm 23 years old and living New York City. Like, share and follow me. Like, share and follow me.</p>
                <p className='e3-contentdesc e3-thanks'>Thank you very much.</p>
            </React.Fragment>
        );
    }
  }
  export default UserProfileAbout;
