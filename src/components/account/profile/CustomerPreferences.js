import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col, Form, Container, Button, Image, Tabs, Tab } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import Header from "../../common/header/Header";
import Booths from './Booths'
import '../../../assets/styles/style.scss';
import "../../common/header/Header.scss";
import "./CustomerPreferences.scss";
import { withRouter } from "react-router-dom";
import Articles from "./Articles";
import Events from "./Events";
import Influencers from "./Influencers";
import { fireClickEvent } from '../../../helper/GTMHelper'
import { PopulateMetaTags } from "../../../helper/CommonHelper";
import SignupStatus from '../login/SignupStatus';
import { Profile } from "../../../services/Api";
import { PROFILE_ARTICLES_MAX_PAGES, PROFILE_BOOTHS_MAX_PAGES, PROFILE_EVENTS_MAX_PAGES,
         PROFILE_BOOTHS, PROFILE_EVENTS, PROFILE_ARTICLES, PROFILE_INFLUENCERS, PROFILE_INFLUENCERS_MAX_PAGES} from "../../../constants/CommonConstants";

const mapStateToProps = (state) => ({
  // Get data from Redux for topics unless cleared
  currentUser: state?.auth?.user,
});

class CustomerPreferences extends Component {
    constructor() {
      super();
      this.handleSelect = this.handleSelect.bind(this);
    }
    onHide = () => {
      this.setState((currentState) => ({ modalStatus: !currentState.modalStatus }));
    }
    componentDidMount() {
      this.getRecommendedBoothsForCustomer(this.state.booths.page);
    }

    state = {
      show: true,
      modalStatus :false,
      key: PROFILE_BOOTHS,
      booths: {isLoading: false, data: [], page: 1, hasMore: true},
      articles: {isLoading: false, data: [], page: 1, hasMore: true},
      events: {isLoading: false, data: [], page: 1, hasMore: true},
      influencers: {isLoading: false, data: [], page: 1, hasMore: true},
      redirect: null
    }

    handleSelect(key) {
      this.setState({ key: key });
      switch (key) {
        case PROFILE_BOOTHS:
            this.getRecommendedBoothsForCustomer(this.state.booths.page);
            break;
        case PROFILE_ARTICLES:
            this.getRecommendedArticlesForCustomer(this.state.articles.page);
            break;
        case PROFILE_EVENTS:
            this.getRecommendedEventsForCustomer(this.state.events.page);
            break;
        case PROFILE_INFLUENCERS:
        default:
            this.getRecommendedInfluencersForCustomer(this.state.influencers.page);
       }
    }
    toggle = () => this.setState((currentState) => ({ show: !currentState.show }));

    backTo = () => {
      this.props.history.goBack();
    };

    /////////////////////////////////
    //
    //    BOOTHS
    //
    ////////////////////////////////
    
    getRecommendedBoothsForCustomer = (pageNumber) => {
      if(PROFILE_BOOTHS_MAX_PAGES < pageNumber){
        this.setState(prevState => ({booths: { ...prevState.booths, isLoading: true, hasMore: false}}));
        return;
      }

      const payload = {"paginationDetails":{"page": pageNumber}};
      console.log("About to call Profile Booths api with payload: ", payload);

      Profile.getRecommendedBoothsForCustomer(payload).then(response => {
        if(response && response.length >=1) {
            this.setState(prevState => ({
              booths: { 
                  ...prevState.booths, 
                  page : pageNumber, 
                  isLoading: false, 
                  data: prevState.booths.data.concat(response)
                }
            }));
        }else{
          this.setState(prevState => ({ booths: { ...prevState.booths, isLoading: false, hasMore: false}}));
        }
      }).catch(err => {
        this.setState(prevState => ({booths: { ...prevState.booths, isLoading: false}}));
        console.log("Error occured while getting Profile Booths", err)
      })
    };

    fetchMoreBooths = () => {
      return this.getRecommendedBoothsForCustomer(this.state.booths.page + 1);
    }

    updateBoothSelection = booth => {
      const booths = this.state.booths.data;
      const updatedBooths = [];

      booths.map(item => {
         const updatedBooth = {...item};
          if (updatedBooth.boothId === booth.boothId) {
            updatedBooth.isSelected = !item.isSelected
          }
          updatedBooths.push(updatedBooth);
      })
      this.setState(prevState => ({booths: { ...prevState.booths, data: updatedBooths }}));
    };

    /////////////////////////////////
    //
    //    ARTICLES
    //
    ////////////////////////////////

