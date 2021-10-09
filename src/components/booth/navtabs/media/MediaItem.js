import React, { useState } from "react";
import { Button, Row, Col, Image, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlay } from '@fortawesome/free-solid-svg-icons'
import './Media.scss';
import Image1 from '../../../../assets/img/booths/1.svg';
import isURL from "validator/lib/isURL";
import { MediaModal } from './MediaModal';


export const MediaItem = (props) => {
    const [show, setShow] = useState(false);
    return (
        <Col className="pb-3 pr-0" >
            <div className='e3-media-item' tabIndex="0">
                <Image src={isURL(props?.image) ? props.image : Image1} />
                <button className='e3-btn-play' onClick={() => setShow(true)}>
                    <FontAwesomeIcon icon={faPlay} />
                </button>
                <span className='e3-media-views'>
                    <FontAwesomeIcon icon={faEye} /> {props.views}
                </span>
            </div>
            <MediaModal show={show} setShow={setShow} url="https://www.youtube.com/watch?v=gG0p_YeA7bk"/>
        </Col>
    )
}