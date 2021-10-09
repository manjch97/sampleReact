import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import './PeopleNetwork.scss'
import './PeopleCard.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSimpleAvatar, GetSpinner } from "../../../helper/CommonHelper";
import {
    ACTIVEPEOPLE_EMPTY
  } from "../../../constants/CommonConstants";
const PeopleItem = props => {

    let history = useHistory();

    const navigateToUserDetails = (customer) => {
      return history.push('/global/userdetails/'+ customer.customerId);
    };

    const allPeople = props.getAllPeople;
    if(!allPeople || allPeople.length < 1){
        return (<div className="black text-24 font-weight-500">{ACTIVEPEOPLE_EMPTY}</div>)
      }
      const windowHeight = window.innerHeight - 200;
        return (
            <React.Fragment>
            <div id="scrollablePeopleDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
                <InfiniteScroll
                    dataLength={allPeople.length}
                    next={props.fetchMorePeople}
                    hasMore={props.hasMore}
                    loader={props.page > 2 && <GetSpinner/>}
                    style={{ overflow: 'hidden' }}
                    scrollableTarget="scrollablePeopleDiv"
                >
                <Row className="rowno-sp">
                  {allPeople.map((customer, i) => {
                    return(
                        <Col xl={4} lg={4} md={6}
                            key={customer.customerId + Math.random()}
                             className="px-1 pb-2 cardDisplay"
                            >
                            <Card className="px-2 cardWidth">
                                <Card.Body >
                                    <div className="e3-people-item-card infoItem align-items-center">
                                        <div className="figure_act cursor" tabIndex="2" onClick = {()=> navigateToUserDetails(customer)}>
                                            <figure className="e3-people-img-card infoImage">
                                                <GetSimpleAvatar avatarUrl={customer.avatarUrl} avatarInitial={customer.avatarInitial}/>
                                            </figure>
                                        </div>
                                        <div className="e3-people-content-card">
                                            <p className="e3-people-name-card cardName">{customer.name}</p>
                                            <div className="e3-people-tags-card" >
                                                {customer.tags.map((tag, index) => {
                                                    return <span key={`tag${index}`} className="badge badge-fon">{tag}</span>
                                                })}
                                            </div>
                                        </div>
                                        <div className="dotsDropDown-verticaldot">
                                            {
                                                props.cardLoading[customer.customerId] && props.cardLoading[customer.customerId] === true
                                                && <GetSpinner/> 
                                           }  
                                            <Dropdown animate slideIn>
                                                <Dropdown.Toggle aria-controls="example-fade-text" id="dropdown-custom-components">
                                                        <button type='button' className="e3-people-options-card "  role="button" tabIndex="3"
                                                        aria-label="More Options">
                                                            <FontAwesomeIcon icon={faEllipsisV}/>
                                                        </button> 
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu id="example-fade-text">
                                                    <Dropdown.Item 
                                                            eventKey="1"
                                                            onClick = {(event) => props.followButtonClickHandler(event, customer)}
                                                    >
                                                        {customer.isFollowing ? "UnFollow" : "Follow"}
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                      </div>
                                    </Card.Body>
                                    <Card.Text className="cardText">{customer.description}</Card.Text>
                                </Card>
                        </Col>
                      )
                   })}
                  </Row>
                </InfiniteScroll>
                </div>
            </React.Fragment>
        )
}
export default PeopleItem;