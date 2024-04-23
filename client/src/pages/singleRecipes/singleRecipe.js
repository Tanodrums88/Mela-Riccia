import { useParams } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import CommentHandler from "./commentHandler";
import SendCommentHandler from "./sendComment/SendCommentHandler";
import BackButton from '../../ui/BackButton';
import SpinnerLoading from "../../ui/Spinner";
import ErrorPage from "../../ui/ErrorPage";
import GroupButtons from "../../ui/GroupButtons";
import ModalImageCurrent from "../../ui/modalImageCurrent";

import useFetchRecipes from "../../util_hook/useFetchRecipes";
import useFilterRecipes from "../../util_hook/useFilterRecipes";

import classes from './singleRecipe.module.scss';

const SingleRecipe = () => {

    const [modalShow, setModalShow] = useState(false);
    const params = useParams();
    let data = params.recipeNameID;
    const category = 'single_recipe';

    const { recipesApi, error, isLoading } = useFetchRecipes();
    const RECIPE = useFilterRecipes(recipesApi, category, data);

    const print = () => {
        var prwin = window.open('', 'print', 'top=4000,left=4000');
        var cont = document.getElementById('printed').innerHTML;
        prwin.document.write("<html><head> </head><body>");
        prwin.document.write(cont);
        prwin.document.write("</body></html>");
        prwin.focus();
        prwin.print();
    };

    let content;

    if (isLoading) {
        content = <SpinnerLoading />
    }

    if (error) {
        content = <ErrorPage message="C'è stato un errore durante il caricamento della pagina" />
    }

    if (RECIPE.length > 0) {
        let obj = RECIPE.map((e) => (
            e.name
        ));

        const name = obj.toString();

        const preparationFocus = RECIPE.map((e) => (e.preparation));
        const preparationSplit = preparationFocus.toString().split(';')
        const preparationArray = preparationSplit.map((e, index) => (
            <ul key={index} className={classes.preparation}>
                <li>{e}</li>
            </ul>
        ))

        content =
            <>
                {RECIPE.map((item) => (
                    <Container key={item.id} id="printed">
                        <div className={classes.singleRecipe}>
                            <h1>{item.name}</h1>
                            <h5>Preparato da: {item.cooked}</h5>
                            <Row className={classes.singleRecipeRow}>
                                <Col className={classes.colImg} lg={6}>
                                    <img src={item.image} alt={item.name} onClick={() => setModalShow(true)} />
                                </Col>
                                <Col className={classes.colIngredients} lg={5}>
                                    <ul><p>Ingredienti:</p>
                                        {item.ingredients.map((e, index) => (
                                            <li key={index}>{e}</li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                            <Container className={classes.containerBottom}>
                                <h5 className={classes.description}>{item.description}</h5>
                                <h3>Procedimento</h3>
                                {preparationArray}
                            </Container>
                        </div>
                        <ModalImageCurrent
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            image={item.image}
                            name={item.name}
                        />
                        <h2 className="text-center">Buon Appetito!</h2>
                        <GroupButtons onPrint={print} el={name} />
                    </Container>
                ))
                }
                <SendCommentHandler recipe={RECIPE} />
                <CommentHandler recipe={RECIPE} />
            </>
    }

    return (
        <>
            {content}
            <BackButton />
        </>
    )
};

export default SingleRecipe;