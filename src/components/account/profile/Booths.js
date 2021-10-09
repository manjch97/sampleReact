import React, { useRef, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import img from "../../../assets/img/booths/1.svg";
import '../../../assets/styles/style.scss';
import "../../common/header/Header.scss";
import "./Booths.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSpinner } from "../../../helper/CommonHelper";
import { Scrollbars } from 'react-custom-scrollbars';


const Booths = props => {
  const boxWrapperRef=useRef();
  const windowHeight = window.innerHeight - 180;
  return (
      <Container>
        <div id="scrollableBoothDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
          <InfiniteScroll
                    dataLength={props.getAllBooths.length}
                    next={props.fetchMoreBooths}
                    hasMore={props.hasMore}
                    loader={props.page > 2 && <GetSpinner/>}
                    style={{ overflow: 'hidden' }}
                    scrollableTarget="scrollableBoothDiv"
          >
          <Row>
            {props.getAllBooths.map((booth, index)=>{
              return   (         
                <Col md={3} xs={6} className="pt-4" ref={boxWrapperRef} key = {booth.boothId + Math.random()} >
                  <div tabIndex="0" className="outlineBoxlayer pos_relative">
                  <div className="checkboxArea">
                      <label className="container" onKeyPress={e =>{props.updateBoothSelection(booth)}}>
                        <input type="checkbox" className="checkbox-input" tabIndex="-1" checked={booth.isSelected} onChange={e =>{props.updateBoothSelection(booth)}}/>
                        <span className="checkmark" tabIndex="0"></span>
                      </label>
                  </div>
                    <Image src={booth.boothImageUrl ? booth.boothImageUrl : img} alt="booths" className="w-100"/>
                    <div className="gray mt-2 texthdlist" >{booth.boothName}</div>
                    <div className="foll">{booth.followercount} Followers</div> 
                    </div>
                </Col> 
                )
                })} 
            </Row>
        </InfiniteScroll>
       </div>
       </Container>

  )
}

export default Booths;
