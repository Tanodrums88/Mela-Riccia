import { useState, useEffect } from 'react';
import { Offcanvas, Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import classes from '../_AllRecipes.module.scss';
import CheckBox from './CheckBox';

function FilteroffCanvas(props) {

    const [show, setShow] = useState(false);
    const [filterIsActive, setFilterIsActive] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const sub_category = [
    //     "Pasta", "Risotti", "Altri Primi",
    //     "Secondi di Carne", "Secondi di Pesce", "Secondi Vegetariani",
    //     "Dolci con Cottura", "Dolci senza Cottura"
    // ];

    const [toCheckCategory, setToCheckCategory] = useState({
        Primi: false,
        Secondi: false,
        Contorni: false,
        Dolci: false
    });

    const filterHandler = (event) => {
        setToCheckCategory({
            ...toCheckCategory,
            [event.target.value]: event.target.checked
        });
        setFilterIsActive(true);
    };

    const resetFilters = () => {
        setToCheckCategory({
            Primi: false,
            Secondi: false,
            Contorni: false,
            Dolci: false
        });
        setFilterIsActive(false);
    };

    useEffect(() => {
        props.theChekedCategory(toCheckCategory);
    });

    return (
        <>
            <button className={classes.filterButton} onClick={handleShow}>
                <Icon.FilterCircle />
            </button>
            {filterIsActive && (
                <button className={classes.filterButton} onClick={resetFilters}>
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
                        <CheckBox
                            toCheckCategory={toCheckCategory}
                            control={filterHandler}
                        />
                    </Form.Group>
                    {/* <h4>Sotto Categorie</h4>
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
                    </Form.Group> */}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default FilteroffCanvas;