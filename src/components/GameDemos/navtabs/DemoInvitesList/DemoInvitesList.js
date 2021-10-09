import React from "react";
import { Eye,Lock } from "react-bootstrap-icons";
import { Row, Col, Button,Badge } from 'react-bootstrap';
import './DemoInvitesList.scss';
import  Playstationicon   from '../../../../assets/img/gamedemos/Playstationicon.svg';
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSpinner } from "../../../../helper/CommonHelper";
import {
    DEMOINVITES_EMPTY
  } from "../../../../constants/CommonConstants";
export const DemoInvitesList = (props) => {
    if(!props.demoInvites || props.demoInvites.length < 1){
        return (<div className="black text-24 font-weight-500">{DEMOINVITES_EMPTY}</div>)
      }
      const windowHeight = window.innerHeight - 100;
    return (
        <div id="scrollabledemoInviteDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
        <InfiniteScroll
                        dataLength={props.demoInvites.length}
                        next={props.fetchMoreGameInvites}
                        hasMore={props.hasMore}
                        loader={<GetSpinner/>}
                        style={{ overflow: 'hidden' }}
                        scrollableTarget="scrollabledemoInviteDiv"
        >
            <Row>
        {props.demoInvites.map((item, i) => {
            return (
                <Col xl={6} key={item.gameId + Math.random()}>
                <Button variant="link" className="e3-listdemo-link p-0 mb-2" href="#">
                <div  className="d-flex flex-row justify-content-between align-items-center e3-gameInvitesList-item">
                    <figure className="position-relative e3-gameInvitesList-img  mb-0">
                        <img src={item.imageUrl} alt="demolistImages" className="h-95px w-112px"/>
                        {item.isLive === "true" ?  
                        <Badge variant="default" className="position-absolute text-center px-1 py-0 e3-gameInvitesList-next">LIVE</Badge>
                        : null }
                        <Badge variant="light" className="position-absolute text-center px-1 e3-gameInvitesList-views"><Eye /><span className="pl-1">{item.viewCount}</span></Badge>
                    </figure>
                    <aside className="w-100 e3-gameInvitesList-content">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-start">
                            <div><img src={Playstationicon} alt="playstationicon" className="pr-1"/></div>
                                <div><p className="e3-gameInvitesList-title mb-0 pl-2">{item.gameConsole}</p></div>
                            </div>
                            <div>
                                {item.inviteStatus === "Pending"?
                                <Button variant="default" className="p-1 e3-pending-status w-70">{item.inviteStatus}</Button>:
                                (item.inviteStatus === "Accepted" || item.inviteStatus === "Available" ? 
                                <Button variant="default" className="p-1 e3-accepted-status w-70">{item.inviteStatus}</Button>
                                :
                                item.inviteStatus === "Rejected" ? 
                                <Button variant="default" className="p-1 e3-rejected-status w-70">{item.inviteStatus}</Button>
                                :null)
                                }
                              
                            </div>
                            
                        </div>
                        <div className="e3-gameInvitesList-contentdata pl-0 spc_pad_grid">{item.gameDescription} </div>
                        <div className="e3-gameInvitesList-tags">
                            {item.gameSearchTags.map((tag, index) => {
                                return <Badge tabIndex="0" className="d-flex align-items-end" pill key={`tag${index}`} variant="dark" className="btn-tags p-1 mr-1 font-weight-400">{tag}</Badge>
                            })}
                        </div>
                    </aside>
                </div>
                </Button>
                </Col>
            )
        })}
        <Col xl={6}>
            <Row>
                <Col xs={7}>
                    <p className="bottom-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </Col>
                <Col xs={5} className="text-right">
                    <Button  className="bottom-btn rounded-pill" size="sm">
                       <span>choose a new time</span>
                    </Button>
                </Col>
            </Row>
            </Col>
            </Row>
        </InfiniteScroll>
        </div>
    );
}