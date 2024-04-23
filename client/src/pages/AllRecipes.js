import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetchRecipes from '../util_hook/useFetchRecipes';

import BadgeReviews from './AllRecipesComponents/BadgeReviews';
import BackButton from '../ui/BackButton';
import SpinnerLoading from '../ui/Spinner';
import Wrapper from '../ui/wrapper';
import ErrorPage from '../ui/ErrorPage';
import FilteroffCanvas from './AllRecipesComponents/OffCanvasFilter';

import classes from './_AllRecipes.module.scss';

function AllRecipes() {

    const navigate = useNavigate();

    const [filterIsActive, setFilterIsActive] = useState();

    const { recipesApi, error, isLoading } = useFetchRecipes();

    let content;

    const [dataCategory, setDataCategory] = useState();
    const [dataSub_Category, setDataSub_Category] = useState();

    //console.log(dataCategory, dataSub_Category);

    if (isLoading) {
        content = <>
            <SpinnerLoading />
            <Wrapper />
            <SpinnerLoading />
            <Wrapper />
            <SpinnerLoading />
            <Wrapper />
            <SpinnerLoading />
        </>
    }

    if (error) {
        content = <ErrorPage message={error} />
    }

    if (recipesApi.length > 0) {
        content =
            <>
                <div className={classes.flexTitle}>
                    <h1>Cerca tra tutte le ricette</h1>
                    <FilteroffCanvas onFilter={setFilterIsActive} items={recipesApi} theChekedCategory={setDataCategory} theChekedSub_Category={setDataSub_Category} />
                </div>

                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {recipesApi.map((recipe) => (
                        <Col key={recipe.id} onClick={() => { navigate(`/${recipe.category}/${recipe.sub_category}/${recipe.name}`) }}>
                            <Card className={classes.cardFilter}>
                                <Card.Img src={recipe.image} alt={recipe.name} style={{ height: '200px', width: '100%' }} />
                                <Card.ImgOverlay>
                                    <Card.Title>{recipe.name}</Card.Title>
                                    <Card.Text>{recipe.cooked}</Card.Text>
                                    <BadgeReviews name={recipe.name} />
                                </Card.ImgOverlay>
                                <Card.Footer>Vai alla ricetta</Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
    }

    if (filterIsActive) {
        content =
            <>
                <div className={classes.flexTitle}>
                    <h1>Cerca tra tutte le ricette</h1>
                    <FilteroffCanvas onFilter={setFilterIsActive} items={recipesApi} theChekedCategory={setDataCategory} theChekedSub_Category={setDataSub_Category} />
                </div>

                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {recipesApi.filter((recipe) =>
                        Object.keys(dataCategory).length === 0 ? true : !!dataCategory[recipe.category] &&
                            Object.keys(dataSub_Category).length === 0 ? true : !!dataSub_Category[recipe.sub_category]
                    )
                        .map((recipe) => (
                            <Col key={recipe.id} onClick={() => { navigate(`/${recipe.category}/${recipe.sub_category}/${recipe.name}`) }}>
                                <Card className={classes.cardFilter}>
                                    <Card.Img src={recipe.image} alt={recipe.name} style={{ height: '200px', width: '100%' }} />
                                    <Card.ImgOverlay>
                                        <Card.Title>{recipe.name}</Card.Title>
                                        <Card.Text>{recipe.cooked}</Card.Text>
                                    </Card.ImgOverlay>
                                    <Card.Footer>Vai alla ricetta</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </>
    }

    return (
        <>
            <Container fluid id={classes.allRecipes}>
                {content}
                <BackButton />
            </Container>
        </>
    )
}
export default AllRecipes;