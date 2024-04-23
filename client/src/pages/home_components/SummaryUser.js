import { Container, Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

import SpinnerLoading from "../../ui/Spinner";

import classes from '../../admin/adminComponents/_summary.module.scss';

const SummaryUser = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const name = props.items.name;
    const email = props.items.email;
    const cooked = props.items.cooked;
    //const image = props.items.image;
    const category = props.items.category;
    const sub_category = props.items.sub_category;
    const ingredients = props.items.ingredients;
    const description = props.items.description;
    const preparation = props.items.preparation;

    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm('service_MelaRiccia', 'template_MelaRiccia', form.current, 'xA8tQBVDl2wr0Z5lz')
            .then(() => {
                setIsLoading(false);
                setIsSend(true);
            }, (error) => {
                setIsLoading(false);
                alert(error.text);
                navigate('/invia la ricetta')
            });
    };

    let content = (
        <>
            <h1>Riepilogo dati inseriti</h1>
            <form ref={form} onSubmit={sendEmail}>
                <Row className={classes.row}>
                    <Col>
                        <label>Email</label>
                        <input type="email" name="user_email" defaultValue={email} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} />
                    </Col>
                </Row>
                <Row className={classes.row}>
                    <Col>
                        <label>Nome Ricetta</label>
                        <input type="text" name="user_name_recipe" defaultValue={name} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} />
                    </Col>
                    <Col>
                        <label>Nome di chi l'ha preparato</label>
                        <input type="text" name="user_name" defaultValue={cooked} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} />
                    </Col>
                </Row>
                <Row className={classes.row}>
                    <Col>
                        <ul><label>Ingredienti</label></ul>
                        {ingredients.map((e, index) => (
                            <li key={index}> <input type="text" name="user_ingredients" defaultValue={e} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} /></li>
                        ))}

                    </Col>
                    <Col>
                        <Row><label>Categoria: <input type="text" name="user_category" defaultValue={category} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} /></label></Row>
                        <Row><label>Sotto Categoria: <input type="text" name="user_sub_category" defaultValue={sub_category} style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }} /></label></Row>
                    </Col>
                </Row>

                <Row className={classes.row}>
                    <Col>
                        <label>Descrizione del piatto</label>
                        <textarea name="user_description" defaultValue={description} style={{ height: '100px', width: '100%' }} />
                    </Col>
                </Row>
                <Row className={classes.row}>
                    <Col>
                        <label>Preparazione</label>
                        <textarea name="user_preparation" defaultValue={preparation} style={{ height: '100px', width: '100%' }} />
                    </Col>
                </Row>
                <div className={classes.buttonGroup}>
                    <button onClick={props.onBack}>Annulla</button>
                    <button type="submit">Conferma</button>
                </div>
            </form >
        </>
    )

    if (isLoading) {
        content = <SpinnerLoading />
    }

    if (isSend) {
        content = (
            <div className="text-center">
                <h1 className='mb-5'>Ricetta inviata con successo!</h1>
                <h2 className='mb-5'>
                    Grazie per averci inviato la tua ricetta!<br />Controlla la tua email e completa l'operazione allegando la foto del piatto
                </h2>
                <p>Una volta che avremmo tutti i dati necessari, la ricetta sarà elaborata e, se idonea, verrà messa online nell'apposita categoria di appartenenza.</p>
                <button onClick={() => { navigate('/'); }} className={classes.button}>Torna alla Home</button>
            </div>
        )
    }

    return (
        <Container className={classes.summary}>
            {content}
        </Container >
    )
};

export default SummaryUser;