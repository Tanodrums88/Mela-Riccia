import { Container } from "react-bootstrap";
import { useState } from "react";

import SpinnerLoading from "../../ui/Spinner";
import ErrorPage from "../../ui/ErrorPage";
import SummaryWrapper from "../../ui/SummaryWrapper";

import classes from './_summary.module.scss';

const Summary = (props) => {
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const item = {
        name: props.items.name,
        cooked: props.items.cooked,
        image: props.items.image,
        category: props.items.category,
        sub_category: props.items.sub_category,
        ingredients: props.items.ingredients,
        description: props.items.description,
        preparation: props.items.preparation,
    }

    const newRecipe = {
        name: item.name,
        cooked: item.cooked,
        image: item.image,
        category: item.category,
        sub_category: item.sub_category,
        ingredients: item.ingredients,
        description: item.description,
        preparation: item.preparation
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
        content = <SummaryWrapper
            user={false}
            data={item}
            back={props.onBack}
            confirm={addRecipeHandler}
        />
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