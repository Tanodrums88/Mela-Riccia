import { useState } from 'react';

import SpinnerLoading from '../../ui/Spinner';

import classes from '../_admin.module.scss';
import ErrorPage from '../../ui/ErrorPage';
import ModalWrapper from '../../ui/Modal';

function DeleteComment(props) {
    const [isDelete, setIsDelete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const itemName = props.select.user;
    const itemId = props.select.id;

    const url = `http://localhost:5000/reviews/${itemId}`

    async function deleteReview() {
        setIsLoading(true);
        setIsError(null);
        try {
            const response = await fetch(url, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error('An error occurred while deleting the review');
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
        content = <ModalWrapper
            closeModal={props.closeModal}
            obj={"recensione di"}
            name={itemName}
            id={itemId}
            confirm={deleteReview}
        />
    }

    if (isLoading) {
        content = <SpinnerLoading />
    }
    if (isDelete) {
        content = <h1 className={classes.successfetch}>Recensione eliminata con successo!</h1>
    }
    if (isError) {
        content = <ErrorPage message="C'è stato un problema durante la cancellazione della recensione." />
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

export default DeleteComment;