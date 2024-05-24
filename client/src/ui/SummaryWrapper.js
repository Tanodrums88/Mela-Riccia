import { forwardRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import classes from '../admin/adminComponents/_summary.module.scss';

const SummaryWrapper = forwardRef(function MyInput(props, ref) {
    const { user, data, back, confirm } = props;

    return (
        <>
            {user &&
                <>
                    <h1>Riepilogo dati inseriti</h1>
                    <form ref={ref} onSubmit={confirm}>
                        <Row className={classes.row}>
                            <Col>
                                <label>Email</label>
                                <input type="email" name="user_email" defaultValue={data.email} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} />
                            </Col>
                        </Row>
                        <Row className={classes.row}>
                            <Col>
                                <label>Nome Ricetta</label>
                                <input type="text" name="user_name_recipe" defaultValue={data.name} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} />
                            </Col>
                            <Col>
                                <label>Nome di chi l'ha preparato</label>
                                <input type="text" name="user_name" defaultValue={data.cooked} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} />
                            </Col>
                        </Row>
                        <Row className={classes.row}>
                            <Col>
                                <ul><label>Ingredienti</label></ul>
                                {data.ingredients.map((e, index) => (
                                    <li key={index}> <input type="text" name="user_ingredients" defaultValue={e} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} /></li>
                                ))}

                            </Col>
                            <Col>
                                <Row><label>Categoria: <input type="text" name="user_category" defaultValue={data.category} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} /></label></Row>
                                <Row><label>Sotto Categoria: <input type="text" name="user_sub_category" defaultValue={data.sub_category} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} /></label></Row>
                            </Col>
                        </Row>

                        <Row className={classes.row}>
                            <Col>
                                <label>Descrizione del piatto</label>
                                <textarea name="user_description" defaultValue={data.description} style={{ height: '100px', width: '100%' }} />
                            </Col>
                        </Row>
                        <Row className={classes.row}>
                            <Col>
                                <label>Preparazione</label>
                                <textarea name="user_preparation" defaultValue={data.preparation} style={{ height: '100px', width: '100%' }} />
                            </Col>
                        </Row>
                        <div className={classes.buttonGroup}>
                            <button onClick={back}>Annulla</button>
                            <button type="submit">Conferma</button>
                        </div>
                    </form >
                </>
            }
            {!user &&
                <>
                    <h1>Riepilogo dati inseriti</h1>
                    <Row className={classes.row}>
                        <Col><h3>Nome Ricetta: {data.name}</h3></Col>
                        <Col><h3>Chi la preparato: {data.cooked}</h3></Col>
                    </Row>
                    <Row className={classes.row}>
                        <Col><img src={data.image} alt={data.name} /></Col>
                        <Col>
                            <ul>Ingredienti:
                                {data.ingredients.map((e, index) => (
                                    <li key={index}>{e}</li>
                                ))}
                            </ul>
                        </Col>
                        <Col>
                            <Row><p>Categoria: {data.category}</p></Row>
                            <Row><p>Sotto Categoria: {data.sub_category}</p></Row>
                        </Col>
                    </Row>

                    <Row className={classes.row}>
                        <Col><p>Descrizione: {data.description}</p></Col>
                    </Row>
                    <Row className={classes.row}>
                        <Col><p>Preparazione: {data.preparation}</p></Col>
                    </Row>
                    <div className={classes.buttonGroup}>
                        <button onClick={back}>Annulla</button>
                        <button onClick={confirm}>Conferma</button>
                    </div>
                </>
            }
        </>
    )
});

export default SummaryWrapper;