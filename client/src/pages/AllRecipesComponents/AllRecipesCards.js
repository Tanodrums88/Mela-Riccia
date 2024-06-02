import { useNavigate } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

import BadgeReviews from "./BadgeReviews";

import classes from '../_AllRecipes.module.scss';

const AllRecipesCards = ({ recipesApi }) => {

    const navigate = useNavigate();

    return (
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
    );
};

export default AllRecipesCards;