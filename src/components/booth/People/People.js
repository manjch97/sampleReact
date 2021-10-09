import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GetSpinner, WebHeader } from "../../../helper/CommonHelper";
import SideNavMain from "../../common/sidenav/SideNavMain";
import PeopleNetwork from './PeopleNetwork';
import PeopleInfo from './PeopleInfo';
import {Col,Row} from 'react-bootstrap';
import RecommendedPeople from '../../People/recommendations/RecommendedPeople';
import {PopulateMetaTags} from "../../../helper/CommonHelper";
import { Global, Customer } from "../../../services/Api";
import { PEOPLE_ALL_MAX_RECORDS } from "../../../constants/CommonConstants";
import { displayToastSuccess } from "../../../helper/ToastHelper";

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
});
  
const mapDispatchToProps = (dispatch) => ({});

class People extends Component {
   state = { 
            peopleToNetwork: {
             isLoading: false, 
             data: []
            },
            allPeople: {
               isLoading: false, 
               data: [],
               page: 1, 
               hasMore: true
            },
            cardLoading: {}
          };

   componentDidMount() {
       this.getPeopleToNetwork();
       this.getAllPeople(this.state.allPeople.page);
   }

   getAllPeople = (pageNumber) => {
      if(PEOPLE_ALL_MAX_RECORDS <= pageNumber){
          this.setState(prevState => ({
            allPeople: { ...prevState.allPeople, isLoading: true, hasMore: false}
          }));
          return;
      }

      const payload = {
                          "paginationDetails":{
                              "page": pageNumber
                          }
                      };
      console.log("About to call All People api with payload: ", payload);

      Global.getAllPeople(payload).then(response => {
          if(response && response.length >=1) {
              this.setState(prevState => ({
                  allPeople: { 
                     ...prevState.allPeople, 
                     page : pageNumber, 
                     isLoading: false, 
                     data: prevState.allPeople.data.concat(response)
                  }
             }));
          }else{
            this.setState(prevState => ({
               allPeople: { ...prevState.allPeople, isLoading: false, hasMore: false}
             }));
          }
      }).catch(err => {
        this.setState(prevState => ({
            allPeople: { ...prevState.allPeople, isLoading: false}
        }));
        console.log("Error occured while getting All People", err)
      })
  }

  fetchMorePeople = () => {
      return this.getAllPeople(this.state.allPeople.page + 1);
  }

   getPeopleToNetwork = () => {
      this.setState(prevState => ({
         peopleToNetwork: { ...prevState.peopleToNetwork, isLoading: true}
       }));

      Global.getPeopleToNetwork().then(response => {
          this.setState(prevState => ({
            peopleToNetwork: { ...prevState.peopleToNetwork, isLoading: false, data: response}
          }));
      }).catch(err => {
         this.setState(prevState => ({
            peopleToNetwork: { ...prevState.peopleToNetwork, isLoading: true}
          }));
          console.log(err);
      })
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
      const customersData = this.state.allPeople.data;
      const updatedCustomers = [];

      customersData.map(cust => {
         const updatedCustomer = {...cust};
         if (updatedCustomer.customerId === customer.customerId) {
            updatedCustomer.isFollowing = !customer.isFollowing
         }
         updatedCustomers.push(updatedCustomer);
      })
      this.setState(prevState => ({allPeople: { ...prevState.allPeople, data: updatedCustomers }, cardLoading: {}}));
      displayToastSuccess("Successfully "+(!customer.isFollowing?"following customer":"unfollowed customer"));
   }).catch(err => {
      console.log(err);
      this.setState(prevState => ({
        cardLoading: {}
      }));
   })
 }

 render(){
      let peopleToNetwork = null;
      if(this.state.peopleToNetwork.isLoading){
         peopleToNetwork = <GetSpinner/>
      }else{
         if(!this.state.peopleToNetwork.data){
            peopleToNetwork = <h6>No People Found To Network</h6>
         }else{
         peopleToNetwork = <PeopleNetwork peopleToNetwork = {this.state.peopleToNetwork.data} />
         }
      }

      return (
         <React.Fragment>
            <PopulateMetaTags  title={"E3 Expo Event-People"} description={"E3 Expo Event-People"}/>
               <WebHeader props={this.props}/>
               <main className="e3-main-wrapper">
                  <SideNavMain/>
                  <section className="e3-content-wrapper">
                  <div className="containerspace">
                     <Row>
                        <Col xl={8}>
                           {peopleToNetwork} 
                           <PeopleInfo getAllPeople={this.state.allPeople.data} 
                                 fetchMorePeople = {this.fetchMorePeople} 
                                 hasMore = {this.state.allPeople.hasMore}
                                 page = {this.state.allPeople.page}
                                 followButtonClickHandler = {this.followButtonClickHandler}
                                 cardLoading={this.state.cardLoading}
                           />
                        </Col>
                        <Col xl={4}>
                           <RecommendedPeople/>
                        </Col>
                     </Row>
                  </div>
                  </section>
               </main>
         </React.Fragment>
      );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(People));