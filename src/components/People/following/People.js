import React, { Component } from "react"
import { Row } from "react-bootstrap";
import { Customer } from "../../../services/Api";
import PeopleItem from './PeopleItem';
import '../PeopleCard.scss'
import { GetSpinner } from "../../../helper/CommonHelper";
import { PEOPLE_FOLLOWING_MAX_RECORDS } from "../../../constants/CommonConstants";

class People extends Component {

    state = { isLoading: false, followingPeople: [], page: 1, hasMore: true};

    componentDidMount(){
        this.setState({ isLoading: true });
        this.getFollowingPeople(this.state.page);
    }

    getFollowingPeople = (pageNumber) => {
        if(PEOPLE_FOLLOWING_MAX_RECORDS <= pageNumber){
            this.setState({ 
                isLoading: false, 
                hasMore: false
            });
            return;
        }

        const payload = {
                            "paginationDetails":{
                                "page": pageNumber
                            }
                        };
        console.log("About to call People Following api with payload: ", payload);

        Customer.peopleFollowing(payload).then(response => {
            if(response && response.length >=1) {
                this.setState(prevState => ({
                        page : pageNumber, 
                        followingPeople: prevState.followingPeople.concat(response),
                        isLoading: false
                }));
            }else{
                this.setState({ 
                    isLoading: false, 
                    hasMore: false
                });
            }
        }).catch(err => {
          this.setState({ isLoading: false });
          console.log("Error occured while getting People Following results", err)
        })
    }

    fetchMorePeople = () => {
        return this.getFollowingPeople(this.state.page + 1);
    }

    unfollowButtonClickHandler = (event, customerId) => {
        event.preventDefault();
        this.setState({ isLoading: true });

        const payLoad = {
            "customerId": customerId,
            "isFollowing": false
          };
        Customer.followCustomer(payLoad).then(response => {
            // Hanldle Response
            this.getFollowingPeople(1);
        }).catch(err => {
            this.setState({ isLoading: false });
            console.log(err);
        })
    }

    render(){
        let content = null;

        if(this.state.isLoading){
           content = <GetSpinner/>;
        }else if(this.state.followingPeople) {
            content = (
                <Container-fluid>
                    <Row className="scrollCard flex-sm-nowrap flex-md-wrap rowno-sp" ref={this.props.refe}>
                        <PeopleItem 
                                    followingPeople={this.state.followingPeople} 
                                    fetchMorePeople = {this.fetchMorePeople} 
                                    hasMore = {this.state.hasMore}
                                    page = {this.state.page}
                                    unfollowButtonClickHandler = {this.unfollowButtonClickHandler}
                        />
                    </Row>
                </Container-fluid>
            );
        }
        return content;
    }
}
export default People;