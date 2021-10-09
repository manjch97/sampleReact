import React from "react";
import { ButtonGroup, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Article.scss';
import Image1 from '../../../../assets/img/booths/1.svg';
import isURL from "validator/lib/isURL";
import { SUB_STRINF_LENGTH } from '../../../../constants/CommonConstants';
import { useHistory } from "react-router-dom";

export const SimilarArticleItem = (props) => {
   let history = useHistory();
    const data = props.data;
    return (
        <Col className='e3-article-item' onClick={()=> history.push('/booths/'+ props.boothId +'/similararticles/'+ data.articleId)} onKeyPress={()=> history.push('/booths/'+ props.boothId +'/featurearticles/'+ data.articleId)}>
          <div tabIndex="0" className="focusArticleContainer" >
            <Col className='e3-article-image' >
                <img src={isURL(data?.imageUrl) ? data.imageUrl : Image1} alt="loading..." />
                <span className='e3-article-date'>{data.articleDate}</span>
            </Col>
            <h5 className='e3-article-title mt-1'>{data.articleTitle}</h5>
            <p className='e3-article-content' dangerouslySetInnerHTML={{ __html: data.description.substring( 0,SUB_STRINF_LENGTH )+'...' }}></p>
          </div>
        </Col>
    )
}
