import React from 'react';
import { Modal } from "react-bootstrap";

import SpinnerLoading from '../../../ui/Spinner';

import classes from '../singleRecipe.module.scss';

function ModalCommentSending() {
    return (
        <>
            <Modal.Header>
                <Modal.Title className={classes.valutationModal} as={'div'}><h4>Invio in corso...</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SpinnerLoading />
            </Modal.Body>
            <Modal.Footer>
                <button className={classes.btnComment} disabled>
                    Chiudi
                </button>
                <button
                    className={classes.btnComment}
                    disabled
                >
                    Invia
                </button>
            </Modal.Footer>
        </>
    )
}

export default ModalCommentSending