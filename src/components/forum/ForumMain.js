import React, { Component } from "react";
import { Button, Row, Col, Form, Container, Tabs, Tab } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { ForumMainNav, ForumTopic, ForumTopicDetails, TopicCommentor, TopicHotQuestion } from './ForumComponents'
import { connect } from "react-redux";
import { WebHeader } from "../../helper/CommonHelper";
import { FEATURED, RECENT, SEARCHED, FORUM_PAGE_SIZE, FORUM_MAX_RECORDS } from './../../constants/CommonConstants'
import { Forum } from './../../services/Api';
import { fireClickEvent } from "../../helper/GTMHelper";
import {PopulateMetaTags} from "../../helper/CommonHelper";

const mapStateToProps = state => ({
    currentUser: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({

});

const navPayLoad = {
    "catagoryType": "",
    "page": 1
}

class ForumMain extends Component {

   
    state = {
        Featured: {
            dataLoaded: false,
            data: [],
            page: 1,
            pageSize: FORUM_PAGE_SIZE,
            hasMore: true,
            loading: false
        },
        Recent: {
            dataLoaded: false,
            data: [],
            page: 1,
            pageSize: FORUM_PAGE_SIZE,
            hasMore: true,
            loading: false
        },
        Searched: {
            dataLoaded: false,
            data: [],
            page: 1,
            pageSize: FORUM_PAGE_SIZE,
            hasMore: true,
            loading: false
        },
        currentTab: { },
        TopCommentors: {
            data: [],
            loading: false
        },
        HotQuestion: {
            data: {},
            loading: false
        }
    }

  


    fetchMoreData=(tab,whichDataTab)=>{
        if(this.state.currentTab !== whichDataTab){
            return;
        }
        switch (tab) {
            case RECENT:
                if (this.state.Recent.data?.length >= FORUM_MAX_RECORDS) {
                        this.setState(prevState => ({
                            Recent: { ...prevState.Recent, hasMore: false},
                        }));
                        return;
                }
                return this.fetchRecent(this.state.Recent.page+1,false);
            case SEARCHED:
                if (this.state.Searched.data?.length >= FORUM_MAX_RECORDS) {
                    this.setState(prevState => ({
                        Searched: { ...prevState.Searched, hasMore: false},
                    }));
                    return;
                }
                return this.fetchSearched(this.state.Searched.page+1, false);
            case FEATURED:
                if (this.state.Featured.data?.length >= FORUM_MAX_RECORDS) {
                    this.setState(prevState => ({
                        Featured: { ...prevState.Featured, hasMore: false},
                    }));
                    return;
                }
                return this.fetchFeatured(this.state.Featured.page+1,false);
            default:
                return null;
        }
    }

    componentDidMount = () => {
        // Call API through Map Dispatch which can maintain the state in redux
        this.handleForumNav(FEATURED);
        this.loadTopCommentors();
        this.loadHotQuestion();

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

    loadRecent = () => {        
        if (!this.state.Recent.dataLoaded) {
            this.setState(prevState => ({
                Recent: { ...prevState.Recent, loading: true },
                currentTab: RECENT
            }));
            // Call API to get the data 
            console.log("calling API to get the recent data")
            this.fetchRecent(1,true);
        } else {
            fireClickEvent({id:this.props.currentUser?.id}, this.props.history.location.pathname,"forum_mostrecent_topic_click",{});
            this.setState({
                currentTab: RECENT
            });
        }
    }

    loadFeatured = () => {
        if (!this.state.Featured.dataLoaded) {
            this.setState(prevState => ({
                Featured: { ...prevState.Featured, loading: true },
                currentTab: FEATURED
            }));
            // Call API to get the data 
            this.fetchFeatured(1,true);
        } else {
            fireClickEvent({id:this.props.currentUser?.id}, this.props.history.location.pathname,"forum_featured_topic_click",{});
            this.setState({
                currentTab: FEATURED
            });
        }
    }

    loadSearched = () => {
        if (!this.state.Searched.dataLoaded) {
            this.setState(prevState => ({
                Searched: { ...prevState.Searched, loading: true },
                currentTab: SEARCHED
            }));
            // Call API to get the data 
            this.fetchSearched(1,true);
        } else {
            fireClickEvent({id:this.props.currentUser?.id}, this.props.history.location.pathname,"forum_mostsearched_topic_click",{});
            this.setState({
                currentTab: SEARCHED
            });
        }
    }


    fetchRecent = (page, init)=>{
        const newPayload = { ...navPayLoad, catagoryType: RECENT, page: page};
        fireClickEvent({id:this.props.currentUser?.id}, this.props.history.location.pathname,"forum_mostrecent_topic_click",newPayload);
            Forum.getForumTopics(newPayload).then(res => {
                // Hanldle Response
                if(init){
                    this.setState(prevState => ({
                        Recent: { ...prevState.Recent, loading: false, page : page, dataLoaded: (res ? true : false), data: res ? res : [] },
                    }));
                }else{
                    this.setState(prevState => ({
                        Recent: { ...prevState.Recent, page : page, data: res && prevState.Recent.data.concat(res), hasMore: res? prevState.Recent.hasMore : false},
                    }));
                }
            }).catch(err => {
                console.log(err);
                if(init){
                    this.setState(prevState => ({
                        Recent: { ...prevState.Recent, loading: false, dataLoaded: false, data: [], hasMore: false },
                    }));
                }else{
                    this.setState(prevState => ({
                        Recent: { ...prevState.Recent, hasMore: false}
                    }));
                }
            })
    }

    fetchSearched = (page, init)=>{
        const newPayload = { ...navPayLoad, catagoryType: SEARCHED, page: page};
        fireClickEvent({id:this.props.currentUser?.id}, this.props.history.location.pathname,"forum_mostsearched_topic_click",newPayload);
            Forum.getForumTopics(newPayload).then(res => {
                // Hanldle Response
                if(init){
                    this.setState(prevState => ({
                        Searched: { ...prevState.Searched, loading: false, page : page, dataLoaded: (res ? true : false), data: res ? res : [] },
                    }));
                }else{
                    this.setState(prevState => ({
                        Searched: { ...prevState.Searched, page : page, data: res && prevState.Searched.data.concat(res), hasMore: res ? prevState.Searched.hasMore : false},
                    }));
                }
            }).catch(err => {
                console.log(err);
                if(init){
                    this.setState(prevState => ({
                        Searched: { ...prevState.Searched, loading: false, dataLoaded: false, data: [], hasMore: false },
                    }));
                }else{
                    this.setState(prevState => ({
                        Searched: { ...prevState.Searched, hasMore: false}
                    }));
                }
            })
    }

    fetchFeatured = (page, init)=>{
        const newPayload = { ...navPayLoad, catagoryType: FEATURED, page: page};
        fireClickEvent({id:this.props.currentUser?.id}, this.props.history.location.pathname,"forum_featured_topic_click",newPayload);
            Forum.getForumTopics(newPayload).then(res => {
                // Hanldle Response
                if(init){
                    this.setState(prevState => ({
                        Featured: { ...prevState.Featured, loading: false, page : page, dataLoaded: (res ? true : false), data: res ? res : [] },
                    }));
                }else{
                    this.setState(prevState => ({
                        Featured: { ...prevState.Featured, page : page, data: res && prevState.Featured.data.concat(res), hasMore : res? prevState.Featured.hasMore : false},
                    }));
                }
            }).catch(err => {
                console.log(err);
                if(init){
                    this.setState(prevState => ({
                        Featured: { ...prevState.Featured, loading: false, dataLoaded: false, data: [], hasMore: false },
                    }));
                }else{
                    this.setState(prevState => ({
                        Featured: { ...prevState.Featured, hasMore: false}
                    }));
                }
            })
    }

    
    handleForumNav = (key) => {
        console.log(key);
        if (key === this.state.currentTab) {
            return;
        }
        switch (key) {
            case RECENT:
                this.loadRecent();
                break;
            case SEARCHED:
                this.loadSearched();
                break;
            case FEATURED:
            default:
                this.loadFeatured();
        }
    }

    navigateToForum=(e,forumId) =>{
        e.preventDefault();
        this.props.history.push("/forumdetails/"+forumId);
    }

    updateLike = (forumId,liked) =>{
        const likePayload = {
            forumId: forumId,
            customerId: this.props.currentUser?.id,
            liked: liked?'Y':'N'
        }
        fireClickEvent({id:this.props.currentUser?.id}, this.props.history.location.pathname,"forum_like",likePayload);
        Forum.setForumLike(likePayload).then(res=>{
            // Set the Icon
            this.updateLikeStatusinState(forumId,liked,this.state.currentTab)
        }).catch(err=>{
            
        })
    }

    updateLikeStatusinState=(forumId,liked,currentTab)=>{
        switch (currentTab) {
            case RECENT:
                const Recent= {...this.state.Recent}
                const topicRecent = Recent.data.filter(eachTopic=> eachTopic.forumId === forumId);
                if(topicRecent.length > 0){
                    topicRecent[0].liked=liked;
                    this.setState({
                            Recent: Recent
                        }
                    );
                }
                break;
            case SEARCHED:
                const Searched= {...this.state.Searched}
                const topicSearched = Searched.data.filter(eachTopic=> eachTopic.forumId === forumId);
                if(topicSearched.length > 0){
                    topicSearched[0].liked=liked;
                    this.setState({
                        Searched: Searched
                        }
                    );
                }
                break;
            case FEATURED:
                const Featured= {...this.state.Featured}
                const topicFeatured = Featured.data.filter(eachTopic=> eachTopic.forumId === forumId);
                if(topicFeatured.length > 0){
                    topicFeatured[0].liked=liked;
                        this.setState({
                            Featured: Featured
                        }
                    );
                }
                break;
        }
    }

    render() {

        return (
            <React.Fragment>
                 <PopulateMetaTags  title={"E3 Expo Event-Forum Details"} description={"E3 Expo Event-Forum Details"}/>
                <WebHeader props={this.props} />
                <div className="my-5 pt-2"></div>
                <Container>
                    <Row>
                        <ForumMainNav
                            Featured={this.state.Featured}
                            Recent={this.state.Recent}
                            updateLike={this.updateLike}
                            Searched={this.state.Searched}
                            CurrentTab={this.state.currentTab}
                            fetchMoreData={this.fetchMoreData}
                            navigateToForum={this.navigateToForum}
                            handleForumNav={this.handleForumNav} />
                        <Col lg={3} className="px-4">
                            <TopicCommentor TopCommentors={this.state.TopCommentors} />
                            <TopicHotQuestion HotQuestion={this.state.HotQuestion} />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ForumMain));
