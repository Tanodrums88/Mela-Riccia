import { useRef, useState } from 'react';
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

import CategorySection from "./CategoryHandler";
import IngredientsHandler from "./addIngredientComponents/InputIngredientHandler";

import useInput from '../../../util_hook/useInput';
import classes from '../../_admin.module.scss';

function FormAdmir(props) {

    const [categorySelectedRef, setCategorySelctedRef] = useState();
    const [subCategorySelectedRef, setSubCategorySelctedRef] = useState();
    const [ingredientSelector, setIngredientSelector] = useState([]);

    const nameRef = useRef();
    const cookedRef = useRef();
    const descriptionRef = useRef();
    const preparationRef = useRef();

    const categorySelected = (category) => {
        setCategorySelctedRef(category)
    }
    const subCategorySelected = (subCategory) => {
        setSubCategorySelctedRef(subCategory)
    }
    const ingredientsSelector = (el) => {
        let ingredientsFinal = []
        const enteredEl = el
        ingredientsFinal = [...enteredEl]
        setIngredientSelector(ingredientsFinal)
    }

    const [imgData, setImgData] = useState(null);

    const onChangePicture = e => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredCooked,
        isValid: enteredCookedIsValid,
        hasError: cookedInputHasError,
        valueChangeHandler: cookedChangeHandler,
        inputBlurHandler: cookedBlurHandler,
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredDescription,
        isValid: enteredDescriptionIsValid,
        hasError: descriptionInputHasError,
        valueChangeHandler: descriptionChangeHandler,
        inputBlurHandler: descriptionBlurHandler,
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredPreparation,
        isValid: enteredPreparationIsValid,
        hasError: preparationInputHasError,
        valueChangeHandler: preparationChangeHandler,
        inputBlurHandler: preparationBlurHandler,
    } = useInput(value => value.trim() !== '');

    let formIsValid = false;

    if (enteredNameIsValid && enteredCookedIsValid && enteredDescriptionIsValid && enteredPreparationIsValid) {
        formIsValid = true;
    }

    const nameInputClasses = nameInputHasError ? `${classes.invalid}` : '';
    const cookedInputClasses = cookedInputHasError ? `${classes.invalid}` : '';
    const descriptionInputClasses = descriptionInputHasError ? `${classes.invalid}` : '';
    const preparationInputClasses = preparationInputHasError ? `${classes.invalid}` : '';

    let list

    if (ingredientSelector.length === 0) {
        list = <p>Nessun ingrediente inserito</p>
    }

    if (ingredientSelector.length > 0) {
        list = <>
            {
                ingredientSelector.map((e, index) => (
                    <li key={index}>{e}</li>
                ))
            }
        </>
    }


    const errorText = <p className={classes['error-text']}>Devi compilare il campo.</p>;



    const dataRecipe = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }

        const enteredNameRef = nameRef.current.value;
        const enteredCookedRef = cookedRef.current.value;
        const entereDescriptionRef = descriptionRef.current.value;
        const enterePreparationRef = preparationRef.current.value;

        const data = {
            name: enteredNameRef,
            cooked: enteredCookedRef,
            image: imgData,
            category: categorySelectedRef,
            sub_category: subCategorySelectedRef,
            ingredients: ingredientSelector,
            description: entereDescriptionRef,
            preparation: enterePreparationRef
        }

        props.formData(data)
    }

    return (
        <Container>
            <Form onSubmit={dataRecipe}>
                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridNameRecipe">
                        <Form.Label>Nome Ricetta</Form.Label>
                        <Form.Control
                            className={nameInputClasses}
                            type="text"
                            placeholder="Inserisci il nome della ricetta"
                            ref={nameRef}
                            value={enteredName}
                            onChange={nameChangeHandler}
                            onBlur={nameBlurHandler}
                        />
                        {nameInputHasError && errorText}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridNameCooked" as={Col}>
                        <Form.Label>Nome e Città di chi l'ha preparato</Form.Label>
                        <Form.Control
                            className={cookedInputClasses}
                            placeholder="Nome e Provenienza"
                            ref={cookedRef}
                            value={enteredCooked}
                            onChange={cookedChangeHandler}
                            onBlur={cookedBlurHandler}
                        />
                        {cookedInputHasError && errorText}
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="formImage" className="mb-3" as={Col}>
                        <Form.Label>Carica una Foto del Piatto</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={onChangePicture}
                        />
                    </Form.Group>
                    <CategorySection categorySelection={categorySelected} subCategorySelection={subCategorySelected} />
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="ingredients" className="mb-3" as={Col}>
                        <Form.Label>
                            <IngredientsHandler ingredientsList={ingredientsSelector} />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group controlId="ingredientsList" className="mb-3" as={Col}>
                        <Form.Label>
                            <ul className={classes.list}>
                                {list}
                            </ul>
                        </Form.Label>
                    </Form.Group>
                </Row>

                <Form.Label>Descrizione</Form.Label>
                <FloatingLabel controlId="floatingTextareaDescription" className="mb-3">
                    <Form.Control
                        className={descriptionInputClasses}
                        as="textarea"
                        placeholder="Presentazione del piatto"
                        ref={descriptionRef}
                        value={enteredDescription}
                        onChange={descriptionChangeHandler}
                        onBlur={descriptionBlurHandler}
                    />
                    {descriptionInputHasError && errorText}
                </FloatingLabel>

                <Form.Label>Preparazione</Form.Label>
                <FloatingLabel controlId="floatingTextareaPreparation">
                    <Form.Control
                        className={preparationInputClasses}
                        as="textarea"
                        placeholder="Procedimento di preparazione del piatto"
                        style={{ height: '100px' }}
                        ref={preparationRef}
                        value={enteredPreparation}
                        onChange={preparationChangeHandler}
                        onBlur={preparationBlurHandler}
                    />
                    {preparationInputHasError && errorText}
                </FloatingLabel>

                <button className={classes.btnForm} type="submit" disabled={!formIsValid}>Invia</button>

            </Form>
        </Container>
    )
}

export default FormAdmir;