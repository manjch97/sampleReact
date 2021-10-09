import React, { Component } from "react";
import { Button, Row, Col, Form, Container, Tabs, Tab } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import {TopicCommentor,TopicHotQuestion,ForumTopicDetails, TopicReplyDetails} from './ForumComponents'
import { connect } from "react-redux";
import { WebHeader } from "../../helper/CommonHelper";
import { FEATURED, RECENT } from "../../constants/CommonConstants";
import { Forum } from "../../services/Api";
import { fireClickEvent } from "../../helper/GTMHelper";
import {PopulateMetaTags} from "../../helper/CommonHelper";

const mapStateToProps = state => ({
    currentUser: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    
});

class ForumDetailsMain extends Component {

    componentDidMount() {
    
    }

    state = {
        TopicDetails: {
            forumId: this.props.match?.params?.forumId,
            data: {},
            loading: false
        },
        Comments :{
            data: [],
            loading: false
        },
        currentTab: { FEATURED },
        TopCommentors: {
            data: [],
            loading: false
        },
        HotQuestion: {
            data: {},
            loading: false
        }
    }

    initData = () => {
        this.loadTopicDetails();
        this.loadComments();
        this.loadTopCommentors();
        this.loadHotQuestion();
    }

    goBack = (e) => {
        this.props.history.goBack();
    };

    componentDidMount=()=>{
        this.initData();
    }
    componentDidUpdate = (prevProps, prevState)=>{

        if(this.props.match?.params?.forumId  !== prevProps.match?.params?.forumId){
            this.setState({
                TopicDetails: {
                    forumId: this.props.match?.params?.forumId,
                    data: {},
                    loading: false
                },
                Comments :{
                    data: [],
                    loading: false
                },
                currentTab: { FEATURED },
                TopCommentors: {
                    data: [],
                    loading: false
                },
                HotQuestion: {
                    data: {},
                    loading: false
                }
            });
            this.initData();
        }
    }

    loadComments = () =>{
        // always from first
        this.setState(prevState => ({
            Comments: { ...prevState.Comments, loading: true },
        }));
        // Call API to get the data 
        console.log("calling API to get the Topic Details data")
        Forum.getComments(this.state.TopicDetails.forumId).then(res => {
            // Hanldle Response
            this.setState(prevState => ({
                Comments: { ...prevState.Comments, loading: false, data: res ? res : [] },
            }));
        }).catch(err => {
            console.log("Erro getComments",err);
            this.setState(prevState => ({
                Comments: { ...prevState.Comments, loading: false, data: [] },
            }));
        })
    }

    getNextPageComments = (page)=>{
        // incremental
    }

    loadTopicDetails = () =>{
        this.setState(prevState => ({
            TopicDetails: { ...prevState.TopicDetails, loading: true },
        }));
        // Call API to get the data 
        console.log("calling API to get the Topic Details data")
        Forum.getForumDetails(this.state.TopicDetails.forumId).then(res => {
            // Hanldle Response
            this.setState(prevState => ({
                TopicDetails: { ...prevState.TopicDetails, loading: false, data: res ? res : {} },
            }));
        }).catch(err => {
            console.log("Erro getForumDetails",err);
            this.setState(prevState => ({
                TopicDetails: { ...prevState.TopicDetails, loading: false, data: {} },
            }));
        })
    }

    loadHotQuestion = () => {
        this.setState(prevState => ({
            HotQuestion: { ...prevState.HotQuestion, loading: true },
        }));
        // Call API to get the data 
        console.log("calling API to get the Hot Question data")
        Forum.getHotQuestion().then(res => {
            // Hanldle Response
            this.setState(prevState => ({
                HotQuestion: { ...prevState.HotQuestion, loading: false, data: res ? res : {} },
            }));
        }).catch(err => {
            console.log(err);
            this.setState(prevState => ({
                HotQuestion: { ...prevState.HotQuestion, loading: false, data: {} },
            }));
        })
    }

    loadTopCommentors = () => {
        this.setState(prevState => ({
            TopCommentors: { ...prevState.TopCommentors, loading: true },
        }));
        // Call API to get the data 
        console.log("calling API to get the Commentors data")
        Forum.getTopCommentors().then(res => {
            // Hanldle Response
            this.setState(prevState => ({
                TopCommentors: { ...prevState.TopCommentors, loading: false, data: res ? res : [] },
            }));

        }).catch(err => {
            console.log(err);
            this.setState(prevState => ({
                TopCommentors: { ...prevState.TopCommentors, loading: false, data: [] },
            }));
        })

    }

    updateLike = (forumId,liked) =>{
        const likePayload = {
            forumId: forumId,
            customerId: this.props.currentUser?.id,
            liked: liked?'Y':'N'
        }
        fireClickEvent({id:this.props.currentUser?.id}, this.props.history.location.pathname,"forumdetail_like",likePayload);
        Forum.setForumLike(likePayload).then(res=>{
            this.setState({
                TopicDetails: {...this.state.TopicDetails, data:{...this.state.TopicDetails.data, liked:liked}}
            })
        }).catch(err=>{
            console.log("Error while updating");
        })
    }

	render() {
		return (
			<React.Fragment>
                <PopulateMetaTags  title={"E3 Expo Event-Forum Details"} description={"E3 Expo Event-Forum Details"}/>
				<WebHeader props={this.props} />
				<div className="my-5 pt-2"></div>
				<Container>
					<Row className="forumMain">
						<Col lg={9}>
							<ForumTopicDetails goBack={this.goBack} updateLike={this.updateLike} TopicDetails={this.state.TopicDetails} />
							<TopicReplyDetails Comments={this.state.Comments} getNextPageComments={this.getNextPageComments} loadComments={this.loadComments} forumId={this.state.TopicDetails.forumId}/>
						</Col>
						<Col lg={3} >
							<TopicCommentor TopCommentors={this.state.TopCommentors} />
							<TopicHotQuestion HotQuestion={this.state.HotQuestion} />
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ForumDetailsMain));
