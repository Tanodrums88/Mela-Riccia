import React from 'react'
import { Modal } from "react-bootstrap";

import classes from '../singleRecipe.module.scss';

function CommentIsSent(props) {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title className={classes.valutationModal} as={'div'}><h4>Recensione inviata con successo!</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>Grazie per aver recensito questa ricetta!</h2>
            </Modal.Body>
            <Modal.Footer>
                <button className={classes.btnComment} onClick={props.handleCloseComment}>
                    Chiudi
                </button>
            </Modal.Footer>
        </>
    )
}

export default CommentIsSent