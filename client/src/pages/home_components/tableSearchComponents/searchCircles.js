import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import AccordionSubMenu from './accordionSubMenu';

import classes from '../_tableSearch.module.scss';

export default function SearchSection() {

    const navigate = useNavigate();

    function navigateFristDishes() {
        navigate(`/Primi`)
    };

    function navigateSecondDishes() {
        navigate(`/Secondi`)
    };

    function navigateSweets() {
        navigate(`/Dolci`)
    };

    function navigateSideDishes() {
        navigate(`/Contorni`)
    };

    return (
        <Fragment>
            <div id={classes.homeButtons}>
                <button onClick={navigateFristDishes} className={`${classes.sectionPrimi} ${classes.section}`}>
                    <p>Primi Piatti</p>
                </button>
                <button onClick={navigateSecondDishes} className={`${classes.sectionSecondi} ${classes.section}`}>
                    <p>Secondi Piatti</p>
                </button>
                <button onClick={navigateSweets} className={`${classes.sectionDolci} ${classes.section}`}>
                    <p>Dolci e Dessert</p>
                </button>
                <button onClick={navigateSideDishes} className={`${classes.sectionContorni} ${classes.section}`}>
                    <p>Antipasti e Contorni</p>
                </button>
            </div>
            <AccordionSubMenu />
        </Fragment>
    )
}