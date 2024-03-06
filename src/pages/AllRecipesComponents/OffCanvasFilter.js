import { useState, useEffect } from 'react';
import { Offcanvas, Form } from 'react-bootstrap';

import * as Icon from 'react-bootstrap-icons';

import classes from '../_AllRecipes.module.scss';

function FilteroffCanvas(props) {

    const [show, setShow] = useState(false);
    const [filterIsActive, setFilterIsActive] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const category = [
        "Primi",
        "Secondi",
        "Contorni",
        "Dolci"
    ];

    const sub_category = [
        "Pasta", "Risotti", "Altri Primi",
        "Secondi di Carne", "Secondi di Pesce", "Secondi Vegetariani",
        "Dolci con Cottura", "Dolci senza Cottura"
    ];

    const [toCheckCategory, setToCheckCategory] = useState({});
    const [toCheckSub_Category, setToCheckSub_Category] = useState({});

    const changeFilterCategory = (value) => {
        setFilterIsActive(true);
        setToCheckCategory((prev) => {
            return { ...prev, [value]: !!!prev[value] };
        });
    }

    const changeFilterSub_Category = (value) => {
        setFilterIsActive(true);
        setToCheckSub_Category((prev) => {
            return { ...prev, [value]: !!!prev[value] };
        });
    }

    useEffect(() => {
        props.theChekedCategory(toCheckCategory);
        props.theChekedSub_Category(toCheckSub_Category);
        props.onFilter(filterIsActive);
    })

    // console.log(`categorie = ${toCheckCategory} / sottoCategorie = ${toCheckSub_Category}`);
    return (
        <>
            <button className={classes.filterButton} onClick={handleShow}>
                <Icon.FilterCircle />
            </button>
            {filterIsActive && (
                <button className={classes.filterButton} onClick={() => setFilterIsActive(false)}>
                    <Icon.XCircle />
                </button>
            )}
            <Offcanvas show={show} onHide={handleClose} className={classes.offCanvas}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filtra le ricette per categoria o sotto categoria</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h4>Categorie</h4>
                    <Form.Group className={classes.checkBoxes}>
                        {category.map((e, index) => (
                            <Form.Check
                                key={index}
                                className={classes.formCheck}
                                type="switch"
                                id={e}
                                label={e}
                                value={e}
                                onChange={(e) => changeFilterCategory(e.target.value)}
                            />
                        ))}
                    </Form.Group>
                    <h4>Sotto Categorie</h4>
                    <Form.Group className={classes.checkBoxes}>
                        {sub_category.map((e, index) => (
                            <Form.Check
                                key={index}
                                className={classes.formCheck}
                                type="switch"
                                id={e}
                                label={e}
                                value={e}
                                onChange={(e) => changeFilterSub_Category(e.target.value)}
                            />
                        ))}
                    </Form.Group>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default FilteroffCanvas;