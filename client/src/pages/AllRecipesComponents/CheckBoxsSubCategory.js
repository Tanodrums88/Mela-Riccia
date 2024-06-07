import React from 'react';
import { Form } from 'react-bootstrap';

import classes from '../_AllRecipes.module.scss';

function CheckBoxsSubCategory({ toCheckCategory, control }) {
    return (
        <>
            <Form.Check
                checked={toCheckCategory.Pasta}
                className={classes.formCheck}
                type="switch"
                id={"Pasta"}
                label={"Pasta"}
                value={"Pasta"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.Risotti}
                className={classes.formCheck}
                type="switch"
                id={"Risotti"}
                label={"Risotti"}
                value={"Risotti"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.AltriPrimi}
                className={classes.formCheck}
                type="switch"
                id={"Altri Primi"}
                label={"Altri Primi"}
                value={"Altri Primi"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.SecondiDiCarne}
                className={classes.formCheck}
                type="switch"
                id={"Secondi di Carne"}
                label={"Secondi di Carne"}
                value={"Secondi di Carne"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.SecondiDiPesce}
                className={classes.formCheck}
                type="switch"
                id={"Secondi di Pesce"}
                label={"Secondi di Pesce"}
                value={"Secondi di Pesce"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.SecondiVegetariani}
                className={classes.formCheck}
                type="switch"
                id={"Secondi Vegetariani"}
                label={"Secondi Vegetariani"}
                value={"Secondi Vegetariani"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.DolciConCottura}
                className={classes.formCheck}
                type="switch"
                id={"Dolci con Cottura"}
                label={"Dolci con Cottura"}
                value={"Dolci con Cottura"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.DolciSenzaCottura}
                className={classes.formCheck}
                type="switch"
                id={"Dolci senza Cottura"}
                label={"Dolci senza Cottura"}
                value={"Dolci senza Cottura"}
                onChange={control}
            />
        </>
    )
}

export default CheckBoxsSubCategory;