import { useState } from "react"
import NewItem from "./NewItem";
import ListItems from "./ListItems";

import classes from './_ingredientModal.module.scss';


export default function ItemsHandler(props) {

    const [items, setItems] = useState([]);

    const addNewIngredient = (obj) => {
        const itemsCopy = Array.from(items);
        itemsCopy.push({ id: items.length, value: obj });
        const newItems = itemsCopy.map((e) => (e.value));
        setItems(itemsCopy);
        props.sendingIngredient(newItems);
    }

    const updateList = ({ target }, index) => {
        const itemsCopy = Array.from(items);
        itemsCopy.splice(index, 1, { id: index, value: target.value });
        setItems(itemsCopy);
    }

    const deleteIngredient = (index) => {
        const itemsCopy = Array.from(items);
        itemsCopy.splice(index, 1);
        setItems(itemsCopy);
    }

    return (
        <div className={classes.inputBox}>
            <NewItem onAddElements={addNewIngredient} />
            <div className={classes.inputList}>
                {items.map(({ id, value }, index) => (
                    <ListItems
                        key={id}
                        value={value}
                        onDelete={() => deleteIngredient(index)}
                        onChange={(event) => updateList(event, index)}
                    />
                ))}
            </div>
        </div>
    )
}
