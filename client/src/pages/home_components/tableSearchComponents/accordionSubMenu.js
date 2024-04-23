import { Container, Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import pasta from '../../../image/icon/pasta-photo.jpg';
import riso from '../../../image/icon/riso-photo.jpg';
import altri from '../../../image/icon/altro-photo.jpg';
import carne from '../../../image/icon/carne-photo.jpg';
import pesce from '../../../image/icon/pesce-photo.jpg';
import veget from '../../../image/icon/veget-photo.jpg';
import dolci1 from '../../../image/icon/dolci-1.jpg';
import dolci2 from '../../../image/icon/dolci-2.jpg';

import classes from '../_tableSearch.module.scss'

function AccordionSubMenu() {

    const navigate = useNavigate();

    function navigateFristDishesPasta() {
        navigate('/Primi/Pasta')
    };
    function navigateFristDishesRisotti() {
        navigate(`/Primi/Risotti`)
    };

    function navigateFristDishesAltro() {
        navigate(`/Primi/Altri Primi`)
    };

    function navigateSecondDishesCarne() {
        navigate(`/Secondi/Secondi di Carne`)
    };
    function navigateSecondDishesPesce() {
        navigate(`/Secondi/Secondi di Pesce`)
    };
    function navigateSecondDishesVeg() {
        navigate(`/Secondi/Secondi Vegetariani`)
    };

    function navigateSweetsCotti() {
        navigate(`/Dolci/Dolci con Cottura`)
    };
    function navigateSweetsNoCotti() {
        navigate('/Dolci/Dolci senza Cottura')
    };

    return (
        <Container>
            <Accordion defaultActiveKey="null" className={classes.accordion}>
                <Accordion.Item eventKey="0" className={classes.accordionItem}>
                    <Accordion.Header className={classes.accordionHead}>Primi Piatti</Accordion.Header>
                    <Accordion.Body>
                        <ul className={classes.accordionList}>
                            <li onClick={navigateFristDishesPasta}><p>Pasta</p><img src={pasta} alt='pasta' /></li>
                            <li onClick={navigateFristDishesRisotti}><p>Risotti</p> <img src={riso} alt='risotti' /></li>
                            <li onClick={navigateFristDishesAltro}><p>Altri Primi</p> <img src={altri} alt='primi' /></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={classes.accordionItem}>
                    <Accordion.Header className={classes.accordionHead}>Secondi Piatti</Accordion.Header>
                    <Accordion.Body>
                        <ul className={classes.accordionList}>
                            <li onClick={navigateSecondDishesCarne}><p>Secondi di Carne</p> <img src={carne} alt='secondi' /></li>
                            <li onClick={navigateSecondDishesPesce}><p>Secondi di Pesce</p> <img src={pesce} alt='secondi' /></li>
                            <li onClick={navigateSecondDishesVeg}><p>Secondi Vegetariani</p> <img src={veget} alt='secondi' /></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={classes.accordionItem}>
                    <Accordion.Header className={classes.accordionHead}>Dolci e Dessert</Accordion.Header>
                    <Accordion.Body>
                        <ul className={classes.accordionList}>
                            <li onClick={navigateSweetsCotti}><p>Dolci a Cottura</p> <img src={dolci1} alt='dolci' /></li>
                            <li onClick={navigateSweetsNoCotti}><p>Dolci Senza Cottura</p> <img src={dolci2} alt='dolci' /></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default AccordionSubMenu;