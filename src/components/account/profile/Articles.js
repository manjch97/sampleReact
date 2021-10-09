import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import img from "../../../assets/img/booths/2.svg";
import '../../../assets/styles/style.scss';
import { GetSpinner } from "../../../helper/CommonHelper";
import "../../common/header/Header.scss";
import "./CustomerPreferences.scss";

const Articles = props => {
  const windowHeight = window.innerHeight - 180;
    return (
        <Container>
          <div id="scrollableArticleDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
          <InfiniteScroll
                    dataLength={props.getAllArticles.length}
                    next={props.fetchMoreArticles}
                    hasMore={props.hasMore}
                    loader={props.page > 2 && <GetSpinner/>}
                    style={{ overflow: 'hidden' }}
                    scrollableTarget="scrollableArticleDiv"
          >
            <Row >  
              {props.getAllArticles.map((article, index)=>{
              return   (         
                <Col xs={6}  md={4} className="pt-4" key = {article.articleId + Math.random()}>
                  <div tabIndex="0" className="outlineBoxlayer pos_relative">
                  <div className="checkboxArea">
                      <label className="container" onKeyPress={e =>{props.updateArticleSelection(article)}}>
                        <input type="checkbox" className="checkbox-input" tabIndex="-1" checked={article.isSelected}
                            onChange={e =>{props.updateArticleSelection(article)}}
                        />
                        <span className="checkmark" tabIndex="0"></span>
                      </label>
                  </div>
                  <Image  src={article.articleImageUrl ? article.articleImageUrl : img}  alt="article" className="w-100"/>
                  <span className="rotateDate">{article.creationDate}</span>
                  <div className="f-16 mt-2 articletxt">{article.articleName}</div>
                  </div>
                </Col> )
                })}            
              </Row>  
           </InfiniteScroll>
           </div>
        </Container>
    )
}

export default Articles;
