import React from "react";
import { Row, Col, Badge, Image} from "react-bootstrap";
import { CheckCircleFill, Eye, CalendarEvent } from 'react-bootstrap-icons';
import InfiniteScroll from "react-infinite-scroll-component";
import pubg from "../../assets/img/search/pubg.png";
import { GetSimpleAvatar, GetSpinner } from "../../helper/CommonHelper";
import "./TrendingEvents.scss";
import {
  NO_TRENDINGEVENTS
} from "../../constants/CommonConstants";
export const Header = props => {
    return (
        <React.Fragment>
          <Row className="w-100">
            <Col className="p-2">
                <h6 ><span className="trending-events text-uppercase">EVENTS TRENDING AROUND YOU </span></h6>
            </Col>
          </Row>
          <div className="events-borderB my-1"></div>
        </React.Fragment>
    );
}

/***********************************************************
 * Events
 ************************************************************/

 export const TrendingEvents = props => {
  
  if(props.isLoading){
    return <GetSpinner/>
  }

  if(!props.events || props.events.length < 1){
    return (<div className="black text-24 font-weight-500">{NO_TRENDINGEVENTS}</div>)
  }
    return (
      <React.Fragment>
        <div className="ev">
          <span className="lstext">Events</span>
          <InfiniteScroll
                  dataLength={props.events.length}
                  next={props.fetchMoreEvents}
                  hasMore={props.hasMore}
                  loader={<GetSpinner/>}
                  style={{ overflow: 'hidden' }}
              >
              <Row xs={2} sm={3} lg={4} xl={5}>
              {
                props.events.map((event,index)=>{
                  return(         
                    <Col className="p-2 pt-3" key = {event.eventId + Math.random()}>
                      <div className="position-absolute">
                        {
                          event.isLive ? <Badge pill className="ml-2 mr-0 mt-2 l-s-badge l-s-live my-0">LIVE</Badge> :
                          <Badge pill className="ml-2 mr-0 mt-2 l-s-badge l-s-next my-0">NEXT</Badge>
                        }
                        <Badge pill variant="light" className="ml-2 mr-0 mt-2 l-s-badge my-0">
                            <span className="pr-1"><Eye /></span>
                          {event.views}
                        </Badge>
                        <Badge pill variant="light" className="ml-2 mr-2 mt-2 l-s-badge my-0 pubgcontainer">
                            <div className="pubg"><Image src={pubg} /></div>
                            <div>{event.companyName}</div>
                        </Badge>
                      </div>
                      <Image className="img" src={event.image} alt="booths"/>
                      <Row>
                      <Col className="l-s-l mr-0 pr-0">
                        <div className="trending-event-item">
                        <div className="figure_act pl-4">
                                <figure className="trending-event-img">
                                    <GetSimpleAvatar avatarUrl={event.avatarUrl} avatarInitial={event.avatarInitial}/>
                                </figure>
                        </div>
                        <div className="w-90 mx-1 pt-1">
                          <div className="text-default text-name">{event.eventName}</div>
                          <small className="text-sm text-gray-light">{event.boothName}</small>{" "}
                          {
                            event.isOnline ? <span className="ml-2 l-s-ch"><CheckCircleFill /></span> : <span className="ml-2 l-s-ch"><CheckCircleFill className="text-danger" /></span>
                          }
                          <span className="primary">
                          </span>
                        </div>
                      </div>
                      </Col>
                      <Col  className="l-s-r px-0 mx-0">
                      <div className="l-s-cal mt-2">
                        <CalendarEvent/>
                        <div className="m-0">+Add</div>
                      </div>
                      </Col>
                      </Row>
                    </Col> )
                    })
                }
                </Row>
             </InfiniteScroll>   
          </div>
      </React.Fragment>
    )
}