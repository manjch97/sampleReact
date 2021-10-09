import React from "react";
import { Eye } from "react-bootstrap-icons";
import { Row, Col,Button,Badge } from 'react-bootstrap';
import './ListDemos.scss';
import  Lockicon  from '../../../../assets/img/gamedemos/Lockicon.svg';
import  dollar  from '../../../../assets/img/gamedemos/dollar.svg';
import  Playstationicon   from '../../../../assets/img/gamedemos/Playstationicon.svg';
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSpinner } from "../../../../helper/CommonHelper";
import {
    PUBLICDEMOS_EMPTY
  } from "../../../../constants/CommonConstants";


export const ListDemos = (props) => {
    if(!props.publicdemos || props.publicdemos.length < 1){
        return (<div className="black text-24 font-weight-500">{PUBLICDEMOS_EMPTY}</div>)
      }
      const windowHeight = window.innerHeight - 100;
    return (
        <div id="scrollableGameDemoDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
        <InfiniteScroll
                            dataLength={props.publicdemos.length}
                            next={props.fetchMorePublicDemos}
                            hasMore={props.hasMore}
                            loader={<GetSpinner/>}
                            style={{ overflow: 'hidden' }}
                            scrollableTarget="scrollableGameDemoDiv"
                        >
        <Row>
        {props.publicdemos.map((item, i) => {
            return (
                <Col xl={6} key={item.gameId + Math.random()}>
                <Button variant="link" className="e3-listdemo-link p-0 mb-2" href="#">
                <div key={item.gameId} className="d-flex flex-row justify-content-between  align-items-center  e3-listdemo-item">
                    <figure className="position-relative e3-listdemo-img mb-0">
                        <img src={item.imageUrl} alt="image" className="h-95px w-112px"/>
                        {item.isLive === "true" ?  
                        <Badge variant="default" className="position-absolute text-center px-1 py-0 e3-listdemo-next">LIVE</Badge>
                        : null }
                        <Badge variant="light" className="position-absolute text-center px-1 e3-listdemo-views"><Eye /><span className="pl-1">{item.viewCount}</span></Badge>
                    </figure>
                    <aside className="w-100 e3-listdemo-content">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-start">
                                <div>
                                    <img src={Playstationicon} alt="playstationicon" className="pr-0"/>
                                    </div>
                                <div><p className="e3-listdemo-title mb-0 pl-2">{item.gameConsole}</p></div>
                            </div>
                            <div>
                                {
                                    item.isGameLocked === "true"?  
                                        (item.discountCode !== undefined  &&  item.discountCode !== null && item.discountCode !== ""? 
                                            <Button variant="default" className='p-1 font-weight-500 e3-discount-status w-105' size="sm">
                                            <img src={Lockicon} alt="Lock" className="pr-1"/>{item.discountCode}</Button>
                                            : 
                                            <Button variant="default" className='e3btn_pink p-1 e3-bu-align font-weight-500 w-70' size="sm">
                                        <img src={Lockicon} alt="Lock" className="pr-1"/>{item.pointsRequired}<img src={dollar} alt="Lock" className="pl-1"/></Button>
                                        )
                                        : 
                                        item.gameStatus === "Pending"? 
                                        <Button variant="default" className="p-1 e3-pending-status w-70">{item.gameStatus}</Button>
                                        :
                                        (item.gameStatus === "Accepted" || item.gameStatus === "Available" ? 
                                        <Button variant="default" className="p-1 e3-accepted-status ml-4 w-70">{item.gameStatus}</Button>
                                        :
                                        item.gameStatus === "Rejected" ? 
                                        <Button variant="default" className="p-1 e3-rejected-status w-70">{item.gameStatus}</Button>
                                        :
                                        null)
                                
                                }  
                            </div>    
                        </div>
                        <div className="e3-listdemo-contentdata pl-0 spc_pad_grid">{item.gameDescription} </div>
                        <div className="e3-listbutton-tags">
                            {item.gameSearchTags.map((tag, index) => {
                                return <Badge tabIndex="0" pill key={`tag${index}`} variant="dark" className="btn-tags p-1 mr-1 font-weight-400">{tag}</Badge>
                                // <span key={`tag${index}`} className="btn-tags mr-1 px-1">{tag}</span>
                                
                            })}
                        </div>
                    </aside>
                </div>
                </Button>
                </Col>
            )
        })}
            </Row>
        </InfiniteScroll>
        </div>
    );
}