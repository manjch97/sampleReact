import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row, Dropdown} from "react-bootstrap";
import '../PeopleNetwork.scss'
import '../PeopleCard.scss'
import { GetSimpleAvatar, GetSpinner } from "../../../helper/CommonHelper";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  PEOPLE_EMPTY
} from "../../../constants/CommonConstants";
export const PeopleItem = props => {

    const people = props.followingPeople;
    if(!people || people.length < 1){
      return (<div className="black text-24 font-weight-500">{PEOPLE_EMPTY}</div>)
    }

    let history = useHistory();

    const navigateToUserDetails = (customer) => {
      return history.push('/global/userdetails/'+ customer.customerId);
    };
    const windowHeight = window.innerHeight - 180;
    console.log("Page Number#### ", props.page);
    return (
      <React.Fragment>
       <div id="scrollablePeopleitemDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
          <InfiniteScroll
                dataLength={people.length}
                next={props.fetchMorePeople}
                hasMore={props.hasMore}
                loader={props.page > 2 && <GetSpinner/>}
                style={{ overflow: 'hidden' }}
                scrollableTarget="scrollablePeopleitemDiv"
            >
            <Row className="rowsmal-sp">
            {
              people.map((customer, i) => {
                return(
                  <Col xl={4} lg={4} md={6} className="px-1 pb-2 cardDisplay" key={customer.customerId + Math.random()}>
                    <Card className="px-0 cardWidth" >
                        <Card.Body >
                          <div className="e3-people-item-card infoItem align-items-center following-people-item"> 
                              <div className="figure_act cursor" tabIndex="2" onClick = {()=> navigateToUserDetails(customer)}>
                                <figure className="following-people-img">
                                    <GetSimpleAvatar avatarUrl={customer.avatarUrl} avatarInitial={customer.avatarInitial}/>
                                </figure>
                              </div>
                              <div className="e3-people-content-card">
                                <p className="e3-people-name-card cardName">{customer.name}</p>
                                <div className="e3-people-tags-card">
                                  {customer.tags.map((tag, index) => {
                                     return <span key={`tag${index}`} className="badge">{tag}</span>
                                  })}
                                </div>
                              </div>
                              <div className="dotsDropDown-verticaldot">
                                                <Dropdown animate slideIn>
                                                    <Dropdown.Toggle aria-controls="example-fade-text" id="dropdown-custom-components">
                                                          <button type='button' className="e3-people-options-card "  role="button" tabIndex="3"
                                                           aria-label="More Options">
                                                          <FontAwesomeIcon icon={faEllipsisV}/>
                                                          </button> 
                                                   </Dropdown.Toggle>
                                                  <Dropdown.Menu id="example-fade-text">
                                                      <Dropdown.Item eventKey="1" onClick = {(event) => props.unfollowButtonClickHandler(event, customer.customerId)}>UnFollow</Dropdown.Item>
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