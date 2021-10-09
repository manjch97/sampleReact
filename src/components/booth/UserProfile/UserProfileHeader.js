import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {UserProfileBanner} from './UserProfileBanner'
import {UserProfileButtons} from './UserProfileButtons'
import BoothBannerImage from '../../../assets/img/booths/banner.jpg';
import UserProfilePic from '../../../assets/img/booths/people/1.jpg';

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  class UserProfileHeader extends Component {

    state = {

    }

    componentDidMount() {

    }

    BoothLayout = ()=>{
        
    }

    render(){
        const boothTitle = {
            logo: UserProfilePic,
            name: 'Ked Demon',
            season: 'E3 2021',
            status: 'Live'
        }
        return (
            <div className='e3-booth-header'>
                <UserProfileBanner image={BoothBannerImage} />
                <UserProfileButtons boothTitle={boothTitle} />
            </div>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UserProfileHeader));
