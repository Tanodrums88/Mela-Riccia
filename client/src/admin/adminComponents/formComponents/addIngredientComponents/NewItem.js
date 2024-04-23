import { useState, useRef } from "react";

import classes from './_ingredientModal.module.scss';

export default function NewItem({ onAddElements }) {

    const inputRef = useRef();
    const [newItem, setNewItem] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const setNewIngredient = ({ target }) => {
        setNewItem(target.value);
        if (newItem === "") {
            setIsDisabled(true);
        }
        if (newItem !== "") {
            setIsDisabled(false);
        }
    }

    const submit = (event) => {
        event.preventDefault();
        onAddElements(newItem)
        inputRef.current.value = '';
        setIsDisabled(true);
    };

    return (
        <div className={classes.inputAdd}>
            <input
                type="text"
                ref={inputRef}
                placeholder="digita un ingrediente"
                onChange={setNewIngredient}
            />
            <button type="button" onClick={submit} disabled={isDisabled}>Aggiungi</button>
        </div>
    )
}
