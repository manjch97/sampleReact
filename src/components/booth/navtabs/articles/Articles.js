import React from "react";
import { Row, Col } from 'react-bootstrap';
import { ArticleDetails } from "./ArticleDetails";
import { ArticleList } from './ArticleList'
import { ArticleSideBar } from './ArticleSideBar'


const Articles = (props) => {

    const ArticleSection = (props) => {
       return ( <React.Fragment>
            <h4 className='e3-tab-title'>Articles</h4>
            <Row>
                <Col xl={9}>
                    <ArticleList fetchBoothArticles={props.fetchBoothArticles} data={props.data} props={props} loadArticleDetailSection={props.loadArticleDetailSection}/>
                </Col>
                <Col xl={3} className="mt-xl-n5">
                    <ArticleSideBar data={props.sideArticledata} props={props} boothId = {props.boothId}/>
                </Col>
            </Row>
        </React.Fragment>
       )
    }

    const ArticleDetailSection = (props) =>{
        console.log('ArticleDetailSection', props);
        return ( <React.Fragment>
             <Row>
                 <Col xl={9}>
                     <ArticleDetails 
                                articleId={props.articleDetails.data.articleId}
                                boothId={props.boothId}
                                similarArticles={props.similarArticles} 
                                articleDetails={props.articleDetails} 
                                loadArticleDetailSection={props.loadArticleDetailSection}
                                getNextArticleComments={props.getNextArticleComments}
                                setArticleCommentsState={props.setArticleCommentsState}
                                articleComments={props.articleComments} />
                 </Col>
                 <Col xl={3} className="mt-xl-n5">
                     <ArticleSideBar data={props.sideArticledata} boothId = {props.boothId}/>
                 </Col>
             </Row>
         </React.Fragment>
        )
    }

    return (
        props.articleDetailSection ? 
        <ArticleDetailSection   props={props} 
            boothId={props.boothId} articleId={props.articleDetails.data.articleId}
                                similarArticles={props.similarArticles} 
                                articleDetails={props.articleDetails} 
                                sideArticledata={props.sideArticledata}    
                                loadArticleDetailSection={props.loadArticleDetailSection}
                                boothId = {props.boothId}
                                getNextArticleComments={props.getNextArticleComments}
                                setArticleCommentsState={props.setArticleCommentsState}
                                articleComments={props.articleComments}/>
        :
        <ArticleSection         data={props.data} 
                                sideArticledata={props.sideArticledata} 
                                loadArticleDetailSection={props.loadArticleDetailSection}
                                boothId = {props.boothId}
                                fetchBoothArticles={props.fetchBoothArticles}
                                props={props}/>
    );

}
export default Articles;
