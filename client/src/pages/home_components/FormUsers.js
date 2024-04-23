import { Fragment, useRef, useState } from 'react';
import {
    Container,
    Form,
    Row,
    Col,
    FloatingLabel,
    FormGroup
} from 'react-bootstrap';

import useInput from '../../util_hook/useInput';

import CategorySection from '../../admin/adminComponents/formComponents/CategoryHandler';
import IngredientsHandler from '../../admin/adminComponents/formComponents/addIngredientComponents/InputIngredientHandler';
import Summary from './SummaryUser';

import classes from '../../admin/_admin.module.scss';

export default function FormUsers() {

    const [categorySelectedRef, setCategorySelctedRef] = useState();
    const [subCategorySelectedRef, setSubCategorySelctedRef] = useState();
    const [ingredientSelector, setIngredientSelector] = useState([]);
    const [summaryRecipe, setSummaryRecipe] = useState();
    const [summary, setSummary] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
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

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
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

    if (enteredNameIsValid && enteredCookedIsValid && enteredDescriptionIsValid && enteredPreparationIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputClasses = nameInputHasError ? `${classes.invalid}` : '';
    const emailInputClasses = emailInputHasError ? `${classes.invalid}` : '';
    const cookedInputClasses = cookedInputHasError ? `${classes.invalid}` : '';
    const descriptionInputClasses = descriptionInputHasError ? `${classes.invalid}` : '';
    const preparationInputClasses = preparationInputHasError ? `${classes.invalid}` : '';

    const formHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        const enteredNameRef = nameRef.current.value;
        const enteredEmailRef = emailRef.current.value;
        const enteredCookedRef = cookedRef.current.value;
        const entereDescriptionRef = descriptionRef.current.value;
        const enterePreparationRef = preparationRef.current.value;

        const newRecipe = {
            email: enteredEmailRef,
            name: enteredNameRef,
            cooked: enteredCookedRef,
            //image: imgData,
            category: categorySelectedRef,
            sub_category: subCategorySelectedRef,
            ingredients: ingredientSelector,
            description: entereDescriptionRef,
            preparation: enterePreparationRef
        }
        setSummaryRecipe(newRecipe)
        setSummary(true);
        console.log(newRecipe);
    };

    const onBack = () => {
        setSummary(false);
        setSummaryRecipe('')
    };

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

    return (
        <Fragment>
            {!summary &&
                <>
                    <h2 className='text-center mb-5'>Compila tutti i campi e inviaci la tua ricetta</h2>
                    <Container>
                        <Form onSubmit={formHandler}>
                            <Row className="mb-3">
                                <FormGroup as={Col} controlId='fromGridEmail'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        className={emailInputClasses}
                                        type='email'
                                        placeholder='inserisci un indirizzo email'
                                        ref={emailRef}
                                        value={enteredEmail}
                                        onChange={emailChangeHandler}
                                        onBlur={emailBlurHandler}
                                    />
                                    {emailInputHasError && errorText}
                                </FormGroup>
                            </Row>

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
                                    <Form.Label>Nome e provenienza di chi l'ha preparato</Form.Label>
                                    <Form.Control
                                        className={cookedInputClasses}
                                        placeholder="es. Paolo da Milano"
                                        ref={cookedRef}
                                        value={enteredCooked}
                                        onChange={cookedChangeHandler}
                                        onBlur={cookedBlurHandler}
                                    />
                                    {cookedInputHasError && errorText}
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
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
                </>
            }
            {summary &&
                <Summary items={summaryRecipe} onBack={onBack} />
            }
        </Fragment>
    );
}
