import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Card, Col, Container } from "react-bootstrap";

import useFetchRecipes from "../../util_hook/useFetchRecipes";
import useFilterRecipes from "../../util_hook/useFilterRecipes";

import BackButton from "../../ui/BackButton";
import Wrapper from "../../ui/wrapper";
import CardLoading from "../../ui/cardLoading";
import ErrorPage from "../../ui/ErrorPage";

import classes from "./_categoryRecipes.module.scss";


function CategoryRecipes() {

    const params = useParams();
    let data = params.recipesCategoryID
    const category = 'category';

    const { recipesApi, error, isLoading } = useFetchRecipes();
    const RECIPES = useFilterRecipes(recipesApi, category, data);

    let content = <h3 className="text-center">Nessuna ricetta presente per questo tipo di categoria</h3>;

    if (isLoading) {
        content = <CardLoading />
    }

    if (error) {
        content = <ErrorPage message={error} />
    }

    if (RECIPES.length > 0) {
        content =
            <>
                <Container>
                    <h1>I nostri {data}</h1>
                    <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                        {RECIPES.map((recipe) => (
                            <Col key={recipe.id}>
                                <Card className={classes.card}>
                                    <Card.Img variant="top" src={recipe.image} className={classes.imgCard} />
                                    <Card.Body>
                                        <Card.Title className={classes.cardTitle}>{recipe.name}</Card.Title>
                                        <Card.Text as="div">
                                            <p className={classes.ingredientsTitle}>Ingredienti:</p>
                                            <ul>
                                                {recipe.ingredients.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))
                                                }
                                            </ul>
                                        </Card.Text>
                                        <Link to={`/${recipe.category}/${recipe.sub_category}/${recipe.name}`} className={classes.btnCard}>Vai alla ricetta</Link>
                                    </Card.Body>
                                    <Card.Footer className={classes.cardFooter}>Preparato da {recipe.cooked}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
    }

    return (
        <Fragment>
            <div id={classes.category}>
                {content}
            </div>
            <Wrapper />
            <BackButton />
        </Fragment>
    )
};

export default CategoryRecipes;