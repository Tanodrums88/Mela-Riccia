import { Modal } from 'react-bootstrap';
import { useState } from 'react';

import SpinnerLoading from '../../ui/Spinner';

import classes from '../_admin.module.scss';
import ErrorPage from '../../ui/ErrorPage';

function ModalDeleteComment(props) {
    const [isDelete, setIsDelete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const itemName = props.select.user;
    const itemId = props.select.id;

    const url = `https://react-http-88-default-rtdb.europe-west1.firebasedatabase.app/comments/${itemId}.json`

    async function deleteRecipe() {
        setIsLoading(true);
        setIsError(null);
        try {
            const response = await fetch(url, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error('An error occurred while deleting the recipe');
            }
            setIsDelete(true);
            return response.json();
        } catch (error) {
            setIsError(error.message);
        }
        setIsLoading(false);
    };

    let content;

    if (!isDelete) {
        content =
            <Modal.Dialog>
                <Modal.Header closeButton onClick={props.closeModal}>
                    <Modal.Title>Annulla o Conferma</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Sei sicuro di voler cancellare la recensione di <b>{itemName}</b>?</p>
                    <p>id elemento n° {itemId}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className={classes.buttonConfirm} onClick={props.closeModal}>Annulla</button>
                    <button className={classes.buttonConfirm} onClick={deleteRecipe}>Conferma</button>
                </Modal.Footer>
            </Modal.Dialog>
    }

    if (isLoading) {
        content = <SpinnerLoading />
    }
    if (isDelete) {
        content = <h1 className={classes.successfetch}>Ricetta eliminata con successo!</h1>
    }
    if (isError) {
        content = <ErrorPage message="C'è stato un problema durante la cancellazione della ricetta." />
    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            {content}
        </div>
    );
}

export default ModalDeleteComment;