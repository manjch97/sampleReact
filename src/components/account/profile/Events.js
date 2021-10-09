import React from "react";
import { Row, Col, Container, Image, Badge } from "react-bootstrap";
import img from "../../../assets/img/booths/4.svg";
import imgAvatar from "../../../assets/img/forum/avatar.jpg";
import { Eye,Search, CheckCircleFill } from "react-bootstrap-icons";

import '../../../assets/styles/style.scss';
import "../../common/header/Header.scss";
import "./CustomerPreferences.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSimpleAvatar, GetSpinner } from "../../../helper/CommonHelper";

const Events = props => {
  const windowHeight = window.innerHeight - 180;
  return (
      <Container>
         <div id="scrollableEventDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
        <InfiniteScroll
                    dataLength={props.getAllEvents.length}
                    next={props.fetchMoreEvents}
                    hasMore={props.hasMore}
                    loader={props.page > 2 && <GetSpinner/>}
                    style={{ overflow: 'hidden' }}
                    scrollableTarget="scrollableEventDiv"
        >
        <Row xs={1} sm={2} lg={3}>
        {props.getAllEvents.map((event, index)=>{
            return (
              <Col className="pt-4" key = {event.eventId + Math.random()}>
                <div tabIndex="0" className="outlineBoxlayer pos_relative">
                <div className="EventsLive">
                  <Badge pill className="PUBGMobile e-live my-0">
                    {event.isLive ? "LIVE" : "NEXT"}
                    
                </Badge>
                  <Badge pill variant="dark" className="PUBGMobile my-0">
                    <span className="pr-2">
                      <Eye />
                    </span>
                  {event.views}
                </Badge>
                  <Badge pill variant="dark" className="PUBGMobile my-0">
                    <Badge className="search-event"><Search /></Badge>
                    {event.companyName}
                </Badge>
                </div>
                <div className="checkboxArea">
                  <label className="container" onKeyPress={e =>{props.updateEventSelection(event)}}>
                    <input type="checkbox" className="checkbox-input" tabIndex="-1" checked={event.isSelected}
                     onChange={e =>{props.updateEventSelection(event)}}
                     />
                    <span className="checkmark" tabIndex="0"></span>
                  </label>
              </div>
                <Image className="img" src={event.image ? event.image : img} alt="events" />
                <div className="d-flex align-items-center mt-2">
                  <div className="ArcadeAvatar pr-0 eventListView">
                    <GetSimpleAvatar avatarUrl={event.avatarUrl} avatarInitial={event.avatarInitial}/>
                  </div>
                  <div className="w-90 mx-2">
                    <div className="text-md">{event.eventName}</div>
                    <small className="text-xs">{event.boothsName}</small>{" "}
                      {
                            event.isOnline ? <span className="ml-2 l-s-ch"><CheckCircleFill className="text-success"  /></span> : <span className="ml-2 l-s-ch"><CheckCircleFill className="text-danger" /></span>
                      }
                  </div>
                </div>
                </div>
              </Col>)
          })}
         </Row>
        </InfiniteScroll>
        </div>
      </Container>
  )
}

export default Events;
