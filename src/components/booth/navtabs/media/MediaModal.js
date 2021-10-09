import React from 'react';
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import banner from "../../../../assets/img/booths/banner.jpg"
export const MediaModal = (props) => {
    return (
       <React.Fragment>
        <Modal
            show={ props.show }
            onHide={() => props.setShow(false)}
            dialogClassName="e3-media-modal"
            aria-labelledby=""
            animation="true"
            autoFocus="true"
            size="lg"
        >
            <Modal.Header closeButton></Modal.Header>
            <ReactPlayer
                className='e3-media-react-player'
                url={props.url}
                width='100%'
                height='100%'
                controls='true'
            />
            <Modal
            show={ props.show }
            onHide={() => props.setShow(false)}
            dialogClassName="e3-media-modal-preview"
            aria-labelledby=""
            animation="true"
            autoFocus="true"
        >
            <img src={banner}></img>
      </Modal>
      </Modal>
     </React.Fragment>
    )
}