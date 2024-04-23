import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
//import InputIngredient from './InputIngredient';

import classes from './_ingredientModal.module.scss';
import ItemsHandler from './ItemsHandler';

function IngredientModal(props) {

    const [data, setData] = useState();
    const [isPresent, setIsPresent] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);

    const IngredientsList = (items) => {
        const num = items.length;
        setIsPresent(num);
        setData(items);
    }

    useEffect(() => {
        if (isPresent > 0) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [isPresent]);


    const SendingIngredientsList = () => {
        const items = data
        props.ingredientsnew(items);
        props.onHide();
    }


    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Aggiungi gli Ingredienti
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.modalBody}>
                <ItemsHandler sendingIngredient={IngredientsList} />
            </Modal.Body>
            <Modal.Footer className={classes.modalFooter}>
                <button onClick={props.onHide} className={classes.button}>Annulla</button>
                <button onClick={SendingIngredientsList} className={classes.button} disabled={isDisabled}>Conferma</button>
            </Modal.Footer>
        </Modal>
    );
};

export default IngredientModal;

/**
 * 
 * <InputIngredient sendingIngredient={IngredientsList} />
 * 
 */