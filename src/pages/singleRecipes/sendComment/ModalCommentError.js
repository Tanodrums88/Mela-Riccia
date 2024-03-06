import React from 'react'
import { Modal } from "react-bootstrap";

import classes from '../singleRecipe.module.scss';

function ModalCommentError(props) {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title className={classes.valutationModal} as={'div'}><h4>Qualcosa è andato storto</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>{props.error}</h2>
            </Modal.Body>
            <Modal.Footer>
                <button className={classes.btnComment} onClick={props.handleCloseComment}>
                    Chiudi
                </button>
            </Modal.Footer>
        </>
    )
}

export default ModalCommentError