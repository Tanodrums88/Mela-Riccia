import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import CategorySection from "./formComponents/CategoryHandler";
import IngredientsHandler from "./formComponents/addIngredientComponents/InputIngredientHandler";

import ModalImageCurrent from "../../ui/modalImageCurrent";
import SpinnerLoading from "../../ui/Spinner";
import ErrorPage from "../../ui/ErrorPage";

import classes from '../_admin.module.scss';


export default function ModalEdit(props) {

    const itemId = props.select.id;
    const itemName = props.select.name;
    const itemCooked = props.select.cooked;
    const itemImage = props.select.image;
    const itemCategory = props.select.category;
    const itemSubCategory = props.select.sub_category;
    const itemIngredients = props.select.ingredients;
    const itemDescrition = props.select.description;
    const itemPreparation = props.select.preparation;

    const [name, setName] = useState(itemName);
    const [cooked, setCooked] = useState(itemCooked);
    const [category, setCategory] = useState(itemCategory);
    const [subCategory, setSubCategory] = useState(itemSubCategory);
    const [image, setImage] = useState(itemImage);
    const [ingredients, setIngredients] = useState(itemIngredients)
    const [description, setDescription] = useState(itemDescrition);
    const [preparation, setPreparation] = useState(itemPreparation);

    const [modalShow, setModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isError, setIsError] = useState(null);

    const changeInputName = (e) => {
        const inputChange = e.target.value;
        setName(inputChange)
    };

    const changeInputCooked = (e) => {
        const inputChange = e.target.value;
        setCooked(inputChange)
    };

    const onChangePicture = e => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImage(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const categorySelected = (category) => {
        setCategory(category)
    }
    const subCategorySelected = (subCategory) => {
        setSubCategory(subCategory)
    }

    const ingredientsSelector = (el) => {
        let ingredientsFinal = []
        const enteredEl = el
        ingredientsFinal = [...enteredEl]
        setIngredients(ingredientsFinal)
    }

    const changeInputDescription = (e) => {
        const inputChange = e.target.value;
        setDescription(inputChange)
    }

    const changeInputPreparation = (e) => {
        const inputChange = e.target.value;
        setPreparation(inputChange)
    }

    let list

    if (ingredients.length === 0) {
        list = <p>Nessun ingrediente presente</p>
    }

    if (ingredients.length > 0) {
        list = <>
            {
                ingredients.map((e, index) => (
                    <li key={index}>{e}</li>
                ))
            }
        </>
    }

    const editRecipe = {
        name: name,
        cooked: cooked,
        image: image,
        category: category,
        sub_category: subCategory,
        ingredients: ingredients,
        description: description,
        preparation: preparation
    }

    const url = `http://localhost:5000/recipes/${itemId}`

    const formHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(null);
        try {
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(editRecipe),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error('An error occurred while updating the recipe');
            }
            setIsEdit(true);
            return response.json();
        } catch (error) {
            setIsError(error.message)
        }
        setIsLoading(false);
    }

    let content

    if (!isEdit) {
        content =
            <>
                <h2 className={classes.title}>Modalità modifica</h2>
                <Form onSubmit={formHandler}>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>
                                    Nome
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    defaultValue={itemName}
                                    onChange={changeInputName}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>
                                    Cuoco
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    defaultValue={itemCooked}
                                    onChange={changeInputCooked}
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>

                        <Col>
                            <Form.Group controlId="formImage" className="mb-3" as={Col}>
                                <Form.Label>Sostituisci la Foto del Piatto</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={onChangePicture}
                                />
                                <p className="mt-2">Foto del Piatto <img className={classes.images} src={image} alt={name} onClick={() => setModalShow(true)} /></p>
                                <ModalImageCurrent
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    image={image}
                                    name={name}
                                />
                            </Form.Group>
                        </Col>

                        <Col>
                            <InputGroup className="mb-3">
                                <Row className="w-100">
                                    <Col><p>Categoria attuale: <strong>{category}</strong></p></Col>
                                    <Col><p>Sotto Categoria attuale: <strong>{subCategory}</strong></p></Col>
                                </Row>
                                <Row className="w-100">
                                    <CategorySection categorySelection={categorySelected} subCategorySelection={subCategorySelected} />
                                </Row>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <IngredientsHandler ingredientsList={ingredientsSelector} />
                        </Col>

                        <Col>
                            <Form.Group controlId="ingredientsList" className="mb-3">
                                <Form.Label>
                                    <Container>
                                        <p><b>Ingredienti</b></p>
                                        <ul className={classes.list}>
                                            {list}
                                        </ul>
                                    </Container>
                                </Form.Label>
                            </Form.Group>
                        </Col>

                    </Row>

                    <Row className="mb-3">
                        <Form.Label>Descrizione</Form.Label>
                        <Form.Control
                            style={{ height: '100px' }}
                            as="textarea"
                            defaultValue={itemDescrition}
                            onChange={changeInputDescription}
                        />
                    </Row>

                    <Row className="mb-3">
                        <Form.Label>Preparazione</Form.Label>
                        <Form.Control
                            style={{ height: '100px' }}
                            as="textarea"
                            defaultValue={itemPreparation}
                            onChange={changeInputPreparation}
                        />
                    </Row>

                    <div className="mt-5"></div>
                    <div className={classes.buttonGroup}>
                        <button onClick={props.closeModal}>Annulla</button>
                        <button type="submit">Conferma</button>
                    </div>

                </Form>
            </>
    }

    if (isLoading) {
        content = <SpinnerLoading />
    }
    if (isEdit) {
        content = <h1 className={classes.successfetch}>Ricetta modificata con successo!</h1>
    }
    if (isError) {
        content = <ErrorPage message="C'è stato un problema durante la modifica della ricetta." />
    }

    return (
        <Container>
            {content}
        </Container >
    )
}

