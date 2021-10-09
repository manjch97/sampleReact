import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import { ListDemos } from '../listDemos/ListDemos';
import { GamesDemos } from "../../../../services/Api";
import { GetSpinner } from "../../../../helper/CommonHelper";
import {fireClickEvent} from '../../../../helper/GTMHelper'
import InfiniteScroll from "react-infinite-scroll-component";
import { GAME_DEMOS_MAX_RECORDS } from "../../../../constants/CommonConstants";

const mapStateToProps = (state) => ({
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  class PublicDemo extends Component {

    state = {
        publicdemos: undefined,
        loading: false,
        hasMore: true,
        page: 1
    }

    componentDidMount() {
       // this.setState({loading: true});
        this.getPublicDemos(this.state.page);
        fireClickEvent({id:this.props?.currentUser?.email}, this.props.history?.location?.pathname, "gamedemos_publicdemos_click", {userId:this.props?.currentUser?.email});
    }

    //Get the Public Demos from the server
    getPublicDemos = async (pageNumber) => {
        if(GAME_DEMOS_MAX_RECORDS <= pageNumber){
            this.setState({ 
                loading: false, 
                hasMore: false
            });
            return;
        }
        const payload = {
                            "paginationDetails":{
                                "page": pageNumber
                            }
                        };
        console.log("About to call Game DEMO - Public demos api with payload: ", payload);
        const response = await GamesDemos.getPublicDemos(payload);
        if(response && response.length >=1) {
            this.setState(prevState => ({
                    page : pageNumber, 
                    publicdemos: prevState.publicdemos? prevState.publicdemos.concat(response) : response,
                    loading: false
            }));
        }else{
            this.setState({ 
                loading: false, 
                hasMore: false
            });
        }
    } 
    fetchMorePublicDemos = () => {
        this.getPublicDemos(this.state.page + 1);
    }   

    render(){
        let publicDemoData = null;

        if (this.state.loading === true) {
            publicDemoData = <GetSpinner />;
        }else if(this.state.publicdemos && this.state.publicdemos.length > 0){
            publicDemoData = (
                <React.Fragment>
                    
                            <Row>
                                <Col className="">
                                    <ListDemos hasMore={this.state.hasMore} fetchMorePublicDemos={this.fetchMorePublicDemos} publicdemos={this.state.publicdemos} />
                                </Col>
                            </Row>
                
                </React.Fragment>
            );
        }
        return publicDemoData;
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PublicDemo));
