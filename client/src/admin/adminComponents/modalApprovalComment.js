import { useState } from 'react';
import { Col, Container, Row, Modal } from "react-bootstrap"

import SpinnerLoading from '../../ui/Spinner';

import classes from '../_admin.module.scss';

function ModalApprovalComment(props) {

    const [showApprovalChoice, setShowApprovalChoice] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [isError, setIsError] = useState(null);

    const itemId = props.select.id;
    const itemName = props.select.recipeName;
    const itemUser = props.select.user;
    const itemValutation = props.select.valutation;
    const itemDate = props.select.date;
    const itemReview = props.select.review;
    const itemApproved = props.select.approved;

    let star;

    if (itemValutation === '1') {
        star = 'stella'
    } else {
        star = 'stelle'
    }

    const url = `http://localhost:5000/reviews/${itemId}`

    const commentApproval = {
        approved: true,
        date: itemDate,
        name: itemName,
        review: itemReview,
        user: itemUser,
        valutation: itemValutation
    }

    const approvalComment = async () => {
        setIsLoading(true);
        setIsError(null);
        try {
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(commentApproval),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error('An error occurred while updating the comment');
            }
            setIsApproved(true);
            return response.json();
        } catch (error) {
            setIsError(error.message)
        }
        setIsLoading(false);
    }

    let content;

    if (!showApprovalChoice) {
        content = <>
            <Row className={classes.commentRow}>
                <Col><h4>Ricetta recensita:<br />{itemName}</h4></Col>
                <Col><h4>Recensito da:<br />{itemUser}</h4></Col>
            </Row>
            <Row className={classes.commentRow}>
                <Col><h4>Data recensione:<br />{itemDate}</h4></Col>
                <Col><h4>Voto recensione: {itemValutation} {star}</h4></Col>
            </Row>
            <Row className={classes.commentRow}>
                <Col><h4>Recensione:<br /> {itemReview}</h4></Col>
                <Col><h4>Approvato: {itemApproved ? 'Si' : 'No'}</h4></Col>
            </Row>
            <div className={classes.buttonGroup}>
                <button onClick={props.closeModal}>Annulla</button>
                {!itemApproved && <button onClick={() => setShowApprovalChoice(true)}>Approva</button>}
            </div>
        </>
    }

    if (showApprovalChoice) {
        content = <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={props.closeModal}>
                        <Modal.Title>Annulla o Conferma</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Sei sicuro di voler approvare la recensione di <b>{itemUser}</b>?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className={classes.buttonConfirm} onClick={props.closeModal}>Annulla</button>
                        <button className={classes.buttonConfirm} onClick={approvalComment}>Approva</button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>
    }

    if (isLoading) {
        content = <SpinnerLoading />
    }

    if (isError) {
        content = <h2>Qualcosa è andato storto. {isError}</h2>
    }

    if (isApproved) {
        content = <h2>Recensione approvata con successo e visibile a tutti nella pagina della ricetta: "{itemName}"</h2>
    }

    return (
        <>
            <Container className={classes.approvalComment}>
                <h2>Gestisci la recensione</h2>
                {content}
            </Container>
        </>
    )
}

export default ModalApprovalComment