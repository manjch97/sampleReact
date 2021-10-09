import React, { Component} from "react";
import { SEARCH_EVENTS_MAX_RECORDS } from "../../constants/CommonConstants";
import { Row, Col} from "react-bootstrap";
import { GetSpinner, PopulateMetaTags, WebHeader } from "../../helper/CommonHelper";
import SideNavMain from "../common/sidenav/SideNavMain";
import { Header, TrendingEvents} from "./TrendingEvents";
import { Global } from "../../services/Api";

class EventsMain extends Component {

    state = { isLoading: false, events: [], page: 1, hasMore: true};

    componentDidMount(){
        this.setState({ isLoading: true });
        this.getAllEvents(this.state.page);
    }

    getAllEvents = (pageNumber) => {
        if(SEARCH_EVENTS_MAX_RECORDS <= pageNumber){
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
        console.log("About to call Get All Events api with payload: ", payload);
    
        Global.getAllEvents(payload).then(response => {
            if(response && response.length >=1) {
                this.setState(prevState => ({
                        page : pageNumber, 
                        events: prevState.events.concat(response),
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
          console.log("Error occured while getting all events", err)
        })
    }

    fetchMoreEvents = () => {
       this.getAllEvents(this.state.page + 1);
    }

    render() {
        return (
            <React.Fragment>
               <PopulateMetaTags  title={"E3 Expo Event-All Events"} description={"E3 Expo Event-All Events"}/>
                <WebHeader props={this.props}/>
                <main className="e3-main-wrapper">
                    <SideNavMain/>
                    <section className="e3-content-wrapper">
                      <div className="containerspace">
                        <Row>
                            <Col><Header/></Col>
                        </Row>  
                        <Row>
                        <Col xl={12}>
                                {this.state.events? 
                                    <Row>
                                        <Col >
                                            <TrendingEvents 
                                                    events={this.state.events}
                                                    fetchMoreEvents = {this.fetchMoreEvents} 
                                                    hasMore = {this.state.hasMore}
                                                    isLoading={this.state.isLoading}
                                                    props={this.props}/>
                                                    
                                        </Col>
                                    </Row> : null
                                }
                            </Col>
                        </Row>
                      </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default EventsMain;