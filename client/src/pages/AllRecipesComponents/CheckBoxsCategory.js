import React from 'react';
import { Form } from 'react-bootstrap';

import classes from '../_AllRecipes.module.scss';

function CheckBoxsCategory({ toCheckCategory, control }) {
    return (
        <>
            <Form.Check
                checked={toCheckCategory.Primi}
                className={classes.formCheck}
                type="switch"
                id={"Primi"}
                label={"Primi"}
                value={"Primi"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.Secondi}
                className={classes.formCheck}
                type="switch"
                id={"Secondi"}
                label={"Secondi"}
                value={"Secondi"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.Contorni}
                className={classes.formCheck}
                type="switch"
                id={"Contorni"}
                label={"Contorni"}
                value={"Contorni"}
                onChange={control}
            />
            <Form.Check
                checked={toCheckCategory.Dolci}
                className={classes.formCheck}
                type="switch"
                id={"Dolci"}
                label={"Dolci"}
                value={"Dolci"}
                onChange={control}
            />
        </>
    )
}

export default CheckBoxsCategory;