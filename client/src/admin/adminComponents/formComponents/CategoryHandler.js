import { Form, Col } from "react-bootstrap";
import { useState, useRef } from "react";

const CategorySection = (props) => {

    const [selectionCategory, setSelectionCategory] = useState('');
    const [selectionSubCategory, setSelectionSubCategory] = useState('');
    const categoryRef = useRef();
    const subCategoryRef = useRef();


    function selectionCategoryHandler(event) {
        const enteredCategoryRef = categoryRef.current.value;
        setSelectionCategory(event.target.value);
        props.categorySelection(enteredCategoryRef)
    }
    function selectionSubCategoryHandler(event) {
        const enteredSubCategoryRef = subCategoryRef.current.value;
        setSelectionSubCategory(event.target.value)
        props.subCategorySelection(enteredSubCategoryRef)
    }

    let option = <option>nessuna categoria selezionata</option>

    if (selectionCategory === 'Primi') {
        option =
            <>
                <option>Seleziona la sotto categoria</option>
                <option value='Pasta'>Pasta</option>
                <option value='Risotti'>Risotti</option>
                <option value='Altri Primi'>Altri Primi</option>
            </>
    }
    if (selectionCategory === 'Secondi') {
        option =
            <>
                <option>Seleziona la sotto categoria</option>
                <option value='Secondi di Carne'>Secondi di Carne</option>
                <option value='Secondi di Pesce'>Secondi di Pesce</option>
                <option value='Secondi Vegetariani'>Secondi Vegetariani</option>
            </>
    }
    if (selectionCategory === 'Dolci') {
        option =
            <>
                <option>Seleziona la sotto categoria</option>
                <option value='Dolci con Cottura'>Dolci a Cottura</option>
                <option value='Dolci senza Cottura'>Dolci Senza Cottura</option>
            </>
    }
    if (selectionCategory === 'Contorni') {
        option =
            <>
                <option>Seleziona la sotto categoria</option>
                <option value='Contorni e Antipasti'>Contorni e Antipasti</option>
            </>
    }

    return (
        <>
            <Form.Group as={Col} controlId="formGridStateCategory">
                <Form.Label>Categoria</Form.Label>
                <Form.Select value={selectionCategory} onChange={selectionCategoryHandler} ref={categoryRef}>
                    <option>Seleziona una Categoria</option>
                    <option value='Primi'>Primi Piatti</option>
                    <option value='Secondi'>Secondi Piatti</option>
                    <option value='Contorni'>Antipasti e Contorni</option>
                    <option value='Dolci'>Dolci e Dessert</option>
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStateSubCategory">
                <Form.Label>Sotto Categoria</Form.Label>
                <Form.Select value={selectionSubCategory} onChange={selectionSubCategoryHandler} ref={subCategoryRef}>
                    {option}
                </Form.Select>
            </Form.Group>
        </>
    )
}

export default CategorySection;