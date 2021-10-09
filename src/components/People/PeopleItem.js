import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faChevronRight ,faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import PeopleItemPeople from "./PeopleItemPeople";
import { Card, Grid,Row ,Col, CardGroup, CardColumns} from "react-bootstrap";
import './PeopleNetwork.scss'
import { DropdownButton, Dropdown } from "react-bootstrap";
import './PeopleCard.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSimpleAvatar, GetSpinner } from "../../helper/CommonHelper";
import { useHistory } from "react-router-dom";

export const PeopleItem = (props) => {

    let history = useHistory();

    const navigateToUserDetails = (customer) => {
      return history.push('/global/userdetails/'+ customer.customerId);
    };

    const activePeople = props.activePeople;
    if(!activePeople  || activePeople.length <= 0){
      return <React.Fragment>No Active People Found</React.Fragment>
    }
    const windowHeight = window.innerHeight - 100;
    return (
        <React.Fragment>
        <div id="scrollablePeopleDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
          <InfiniteScroll
                    dataLength={activePeople.length}
                    next={()=>props.getAllActivePeople(props.page+1,false)}
                    hasMore={props.hasMore}
                    loader={props.page > 1 && <GetSpinner/>}
                    style={{ overflow: 'hidden' }}
                    scrollableTarget="scrollablePeopleDiv"
                >
                  <Row className="rowno-sp">
                {activePeople.map((customer, i) => {
                return(
                  <Col xl={4} lg={4} md={6}
                      key={customer.customerId + Math.random()}
                       className="px-1 pb-2 cardDisplay"
                      >
                      <Card className="px-2 cardWidth">
                          <Card.Body >
                              <div className="e3-people-item-card infoItem">
                                  <div className="figure_act" tabIndex="2" onClick = {()=> navigateToUserDetails(customer)}>
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
                              <Card.Text className="cardText" onClick = {()=> navigateToUserDetails(customer)}>{customer.description}</Card.Text>
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