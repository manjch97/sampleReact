import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {BoothBanner} from './BoothBanner';
import {BoothButtons} from './BoothButtons';
import BoothLogo from '../../assets/img/booths/boothLogo.png';
import { BoothDetails } from '../../services/Api'
import { GetSpinner } from "../../helper/CommonHelper";
import { fireClickEvent } from "../../helper/GTMHelper";

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  class BoothHeader extends Component {

    state = {
        boothId: this.props.match?.params?.boothId,
        header:{
            loading:true,
            data:{}
        }
    }

    componentDidMount() {
        new Promise((resolve, reject)=>{
            resolve(BoothDetails.getBoothHeader(this.state.boothId)) // get  Header
        }).then(result => {
            this.setState({
                header :{loading:false, data:result}
            });
          }).catch(err=>{
              this.setState({
                header :{loading:false}
            });
          });
    }

    boothFollowClickHandler = () => {
        const updatedFollowStatus = !this.state.header.data.isFollowing;
        const payload = {isFollowing: updatedFollowStatus};
        fireClickEvent({ id: this.props?.currentUser?.email }, this.props.history?.location?.pathname, "booth_follow_click", { userId: this.props?.currentUser?.email });
        BoothDetails.updateFollowState(this.state.boothId, payload).then(response => {
            this.setState({
                header: {
                    ...this.state.header,
                    data:{
                        ...this.state.header.data,
                        isFollowing: updatedFollowStatus
                    }
                }
            })
        }).catch(err => {
            console.log("Error while updating booth follow status", err);
        })
    }

    render(){

        if(this.state.header.loading === true){
            return (<GetSpinner/>)
        }
        return (
            <div className='e3-booth-header'>
                <BoothBanner boothId={this.state.boothId} image={this.state.header.data.boothBannerUrl} />
                <BoothButtons boothId={this.state.boothId} data={this.state.header.data} boothFollowClickHandler = {this.boothFollowClickHandler}/>
            </div>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BoothHeader));
