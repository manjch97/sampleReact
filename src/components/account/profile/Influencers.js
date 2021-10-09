import React from "react";
import { Row, Col, Container, Badge } from "react-bootstrap";
import '../../../assets/styles/style.scss';
import "../../common/header/Header.scss";
import "./CustomerPreferences.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSimpleAvatar, GetSpinner } from "../../../helper/CommonHelper";

const Influencers = props => {
  const windowHeight = 110 * 3;
  return (
      <Container>
        <div id="scrollableInfluenceDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll influnce_wrapper">
        <InfiniteScroll
                    dataLength={props.getAllInfluencers.length}
                    next={props.fetchMoreInfluencers}
                    hasMore={props.hasMore}
                    loader={props.page > 2 && <GetSpinner/>}
                    style={{ overflow: 'hidden' }}
                    scrollableTarget="scrollableInfluenceDiv"
        >
        <Row xs={1} sm={2} lg={3}>
        {props.getAllInfluencers.map((influencer, index)=>{
            return (
              <Col className="pt-4" key = {influencer.customerId + Math.random()}>
                <div className="outlineBoxlayer pos_relative wallcontainer"  tabIndex="0">
                <div className="checkboxArea">
                  <label className="container" onKeyPress={e =>{props.updateInfluencerSelection(influencer)}}>
                    <input type="checkbox" className="checkbox-input" tabIndex="-1" checked={influencer.isSelected}
                     onChange={e =>{props.updateInfluencerSelection(influencer)}}
                     />
                    <span className="checkmark" tabIndex="0"></span>
                  </label>
              </div>
                <div className="img">
                  <div className="enfluence d-flex align-items-center">
                    <div className="ArcadeAvatar pr-0">
                      <GetSimpleAvatar avatarUrl={influencer.avatarUrl} avatarInitial={influencer.avatarInitial}/>
                    </div>
                    <div className="inftitle_ext">
                      <span className="inf-title">{influencer.name}</span>
                      <div className="d-flex justify-content-start">
                        {
                              influencer.tags.map(tag => {
                                  return <div class="p-2">
                                        <Badge pill variant="dark" className="PUBGMobile my-0">
                                          {tag}
                                        </Badge>
                                    </div>
                              })
                        }
                      </div>
                    </div>
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

export default Influencers;
