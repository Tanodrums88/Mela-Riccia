import { useState } from 'react';

import SpinnerLoading from '../../ui/Spinner';

import classes from '../_admin.module.scss';
import ErrorPage from '../../ui/ErrorPage';
import ModalWrapper from '../../ui/Modal';

function DeleteRecipe(props) {
    const [isDelete, setIsDelete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const itemName = props.select.name;
    const itemId = props.select.id;

    const url = `http://localhost:5000/recipes/${itemId}`

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
        content = <ModalWrapper
            closeModal={props.closeModal}
            confirm={deleteRecipe}
            name={itemName}
            id={itemId}
            obj={"ricetta"}
        />
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

export default DeleteRecipe;