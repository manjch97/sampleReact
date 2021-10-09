import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import PeopleItemPeople from "../People/PeopleItemPeople";
import FilterButton from "./FilterButton";
import './PeopleActive.scss';
import { Customer, Global } from "../../services/Api";
import { PEOPLE_ACTIVE_ALL_MAX_RECORDS } from "../../constants/CommonConstants";
import { GetSpinner } from "../../helper/CommonHelper";
import { displayToastSuccess } from "../../helper/ToastHelper";

  class PeopleActive extends Component {

    navRef = React.createRef();
    state = {
      activePeople : { 
                      data:[],
                      page:1, 
                      loading:false, 
                      hasMore: true
                    },
      cardLoading: {}
    }
   
      handleNav = (direction) => {
        const width = this.navRef.current.offsetWidth;
        if (direction === 'left') {
          this.navRef ? (this.navRef.current.scrollLeft -= width) : null;
        } else {
          this.navRef ? (this.navRef.current.scrollLeft += width) : null;
        }
      }

      getAllActivePeople = (pageNum,init) => {
        const payload = {
            page : pageNum
        }
        if(pageNum > PEOPLE_ACTIVE_ALL_MAX_RECORDS){ // Reached max pages for active people
          this.setState(prevState => ({
            activePeople : {...prevState.activePeople,hasMore: false,loading:false}
          }));
          return;
        }
        new Promise((resolve, reject)=>{
          resolve(Global.getAllActivePeople(payload));
        }).then(result => {
            console.log("getAllActivePeople",result);
            const hasMore = result && result?.length > 0;
            this.setState(prevState => ({
              activePeople : {...prevState.activePeople, hasMore:hasMore, data:init?(result?result:[]):prevState.activePeople.data.concat(result?result:[]), page:pageNum, loading:false}
            }));
          }).catch(err=>{
              this.setState(prevState => ({
                activePeople : {...prevState.activePeople,hasMore:false, data:init?[]:prevState.activePeople.data, page:pageNum, loading:false}
            }));
          });
      }

      componentDidMount = () => { 
        console.log("componentDidMount people active");
        this.setState(prevState => ({
          activePeople : {...prevState.activePeople,loading:true}
        }));
        this.getAllActivePeople(1,true);
      }
      
      followButtonClickHandler = (event, customer) => {
        event.preventDefault();
     
        const payLoad = {
            "customerId": customer.customerId,
            "isFollowing": !customer.isFollowing
        };

        this.setState(prevState => ({
          cardLoading: {[customer.customerId]:true}
        }));

        Customer.followCustomer(payLoad).then(response => {
          if(response){ // Update data Array with follow/unfollow
            const tmpActivePeopleData = {...this.state.activePeople};
            console.log("tmpActivePeopleData",tmpActivePeopleData);
            const selectedCustomer = tmpActivePeopleData.data.filter(eachCust => eachCust.customerId === customer.customerId);
            if(selectedCustomer?.length >= 1){ // match
              selectedCustomer[0].isFollowing = payLoad.isFollowing;
            }
            this.setState(prevState => ({
              activePeople : tmpActivePeopleData,
              cardLoading: {}
            }));
            displayToastSuccess("Successfully "+(payLoad.isFollowing?"following customer":"unfollowed customer"));
          }
        }).catch(err => {
            console.log(err);
            this.setState(prevState => ({
              cardLoading: {}
            }));
        })
      }

    render(){
            
        return (
            <React.Fragment>
                <div className="justify-content-between flexContainer marginsp_bottom">
                  <h1 className="headp_title"><span className="active-people">ACTIVE </span> PEOPLE</h1>
                  <FilterButton/>
                  <div type='button' className='e3-people-arrow-card-scroll d-block d-md-none'>
                    <div className="flexContainer">
                        <FontAwesomeIcon icon={faAngleLeft} className="scrollIcon"
                        onClick={() => this.handleNav('left')}></FontAwesomeIcon>
                        &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faAngleRight} className="scrollIcon"
                        onClick={() => this.handleNav('right')}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
                {
                  this.state.activePeople.loading 
                  ? 
                  <GetSpinner/>
                  :
                  <PeopleItemPeople 
                    refe={this.navRef} 
                    activePeople={this.state.activePeople.data} 
                    getAllActivePeople={this.getAllActivePeople}
                    hasMore={this.state.activePeople.hasMore}
                    page={this.state.activePeople.page}
                    followButtonClickHandler={this.followButtonClickHandler}
                    cardLoading={this.state.cardLoading}
                  />
                }
            </React.Fragment>
        );
    }
  }
  export default PeopleActive;