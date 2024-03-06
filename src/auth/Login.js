import { Form, Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import SpinnerLoading from "../ui/Spinner";

import classes from '../admin/_admin.module.scss';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [IsError, setIsError] = useState(null);

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        setIsError(null);
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setIsLoading(false);
                navigate('/Admin');
            }).catch((error) => {
                setIsLoading(false);
                setIsError(error);
            })
    }

    return (
        <Container style={{ width: '50vw' }}>
            <h1 className="text-center">Area riservata all'amministartore</h1>
            <Form onSubmit={signIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Inserisci la password"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <button className={classes.buttonConfirm} type="submit">
                    Accedi
                </button>
            </Form>
            {isLoading && <SpinnerLoading />}
            {IsError && <h2 className={classes.errorText}>Non hai i permessi per accedere!</h2>}
        </Container>
    )
}

export default Login