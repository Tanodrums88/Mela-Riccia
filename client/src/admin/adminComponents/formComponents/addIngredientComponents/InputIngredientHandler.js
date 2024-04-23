import { useState } from "react";
import IngredientModal from "./IngredientsModal";

import classes from './_ingredientModal.module.scss';

function IngredientsHandler(props) {
    const [modalShow, setModalShow] = useState(false);

    const ingredientsList = (e) => {
        const items = (e)
        props.ingredientsList(items)
    }

    return (
        <>
            <p className={classes.buttonForModal} onClick={() => setModalShow(true)}>
                Aggiungi gli Ingredienti
            </p>

            <IngredientModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                ingredientsnew={ingredientsList}
            />
        </>
    );
}

export default IngredientsHandler;