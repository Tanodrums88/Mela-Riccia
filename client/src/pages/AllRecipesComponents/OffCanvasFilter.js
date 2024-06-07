import { useState, useEffect } from 'react';
import { Offcanvas, Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import classes from '../_AllRecipes.module.scss';
import CheckBoxsCategory from './CheckBoxsCategory';
import CheckBoxsSubCategory from './CheckBoxsSubCategory';

function FilteroffCanvas(props) {

    const [show, setShow] = useState(false);
    const [filterIsActive, setFilterIsActive] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [toCheckCategory, setToCheckCategory] = useState({
        Primi: false,
        Secondi: false,
        Contorni: false,
        Dolci: false
    });

    const [toCheckSubCategory, setToCheckSubCategory] = useState({
        Pasta: false,
        Risotti: false,
        Altri_Primi: false,
        Secondi_Di_Carne: false,
        Secondi_Di_Pesce: false,
        Secondi_Vegetariani: false,
        Dolci_Con_Cottura: false,
        Dolci_Senza_Cottura: false
    });

    const filterHandler = (event) => {
        setToCheckCategory({
            ...toCheckCategory,
            [event.target.value]: event.target.checked
        });
        setToCheckSubCategory({
            ...toCheckSubCategory,
            [event.target.value]: event.target.checked
        })
        setFilterIsActive(true);
    };

    const resetFilters = () => {
        setToCheckCategory({
            Primi: false,
            Secondi: false,
            Contorni: false,
            Dolci: false
        });
        setToCheckSubCategory({
            Pasta: false,
            Risotti: false,
            AltriPrimi: false,
            SecondiDiCarne: false,
            SecondiDiPesce: false,
            SecondiVegetariani: false,
            DolciConCottura: false,
            DolciSenzaCottura: false
        })
        setFilterIsActive(false);
    };

    useEffect(() => {
        props.theChekedCategory(toCheckCategory);
        props.theChekedSubCategory(toCheckSubCategory);
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
                        <CheckBoxsCategory
                            toCheckCategory={toCheckCategory}
                            control={filterHandler}
                        />
                    </Form.Group>
                    <h4>Sotto Categorie</h4>
                    <CheckBoxsSubCategory
                        toCheckCategory={toCheckSubCategory}
                        control={filterHandler}
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default FilteroffCanvas;