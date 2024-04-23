import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import immage from '../../image/logo_small_icon_only.svg';

import classes from './_presentation.module.scss';

function Presentation() {
    return (
        <Container fluid id={classes.presentation}>
            <Row style={{ justifyContent: "space-around" }}>
                <Col className={classes.col2} lg={4}>
                    <img src={immage} alt='cook' />
                </Col>
                <Col className={classes.col1} lg={6}>
                    <h3>Scopri il sapore unico delle nostre ricette fatte in casa, condivise con amore dagli appassionati di cucina come te. Unisciti alla nostra comunità e trasforma ogni piatto in un capolavoro culinario, con le creazioni autentiche inviate direttamente dagli chef casalinghi di tutto il mondo! </h3>
                    <h5 style={{ lineHeight: "35px" }}>Assapora il genio culinario della nostra community! Ogni ricetta è un capolavoro, un frammento di passione e creatività che i nostri utenti portano direttamente sulla tua tavola.<br />Entra nel mondo del gusto autentico, dove le cucine di casa diventano la scena di veri chef creativi!</h5>
                </Col>
            </Row>
        </Container>
    );
}

export default Presentation;