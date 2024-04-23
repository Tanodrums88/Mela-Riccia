import React from 'react'
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import classes from './_ui.module.scss';

const ErrorPage = (props) => {
    return (
        <Container className={classes.errorPageBox}>
            <h1>Qualcosa è andato storto</h1>
            <Icon.EmojiFrown />
            <h4>{props.message}</h4>
            <h4>Riprova più tardi oppure contatta l'amministratore</h4>
        </Container>
    )
}

export default ErrorPage;