    getRecommendedArticlesForCustomer = (pageNumber) => {
      if(PROFILE_ARTICLES_MAX_PAGES < pageNumber){
        this.setState(prevState => ({articles: { ...prevState.articles, isLoading: true, hasMore: false}}));
        return;
      }

      const payload = {"paginationDetails":{"page": pageNumber}};
      console.log("About to call Profile Articles api with payload: ", payload);

      Profile.getRecommendedArticlesForCustomer(payload).then(response => {
        if(response && response.length >=1) {
            this.setState(prevState => ({
              articles: { 
                  ...prevState.articles, 
                  page : pageNumber, 
                  isLoading: false, 
                  data: prevState.articles.data.concat(response)
                }
            }));
        }else{
          this.setState(prevState => ({ articles: { ...prevState.articles, isLoading: false, hasMore: false}}));
        }
      }).catch(err => {
        this.setState(prevState => ({articles: { ...prevState.articles, isLoading: false}}));
        console.log("Error occured while getting Profile Articles", err)
      })
    };

    fetchMoreArticles = () => {
      return this.getRecommendedArticlesForCustomer(this.state.articles.page + 1);
    }

    updateArticleSelection = article => {
      const articles = this.state.articles.data;
      const updatedArticles = [];

      articles.map(item => {
         const updatedArticle = {...item};
          if (updatedArticle.articleId === article.articleId) {
            updatedArticle.isSelected = !item.isSelected
          }
          updatedArticles.push(updatedArticle);
      })
      this.setState(prevState => ({articles: { ...prevState.articles, data: updatedArticles }}));
    };

    /////////////////////////////////
    //
    //    EVENTS
    //
    ////////////////////////////////

    getRecommendedEventsForCustomer = (pageNumber) => {
      if(PROFILE_EVENTS_MAX_PAGES < pageNumber){
        this.setState(prevState => ({events: { ...prevState.events, isLoading: true, hasMore: false}}));
        return;
      }

      const payload = {"paginationDetails":{"page": pageNumber}};
      console.log("About to call Profile Events api with payload: ", payload);

      Profile.getRecommendedEventsForCustomer(payload).then(response => {
        if(response && response.length >=1) {
            this.setState(prevState => ({
              events: { 
                  ...prevState.events, 
                  page : pageNumber, 
                  isLoading: false, 
                  data: prevState.events.data.concat(response)
                }
            }));
        }else{
          this.setState(prevState => ({ events: { ...prevState.events, isLoading: false, hasMore: false}}));
        }
      }).catch(err => {
        this.setState(prevState => ({events: { ...prevState.events, isLoading: false}}));
        console.log("Error occured while getting Profile Events", err)
      })
    };

    fetchMoreEvents = () => {
      return this.getRecommendedEventsForCustomer(this.state.events.page + 1);
    }

    updateEventSelection = event => {
      const events = this.state.events.data;
      const updatedEvents = [];

      events.map(item => {
         const updatedEvent = {...item};
          if (updatedEvent.eventId === event.eventId) {
            updatedEvent.isSelected = !item.isSelected
          }
          updatedEvents.push(updatedEvent);
      })
      this.setState(prevState => ({events: { ...prevState.events, data: updatedEvents }}));
    };

    /////////////////////////////////
    //
    //    INFLUENCERS
    //
    ////////////////////////////////
    getRecommendedInfluencersForCustomer = (pageNumber) => {
      if(PROFILE_INFLUENCERS_MAX_PAGES < pageNumber){
        this.setState(prevState => ({influencers: { ...prevState.influencers, isLoading: true, hasMore: false}}));
        return;
      }

      const payload = {"paginationDetails":{"page": pageNumber}};
      console.log("About to call Profile Influencers api with payload: ", payload);

      Profile.getRecommendedInfluencersForCustomer(payload).then(response => {
        if(response && response.length >=1) {
            this.setState(prevState => ({
              influencers: { 
                  ...prevState.influencers, 
                  page : pageNumber, 
                  isLoading: false, 
                  data: prevState.influencers.data.concat(response)
                }
            }));
        }else{
          this.setState(prevState => ({ influencers: { ...prevState.influencers, isLoading: false, hasMore: false}}));
        }
      }).catch(err => {
        this.setState(prevState => ({influencers: { ...prevState.influencers, isLoading: false}}));
        console.log("Error occured while getting Profile Influencers", err)
      })
    };

    fetchMoreInfluencers = () => {
      return this.getRecommendedInfluencersForCustomer(this.state.influencers.page + 1);
    }

    updateInfluencerSelection = influencer => {
      const influencers = this.state.influencers.data;
      const updatedInfluencers = [];

      influencers.map(item => {
         const updatedInfluencer = {...item};
          if (updatedInfluencer.customerId === influencer.customerId) {
            updatedInfluencer.isSelected = !item.isSelected
          }
          updatedInfluencers.push(updatedInfluencer);
      })
      this.setState(prevState => ({influencers: { ...prevState.influencers, data: updatedInfluencers }}));
    };

