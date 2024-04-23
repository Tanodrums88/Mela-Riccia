import React from 'react'
import { Modal, Form } from "react-bootstrap";

import classes from '../singleRecipe.module.scss';

function FormComment(props) {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title className={classes.valutationModal} as={'div'}><h4>Valuta questa ricetta</h4>
                    <Form.Select aria-label="Default select example" onClick={props.selectValutation}>
                        <option value="0">Dai un voto da 1 a 5 stelle</option>
                        <option value="1">&#9733;</option>
                        <option value="2">&#9733;&#9733;</option>
                        <option value="3">&#9733;&#9733;&#9733;</option>
                        <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                        <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                    </Form.Select>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.bodyModalComment}>
                <input
                    type='text'
                    placeholder='nome'
                    ref={props.userNameRef}
                    onChange={props.userNameChange}
                />
                <textarea
                    type='text'
                    placeholder='scrivi una recensione'
                    ref={props.reviewRef}
                    onChange={props.reviewChange}
                />
            </Modal.Body>
            <Modal.Footer>
                <button className={classes.btnComment} onClick={props.handleCloseComment}>
                    Annulla
                </button>
                <button
                    className={classes.btnComment}
                    onClick={props.sendComment}
                    disabled={props.buttonIsDisabled}
                >
                    Invia
                </button>
            </Modal.Footer>
        </>
    )
}

export default FormComment