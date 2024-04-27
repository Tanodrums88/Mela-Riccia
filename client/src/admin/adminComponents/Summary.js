import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import SpinnerLoading from "../../ui/Spinner";
import ErrorPage from "../../ui/ErrorPage";

import classes from './_summary.module.scss';

const Summary = (props) => {
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const name = props.items.name;
    const cooked = props.items.cooked;
    const image = props.items.image;
    const category = props.items.category;
    const sub_category = props.items.sub_category;
    const ingredients = props.items.ingredients;
    const description = props.items.description;
    const preparation = props.items.preparation;

    const newRecipe = {
        name: name,
        cooked: cooked,
        image: image,
        category: category,
        sub_category: sub_category,
        ingredients: ingredients,
        description: description,
        preparation: preparation
    }

    const url = 'http://localhost:5000/recipes';

    async function addRecipeHandler() {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(newRecipe),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('An error occurred while updating the recipe');
            }
            setIsSent(true);

            const data = await response.json();
            return data;
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false);
    }

    let content;

    if (!isSent) {
        content =
            <>
                <h1>Riepilogo dati inseriti</h1>
                <Row className={classes.row}>
                    <Col><h3>Nome Ricetta: {name}</h3></Col>
                    <Col><h3>Chi la preparato: {cooked}</h3></Col>
                </Row>
                <Row className={classes.row}>
                    <Col><img src={image} alt={name} /></Col>
                    <Col>
                        <ul>Ingredienti:
                            {ingredients.map((e, index) => (
                                <li key={index}>{e}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <Row><p>Categoria: {category}</p></Row>
                        <Row><p>Sotto Categoria: {sub_category}</p></Row>
                    </Col>
                </Row>

                <Row className={classes.row}>
                    <Col><p>Descrizione: {description}</p></Col>
                </Row>
                <Row className={classes.row}>
                    <Col><p>Preparazione: {preparation}</p></Col>
                </Row>
                <div className={classes.buttonGroup}>
                    <button onClick={props.onBack}>Annulla</button>
                    <button onClick={addRecipeHandler}>Conferma</button>
                </div>
            </>
    }
    if (isLoading) {
        content = <SpinnerLoading />
    }

    if (error) {
        content = <ErrorPage message="C'è stato un problema durante l'invio della ricetta" />
    }

    if (isSent) {
        content = <h1 className={classes.successfetch}>Ricetta Inviata con Successo!</h1>
    }


    return (
        <Container className={classes.summary}>
            {content}
        </Container>
    )
};

export default Summary;