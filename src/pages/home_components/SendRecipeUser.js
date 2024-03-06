import { Col, Container, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import dolci from '../../image/icon/dolci-2.jpg';

import classes from './_sendRecipeUser.module.scss';

export default function SendRecipeUser() {

    return (
        <Container fluid className={classes.sendRecipeUserContainer}>
            <Row className={classes.row}>
                <Col className={classes.colText} lg={8} sm>
                    <h2>Vuoi mettere la tua ricetta online?</h2>
                    <h5>Compila il seguente form e la tua ricetta sarà online</h5>
                    <h5>In alternativa puoi scriverci ed inviarci direttamente una email che trovi tra i contatti della pagina</h5>
                    <p>Inserisci il nome del piatto, una foto, tutti gli ingredienti, una breve descrizione del piatto e tutto il procedimento della preparazione ed il gioco è fatto!</p>
                    <p>Quando la ricetta sarà approvata, la troverai nella categoria competente!</p>
                    <Link to={'/invia la ricetta'}><button style={{ width: '100%' }}>Vai al Form</button></Link>
                </Col>

                <Col className={classes.colCard}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dolci} />
                        <Card.Body>
                            <Card.Title>La tua ricetta</Card.Title>
                            <Card.Text as={'ul'}>
                                Ingredienti:
                                <li>..........</li>
                                <li>..........</li>
                                <li>..........</li>
                            </Card.Text>
                            <button disabled>Vai alla Ricetta</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
