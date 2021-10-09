import React, { Component } from "react";
import { connect } from "react-redux";
import "../PeopleNetwork.scss";
import RecommendedActive from './RecommendedActive';
import { Customer } from "../../../services/Api";
import { GetSpinner} from "../../../helper/CommonHelper";
import { Container } from "react-bootstrap";

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
});
  
const mapDispatchToProps = (dispatch) => ({});

class RecommendedPeople extends Component {

    state = { isLoading: false, recommendedPeople: undefined};

    componentDidMount(){
        this.getRecommendedPeople();
    }

    getRecommendedPeople = () => {
        this.setState({ isLoading: true });
        console.log("About to call Recommended People api ");
    
        Customer.getRecommendedPeople().then(response => {
            this.setState({ recommendedPeople: response, isLoading: false });
        }).catch(err => {
          this.setState({ isLoading: false });
          console.log("Error occured while getting Recommended People", err)
        })
    }

    followButtonClickHandler = (event, customerId) => {
        event.preventDefault();
        this.setState({ isLoading: true });

        const payLoad = {
            "customerId": customerId,
            "isFollowing": true
          };
        Customer.followCustomer(payLoad).then(response => {
            // Hanldle Response
            //this.setState({ isLoading: false });
            this.getRecommendedPeople();
        }).catch(err => {
            this.setState({ isLoading: false });
            console.log(err);
        })
    }

    render(){
        let people = null;

        if(this.state.isLoading){
            people = <GetSpinner/>
        }else {
            people = (
                <Container >
                    <RecommendedActive
                        followButtonClickHandler = {this.followButtonClickHandler} 
                        activePeople={this.state.recommendedPeople ? this.state.recommendedPeople : []} />
                </Container>
            );
         }
            
        return (
            <React.Fragment>
                <div className="e3-booth-header">
                <p className="head1">RECOMMENDED PEOPLE</p>
                    {people}
                </div>
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(RecommendedPeople);