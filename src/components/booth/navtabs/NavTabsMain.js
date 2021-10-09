import BoothAbout from "./about/BoothAbout"
import Articles from "./articles/Articles"
import Events from "./events/Events"
import Media from "./media/Media"
import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";

import './NavTabs.scss';
import { BOOTH_ABOUT, BOOTH_EVENTS, BOOTH_MEDIA, BOOTH_ARTICLES, BOOTH_EVENTS_MAX_PAGE,BOOTH_ARTICLES_MAX_PAGE,BOOTH_ARTICLES_COMMENTS_MAX_PAGE } from "../../../constants/CommonConstants";
import { connect } from "react-redux";
import { BoothDetails, Articles as ArticlesApi } from "../../../services/Api";
import { withRouter } from "react-router-dom";
import { fireClickEvent } from "../../../helper/GTMHelper";

const mapStateToProps = (state) => ({
    currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

class NavTabsMain extends Component {

    state = {
        boothId: this.props.match?.params?.boothId,
        about: {
            loading: true,
            dataLoaded: false,
            data: {}
        },
        events: {
            loading: true,
            dataLoaded: false,
            data: []
        },
        media: {
            loading: true,
            dataLoaded: false,
            page: 1,
            hasMore: true,
            data: []
        },
        articles: {
            loading: true,
            dataLoaded: false,
            hasMore: true,
            page: 1,
            data: []
        },
        sideArticles: {
            loading: true,
            dataLoaded: false,
            data: []
        },
        articleDetails: {
            articleId: '',
            loading: true,
            dataLoaded: false,
            data: {}
        },
        articleComments: {
            articleId: '',
            loading: true,
            dataLoaded: false,
            hasMore: true,
            page: 1,
            data: []
        },
        similarArticles: {
            articleId: '',
            loading: true,
            dataLoaded: false,
            data: []
        },
        currentTab: '',
        articleDetailSection: this.props.match?.params?.articleId ? true : false

    }
    componentDidMount = () => {
        this.initData();
    }

    initData = ()=>{
        if(this.props.match?.params?.articleId){
            this.setState({
                articleDetails: {...this.state.articleDetails, articleId:this.props.match?.params?.articleId}
            })
            this.handleBoothNav(BOOTH_ARTICLES,true);
            this.loadArticleDetailSection(this.props.match.params.articleId);
        }else{ 
            this.handleBoothNav(BOOTH_ABOUT);
        }
    }

    componentDidUpdate = (prevProps, prevState) => {

        if( (
                (this.props.match?.params?.articleId && !prevProps.match?.params?.articleId) && 
                (this.props.match?.params?.articleId !== this.state.articleDetails.articleId)
            ) 
            || (
                    (this.props.match?.params?.articleId && prevProps.match?.params?.articleId) &&
                  (this.props.match?.params?.articleId !== prevProps.match?.params?.articleId)
                )
        ){
                this.setState({
                    boothId: this.props.match?.params?.boothId,
                    about: {
                        loading: true,
                        dataLoaded: false,
                        data: {}
                    },
                    events: {
                        loading: true,
                        dataLoaded: false,
                        data: []
                    },
                    media: {
                        loading: true,
                        dataLoaded: false,
                        page: 1,
                        hasMore: true,
                        data: []
                    },
                    articles: {
                        loading: true,
                        dataLoaded: false,
                        data: [],
                        page: 1,
                        hasMore: true,
                    },
                    articleDetailSection: false,
                    articleDetails: {...this.state.articleDetails,
                        loading: true,
                        dataLoaded: false,
                        data: {}
                    },
                    articleComments: {
                        articleId: '',
                        loading: true,
                        dataLoaded: false,
                        data: [],
                        page: 1,
                        hasMore: true,
                    },
                    similarArticles: {
                        articleId: '',
                        loading: true,
                        dataLoaded: false,
                        data: []
                    }
                })
                this.initData();
        }else if(
                !this.props.match?.params?.articleId && prevProps.match?.params?.articleId 
                || 
                ( !this.props.match?.params?.articleId && !prevProps.match?.params?.articleId && 
                    (this.state.articleDetails?.articleId !== prevState.articleDetails?.articleId)
                ) 
            ){
                this.setState({
                    boothId: this.props.match?.params?.boothId,
                    about: {
                        loading: true,
                        dataLoaded: false,
                        data: {}
                    },
                    events: {
                        loading: true,
                        dataLoaded: false,
                        data: []
                    },
                    media: {
                        loading: true,
                        dataLoaded: false,
                        page: 1,
                        data: [],
                        hasMore: true,
                    },
                    articles: {
                        loading: true,
                        dataLoaded: false,
                        data: [],
                        page: 1,
                        hasMore: true,
                    },
                    articleDetailSection: false,
                    articleDetails: {
                        articleId:'',
                        loading: true,
                        dataLoaded: false,
                        data: {}
                    },
                    articleComments: {
                        articleId: '',
                        loading: true,
                        dataLoaded: false,
                        data: [],
                        page: 1,
                        hasMore: true,
                    
                    },
                    similarArticles: {
                        articleId: '',
                        loading: true,
                        dataLoaded: false,
                        data: []
                    }
                }) ;
                this.initData();
        }

       
    }

    handleBoothNav = (key,init) => {
        if (this.state.articleDetailSection === true && !init ) {
            this.setState({
                articleDetailSection: false,
                articleDetails: {...this.state.articleDetails,
                    loading: true,
                    dataLoaded: false,
                    data: {}
                },
                articleComments: { ...this.state.articleComments,
                    loading: true,
                    dataLoaded: false,
                    data: []
                },
                similarArticles: {
                    articleId: '',
                    loading: true,
                    dataLoaded: false,
                    data: []
                }
            })
        }
        if (key === this.state.currentTab && init && init !== true) {
            return;
        }
        switch (key) {
            case BOOTH_EVENTS:
                this.loadBoothEvents();
                break;
            case BOOTH_MEDIA:
                this.loadBoothMedia();
                break;
            case BOOTH_ARTICLES:
                this.loadBoothArticles();
                this.loadBoothSideArticles();
                break;
            case BOOTH_ABOUT:
            default:
                this.loadBoothAbout();
        }
    }
    loadBoothAbout = () => {
        if (!this.state.about.dataLoaded) {
            this.setState(prevState => ({
                about: { ...prevState.about, loading: true },
                currentTab: BOOTH_ABOUT
            }));
            console.log("calling API to get the booth about data")
            this.fetchBoothAbout(1, true);
        } else {
            fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_about_click", {});
            this.setState({
                currentTab: BOOTH_ABOUT
            });
        }
    }

    loadBoothMedia = () => {
        if (!this.state.media.dataLoaded) {
            this.setState(prevState => ({
                media: { ...prevState.media, loading: true },
                currentTab: BOOTH_MEDIA
            }));
            // Call API to get the data 
            this.fetchBoothMedia(1, true);
        } else {
            fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_media_click", {});
            this.setState({
                currentTab: BOOTH_MEDIA
            });
        }
    }

    loadBoothEvents = () => {
        if (!this.state.events.dataLoaded) {
            this.setState(prevState => ({
                events: { ...prevState.events, loading: true },
                currentTab: BOOTH_EVENTS
            }));
            // Call API to get the data 
            //console.log("calling API to get the booth Media data")
            //this.fetchBoothEvents(1, true);
        } else {
            fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_event_click", {});
            this.setState({
                currentTab: BOOTH_EVENTS
            });
        }
    }

    loadBoothSideArticles = () => {
        if (!this.state.sideArticles.dataLoaded) {
            this.setState(prevState => ({
                sideArticles: { ...prevState.sideArticles, loading: true },
            }));
            // Call API to get the data 
            console.log("calling API to get the booth side Articles  data")
            this.fetchBoothSideArticles();
        } else {
            fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_sidearticle_click", {});
        }
    }

    loadBoothArticles = () => {
        if (!this.state.articles.dataLoaded) {
            this.setState(prevState => ({
                articles: { ...prevState.articles, loading: true },
                currentTab: BOOTH_ARTICLES
            }));
            // Call API to get the data 
            console.log("calling API to get the booth Articles data")
            this.fetchBoothArticles(1, true);
        } else {
            fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_article_click", {});
            this.setState({
                currentTab: BOOTH_ARTICLES
            });
        }
    }


    fetchBoothAbout = (page, init) => {
        const newPayload = { page: page };
        fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_about_click", newPayload);
        BoothDetails.getBoothAbout(this.state.boothId).then(res => {
            // Hanldle Response
            if (init) {
                this.setState(prevState => ({
                    about: { ...prevState.about, loading: false, page: page, dataLoaded: (res ? true : false), data: res ? res : {} },
                }));
            }
        }).catch(err => {
            console.log(err);
            if (init) {
                this.setState(prevState => ({
                    Recent: { ...prevState.about, loading: false, dataLoaded: false, data: {} },
                }));
            } else {
                this.setState(prevState => ({
                    Recent: { ...prevState.about }
                }));
            }
        })
    }

    fetchBoothMedia = (page, init) => {
        if(page > BOOTH_EVENTS_MAX_PAGE){ // Reached max pages for active people
            this.setState(prevState => ({
                media : {...prevState.media,hasMore: false,loading:false}
            }));
            return;
        }
        const newPayload = { page: page };
        fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_media_click", newPayload);
        BoothDetails.getBoothMedia(this.state.boothId, newPayload).then(res => {
            // Hanldle Response
            const hasMore = res && res?.length > 0;
            if (init) {
                this.setState(prevState => ({
                    media: { ...prevState.media, loading: false, page: page, dataLoaded: (res ? true : false), data: res ? res : [] },
                }));
            } else {
                this.setState(prevState => ({
                    media: { ...prevState.media, hasMore: hasMore, page: page, data: res && prevState.media.data.concat(res) },
                }));
            }
        }).catch(err => {
            console.log(err);
            if (init) {
                this.setState(prevState => ({
                    media: { ...prevState.media, hasMore: false, loading: false, dataLoaded: false, data: [] },
                }));
            } else {
                this.setState(prevState => ({
                    media: { ...prevState.media,hasMore: false }
                }));
            }
        })
    }

    fetchBoothArticles = (page, init) => {
        if(page > BOOTH_ARTICLES_MAX_PAGE) { // Reached max pages for active people
            this.setState(prevState => ({
                articles : {...prevState.articles,hasMore: false,loading:false}
            }));
            return;
        }
        const newPayload = { page: page };
        fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_article_click", newPayload);
        ArticlesApi.getArticles(this.state.boothId, newPayload).then(res => {
            // Hanldle Response
            const hasMore = res && res?.length > 0;
            if (init) {
                this.setState(prevState => ({
                    articles: { ...prevState.articles, loading: false, page: page, dataLoaded: (res ? true : false), data: res ? res : [] },
                }));
            } else {
                this.setState(prevState => ({
                    articles: { ...prevState.articles, hasMore: hasMore, page: page, data: res && prevState.articles.data.concat(res) },
                }));
            }
        }).catch(err => {
            console.log(err);
            if (init) {
                this.setState(prevState => ({
                    articles: { ...prevState.articles, hasMore: false, loading: false, dataLoaded: false, data: [] },
                }));
            } else {
                this.setState(prevState => ({
                    articles: { ...prevState.articles , hasMore: false}
                }));
            }
        })
    }

    fetchBoothSideArticles = () => {
        fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_sidearticle_click", {"boothId":this.state.boothId});
        ArticlesApi.getSideArticles(this.state.boothId).then(res => {
            // Hanldle Response
            this.setState(prevState => ({
                sideArticles: { ...prevState.sideArticles, loading: false, dataLoaded: (res ? true : false), data: res ? res : [] },
            }));

        }).catch(err => {
            console.log(err);
            if (init) {
                this.setState(prevState => ({
                    sideArticles: { ...prevState.sideArticles, loading: false, dataLoaded: false, data: [] },
                }));
            } else {
                this.setState(prevState => ({
                    sideArticles: { ...prevState.sideArticles }
                }));
            }
        })
    }

    loadArticleDetailSection = (articleId) => {
        let allPromises = Promise.all([
            this.fetchBoothArticleDetails(this.state.boothId, articleId),
            this.fetchBoothArticleComments(this.state.boothId, articleId),
            this.fetchBoothSimilarArticles(this.state.boothId, articleId)
        ]).then(results => {
            this.setState({
                articleDetailSection: true
            })
        })
            .catch(value => {
                console.log("Error here", value);
            })
    }

    fetchBoothArticleDetails = (boothId, articleId) => {
        fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "bootharticledetails_api_call", {"boothId":boothId, "articleId":articleId});
        ArticlesApi.getArticleDetails(boothId, articleId).then(res => {
            this.setState(prevState => ({
                articleDetails: { ...prevState.articleDetails, loading: false, dataLoaded: (res ? true : false), data: res ? res : {} },
            }));
        }).catch(err => {
            this.setState(prevState => ({
                articleDetails: { ...prevState.articleDetails, loading: false, dataLoaded: false, data: {} },
            }));
        });
    }

    fetchBoothArticleComments = (boothId, articleId) => {
        fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "bootharticlecomments_api_call", {"boothId":boothId, "articleId":articleId});
        this.getNextArticleComments(boothId, articleId,1);
    }

    getNextArticleComments = (boothId, articleId, page) => {

        if(page > BOOTH_ARTICLES_COMMENTS_MAX_PAGE){ // Reached max pages for active people
            this.setState(prevState => ({
                articleComments : {...prevState.articleComments,hasMore: false,loading:false}
            }));
            return;
        }
        const payload = { page : page} 
        ArticlesApi.getArticleComments(boothId, articleId, payload).then(res => {
            this.setState(prevState => ({
                articleComments: { ...prevState.articleComments, 
                    loading: false, 
                    page: page,
                    dataLoaded: (res ? true : false), 
                    data: res ? (page === 1 ? res : prevState.articleComments.data.concat(res)) : (page === 1?[]:prevState.articleComments.data)
                }
            }));
        }).catch(err => {
            this.setState(prevState => ({
                articleComments: { ...prevState.articleComments, 
                    loading: false, 
                    dataLoaded: false, 
                    page: page,
                    data: page === 1 ? [] : prevState.articleComments.data
                }
            }));
        });
    }

    fetchBoothSimilarArticles = (boothId, articleId) => {
        fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "boothsimilararticle_api_call", {"boothId":boothId, "articleId":articleId});
        ArticlesApi.getSimilarArticles(boothId, articleId).then(res => {
            this.setState(prevState => ({
                similarArticles: { ...prevState.similarArticles, loading: false, dataLoaded: (res ? true : false), data: res ? res : [] },
            }));
        }).catch(err => {
            this.setState(prevState => ({
                similarArticles: { ...prevState.similarArticles, loading: false, dataLoaded: false, data: [] },
            }));
        });
    }

    setArticleCommentsState=(articleComments)=>{
        this.setState(prevState => ({
            articleComments: { ...prevState.articleComments, data: articleComments.data}
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Tabs className='e3-nav-tabs' role="tablist" transition={false} activeKey={this.state.currentTab == '' ? BOOTH_ABOUT : this.state.currentTab} onSelect={(key)=>this.handleBoothNav(key,false)}>
                    <Tab className='e3-tab-content' eventKey={BOOTH_ABOUT} title="ABOUT">
                        {
                            this.state.currentTab === BOOTH_ABOUT && <BoothAbout props={this.props} data={this.state.about} dataTab={BOOTH_ABOUT} currentTab={this.state.currentTab} />
                        }
                    </Tab>
                    <Tab className='e3-tab-content e3-event-tab pt-0' eventKey={BOOTH_EVENTS} title="EVENTS" >
                        {
                            this.state.currentTab === BOOTH_EVENTS && <Events props={this.props} data={this.state.events} dataTab={BOOTH_EVENTS} currentTab={this.state.currentTab} />
                        }
                    </Tab>
                    <Tab className='e3-tab-content' eventKey={BOOTH_MEDIA} title="MEDIA">
                        {
                            this.state.currentTab === BOOTH_MEDIA && 
                                <Media props={this.props} 
                                        data={this.state.media} 
                                        dataTab={BOOTH_MEDIA} 
                                        currentTab={this.state.currentTab} 
                                        fetchBoothMedia={this.fetchBoothMedia}
                                        />
                        }
                    </Tab>
                    <Tab className='e3-tab-content'  eventKey={BOOTH_ARTICLES} title="ARTICLES">
                        {
                            this.state.currentTab === BOOTH_ARTICLES && <Articles articleDetailSection={this.state.articleDetailSection}
                                loadArticleDetailSection={this.loadArticleDetailSection}
                                props={this.props}
                                sideArticledata={this.state.sideArticles}
                                articleDetails={this.state.articleDetails}
                                articleComments={this.state.articleComments}
                                similarArticles={this.state.similarArticles}
                                data={this.state.articles}
                                boothId={this.state.boothId}
                                dataTab={BOOTH_ARTICLES}
                                boothId={this.state.boothId}
                                setArticleCommentsState={this.setArticleCommentsState}
                                fetchBoothArticles={this.fetchBoothArticles}
                                getNextArticleComments={this.getNextArticleComments}
                                currentTab={this.state.currentTab} />
                        }
                    </Tab>
                </Tabs>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavTabsMain));

