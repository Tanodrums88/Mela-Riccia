import { Form, Container } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/user.context";

import SpinnerLoading from "../ui/Spinner";

import classes from '../admin/_admin.module.scss';

function Login() {

    const navigate = useNavigate();
    const location = useLocation();

    const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [IsError, setIsError] = useState(null);

    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : '/Admin');
    };

    const loadUser = async () => {
        if (!user) {
            const fetchedUser = await fetchUser();
            if (fetchedUser) {
                redirectNow();
            }
        }
    };

    useEffect(() => {
        loadUser();
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            setIsLoading(false);
            const user = await emailPasswordLogin(email, password);
            if (user) {
                redirectNow();
            }

        } catch (error) {
            setIsLoading(false);
            if (error.statusCode === 401) {
                setIsError(error);
            } else {
                setIsError(error);
            }
        }
    }

    return (
        <Container style={{ width: '50vw' }}>
            <h1 className="text-center">Area riservata all'amministartore</h1>
            <Form onSubmit={onSubmit}>
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