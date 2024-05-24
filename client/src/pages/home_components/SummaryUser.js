import { Container } from "react-bootstrap";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

import SpinnerLoading from "../../ui/Spinner";
import SummaryWrapper from "../../ui/SummaryWrapper";

import classes from '../../admin/adminComponents/_summary.module.scss';

const SummaryUser = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const item = {
        name: props.items.name,
        email: props.items.email,
        cooked: props.items.cooked,
        category: props.items.category,
        sub_category: props.items.sub_category,
        ingredients: props.items.ingredients,
        description: props.items.description,
        preparation: props.items.preparation
    }

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

    let content = <SummaryWrapper
        user={true}
        confirm={sendEmail}
        data={item}
        back={props.onBack}
    />

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