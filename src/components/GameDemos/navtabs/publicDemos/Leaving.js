import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Leaving = () => {
    const [show, setShow] = useState();
    const handleClose = () => { setShow(false) }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h1>You’re now leaving E3</h1>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <small></small>
                        <span>This will load the game demo you selected in a new browser</span>
                    </div>
                </Modal.Body>
                <Button variant="danger">Start Game Demo</Button>
                <Button variant="dark">Cancel</Button>
            </Modal>
        </div>
    )
}

export default Leaving;