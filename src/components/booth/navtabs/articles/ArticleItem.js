import React from "react";
import { ButtonGroup, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Article.scss';
import Image1 from '../../../../assets/img/booths/1.svg';
import isURL from "validator/lib/isURL";
import { SUB_STRINF_LENGTH } from '../../../../constants/CommonConstants';

export const ArticleItem = (props) => {

    const data = props.data;
    return (
        <Col className='e3-article-item' onClick={() => props.loadArticleDetailSection(data.articleId)} onKeyPress={() => props.loadArticleDetailSection(data.articleId)}>
          <div tabIndex="0" className="focusArticleContainer" >
            <Col className='e3-article-image' >
                <img src={isURL(data?.imageUrl) ? data.imageUrl : Image1} alt="loading..." />
                <span className='e3-article-date'>{data.articleDate}</span>
                {/* <ButtonGroup vertical className='e3-artcile-social-btn'>
                    <Button variant='dark'><FontAwesomeIcon icon={faFacebookF} /></Button>
                    <Button variant='dark'><FontAwesomeIcon icon={faTwitter} /></Button>
                    <Button variant='dark'><FontAwesomeIcon icon={faInstagram} /></Button>
                </ButtonGroup> */}
            </Col>
            <h5 className='e3-article-title mt-1'>{data.articleTitle}</h5>
            <p className='e3-article-content' dangerouslySetInnerHTML={{ __html: data.description.substring( 0,SUB_STRINF_LENGTH )+'...' }}></p>
          </div>
        </Col>
    )
}
