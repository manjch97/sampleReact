import React from "react";
import { ArticleComments } from "./ArticleComments";
import { ButtonGroup, Button, Col, Row, Image } from 'react-bootstrap';
import { Heart, Globe, } from "react-bootstrap-icons";
import articlesBanner from '../../../../assets/img/booths/articles/articlesBanner.jpg';
import facebook from '../../../../assets/img/booths/articles/facebook.svg';
import twitter from '../../../../assets/img/booths/articles/twitter.svg';
import insta from '../../../../assets/img/booths/articles/insta.svg';
import Image1 from '../../../../assets/img/booths/1.svg';
import Image2 from '../../../../assets/img/booths/2.svg';
import Image3 from '../../../../assets/img/booths/3.jpg';
import { ArticleItem } from './ArticleItem';
import isURL from "validator/lib/isURL";
import { GetSpinner } from "../../../../helper/CommonHelper";
import { BsEyeFill } from "react-icons/bs";
import { AutoFocusInside } from "react-focus-lock";
import {
    ARTICLE_DETAILS_EMPTY
  } from "../../../../constants/CommonConstants";
import { SimilarArticleItem } from "./SimilarArticleItem";

export const ArticleDetails = (props) => {
    const articleDetails = props.articleDetails;

    if (articleDetails.loading) {
        return (<GetSpinner />);
    }

    if (!articleDetails.dataLoaded) {
        return (<div className="black text-24 font-weight-500">{ARTICLE_DETAILS_EMPTY}</div>)
    }

    return (
        <React.Fragment>
           
                <Col xs={12} md={12} tabIndex="1">
                    <h3 className="gray">{articleDetails.data.articleTitle}</h3>
                    <p className="gray3">{articleDetails.data.articleDate}</p>
                    <div>
                        <Image src={isURL(articleDetails?.data?.articleBannerUrl) ? articleDetails.data.articleBannerUrl : articlesBanner} className="w-100" alt="articlesBanner" />
                        <p className="gray3 pt-3">
                            {articleDetails.data.description}
                        </p>
                    </div>
                </Col>
                <div className="d-flex gray3 pt-4 justify-content-start align-items-center">

                    <Col>
                        <span className="pr-1"> <BsEyeFill /></span>
                        <span className="pr-3">{articleDetails.data.viewsCount}</span>
                        <span className="pr-3">{articleDetails.data.commentsCount} Comments</span>
                        <span className="pr-3">{articleDetails.data.sharesCount} Share</span>
                    </Col>

                </div>
                <ArticleComments setArticleCommentsState={props.setArticleCommentsState} getNextArticleComments={props.getNextArticleComments} boothId={props.boothId} articleId={props.articleId} articleComments={props.articleComments} />
                <h4 className="text-default text-black text-uppercase pb-1 pt-3" >
                    Some similar articles
            </h4>
                <Row xs={1} sm={2} md={2} lg={3} >
                    {
                        props.similarArticles.data?.map((article, i) => {
                            return <SimilarArticleItem key={`articleItem${i}`} boothId={props.boothId} data={article} loadArticleDetailSection={props.loadArticleDetailSection} tabIndex="1"   onKeyPress={props.loadArticleDetailSection}/>
                        })
                    }
                </Row>
          
        </React.Fragment>
    )
}