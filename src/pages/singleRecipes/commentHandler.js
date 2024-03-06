import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Comments from './Comments';

import classes from './singleRecipe.module.scss';

function CommentHandler({ recipe }) {

    const recipeName = recipe.map((e) => e.name);

    return (
        <Container fluid className={classes.comment}>
            <h3 style={{ textAlign: 'center' }}>Recensioni degli utenti</h3>
            <Row xl={4} lg={3} md={2} sm={2} xs={1} className="justify-content-xs-center">
                <Comments recipeName={recipeName} />
            </Row>
        </Container>
    )
}

export default CommentHandler