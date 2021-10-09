import React from "react";
import { Row} from 'react-bootstrap';
import { ArticleItem } from './ArticleItem'
import './Article.scss';
import { GetSpinner } from "../../../../helper/CommonHelper";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    ARTICLE_EMPTY
  } from "../../../../constants/CommonConstants";
export const ArticleList = (props) => {
    
    const windowHeight = 250 * 2;
    const articlesData = props.data;

    if (articlesData.loading) {
        return <GetSpinner/>
    }

    if (articlesData.dataLoaded && articlesData.data.length <= 0) {
        return (<div className="black text-24 font-weight-500">{ARTICLE_EMPTY}</div>)
    }

    return (
        <React.Fragment>
          <div id="scrollableArticleDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
           <InfiniteScroll
                    dataLength={articlesData.data.length}
                    next={()=>props.fetchBoothArticles(articlesData.page+1,false)}
                    hasMore={articlesData.hasMore}
                    loader={articlesData.page > 1 && <GetSpinner/>}
                    style={{ overflow: 'hidden' }}
                    scrollableTarget="scrollableArticleDiv"
                >
            <Row xs={1} sm={2} md={2} lg={3}>
                {
                    articlesData.data.map((article, i) => {
                        return <ArticleItem key={`articleItem${i}`} loadArticleDetailSection={props.loadArticleDetailSection} data={article} props={props.props}/>
                    })
                }
            </Row>
            </InfiniteScroll>
            </div>
        </React.Fragment>
    )
}