    updateCustomerPreferences = () => {
      //BOOTHS
      const booths = this.state.booths.data;
      const selectedBooths = [];
      booths.map(booth => {
          if (booth.isSelected) {
            selectedBooths.push(booth.boothId);
          }
      });

      //ARTICLES
      const articles = this.state.articles.data;
      const selectedArticles = [];
      articles.map(article => {
          if (article.isSelected) {
            selectedArticles.push(article.articleId);
          }
      });

      //EVENTS
      const events = this.state.events.data;
      const selectedEvents = [];
      events.map(event => {
          if (event.isSelected) {
            selectedEvents.push(event.eventId);
          }
      });

      //INFLUENCERS
      const influencers = this.state.influencers.data;
      const selectedInfluencers = [];
      influencers.map(influencer => {
          if (influencer.isSelected) {
            selectedInfluencers.push(influencer.customerId);
          }
      });

      const payload = {
        "boothIds": selectedBooths,
        "articleIds": selectedArticles,
        "eventIds": selectedEvents,
        "influencerIds": selectedInfluencers
      };
      console.log("About to call Update Profile interests api with payload: ", payload);
      Profile.updateInterestsSelectedByCustomer(payload).then(response => {
        console.log("Update Profile interests - Success");
        this.setState({ redirect: "/profile/settings" });
      }).catch(err => {
        console.log("Error occured while Updating Profile interests", err)
      })
    }

    continueButtonClickHandler = () => {
      //this.setState((currentState) => ({ modalStatus: !currentState.modalStatus }));
      this.updateCustomerPreferences();
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <React.Fragment>
          <PopulateMetaTags title={"E3 Expo Event-Profile-Preference"} description={"E3 Expo Event-Profile-Preference"} />
          <Header />
          <Col >
            <b className="cursor underline" onClick={this.backTo}>
              <span className="text-lg pr-1">
                <ArrowLeft />
              </span>
                  Back
                </b>
          </Col>
          <div className="my-5 pt-1"></div>
          <Col md={{ span: 8, offset: 2 }} xs={12} className="py-3">
            <Container className="shadow-box">
              <Row className="text-center justify-content-center align-items-center m-auto ">
                <Col className="text-center">
                  <h4 className="text-xl text-uppercase text-head">
                    WHAT DO YOU <span className="primaryColor">LIKE?</span>
                  </h4>
                  <h6 className="mt-4 topic text-md">
                    The topics you choose will help us support for you  better
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col className="customer-pref">
                  <Form>
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect} className="text-center justify-content-center align-items-center m-auto pt-4">
                      <Tab eventKey={PROFILE_BOOTHS} title= {PROFILE_BOOTHS}>
                        {
                            this.state.key === PROFILE_BOOTHS && 
                            <Booths 
                                    getAllBooths={this.state.booths.data} 
                                    fetchMoreBooths= {this.fetchMoreBooths} 
                                    hasMore = {this.state.booths.hasMore}
                                    page = {this.state.booths.page}
                                    updateBoothSelection = {this.updateBoothSelection}
                            />
                        }
                      </Tab>
                      <Tab eventKey={PROFILE_ARTICLES} title={PROFILE_ARTICLES}>
                        {
                            this.state.key === PROFILE_ARTICLES && 
                            <Articles 
                                  getAllArticles={this.state.articles.data} 
                                  fetchMoreArticles= {this.fetchMoreArticles} 
                                  hasMore = {this.state.articles.hasMore}
                                  page = {this.state.articles.page}
                                  updateArticleSelection = {this.updateArticleSelection}
                            />
                        }
                      </Tab>
                      <Tab eventKey={PROFILE_EVENTS} title={PROFILE_EVENTS}>
                        {
                            this.state.key === PROFILE_EVENTS && 
                            <Events 
                                  getAllEvents={this.state.events.data} 
                                  fetchMoreEvents= {this.fetchMoreEvents} 
                                  hasMore = {this.state.events.hasMore}
                                  page = {this.state.events.page}
                                  updateEventSelection = {this.updateEventSelection}
                            />
                        }
                        </Tab>
                      <Tab eventKey={PROFILE_INFLUENCERS} title={PROFILE_INFLUENCERS}>
                        {
                            this.state.key === PROFILE_INFLUENCERS && 
                            <Influencers 
                                  getAllInfluencers={this.state.influencers.data} 
                                  fetchMoreInfluencers= {this.fetchMoreInfluencers} 
                                  hasMore = {this.state.influencers.hasMore}
                                  page = {this.state.influencers.page}
                                  updateInfluencerSelection = {this.updateInfluencerSelection}
                            />
                        }
                       </Tab>
                    </Tabs>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col className="text-center PrimaryBtn pt-2">
                  <Button variant="primary" onClick={this.continueButtonClickHandler} className="my-4" size="sm">Continue</Button>
                </Col>
              </Row>
            </Container>

          </Col>
          <SignupStatus show={this.state.modalStatus} onHide={this.onHide} approved={true} />

        </React.Fragment>
      );
    }

}
export default connect(mapStateToProps)(withRouter(CustomerPreferences));

