import { Fragment, useState, useEffect, useMemo } from 'react';
import { Col, Container } from 'react-bootstrap';
import { auth } from '../auth/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import FormHandler from './adminComponents/FormHandler';
import CurrentRecipes from './adminComponents/CurrentRecipes';
import CommentsPresent from './adminComponents/CommentsPresent';
import useFetchComments from '../util_hook/useFetchComments';

import classes from './_admin.module.scss';

const Admin = () => {

    const [isShow, setIsShow] = useState(true);
    const [formIsShow, setFormIsShow] = useState(false);
    const [currentIsShow, setCurrentIsShow] = useState(false);
    const [commentsShow, setCommentsShow] = useState(false);

    const url = 'https://react-http-88-default-rtdb.europe-west1.firebasedatabase.app/comments.json'

    const { commetsApi } = useFetchComments(url);

    const unapprovedReviewsFilter = commetsApi.filter(obj => {
        return (obj.approved === false)
    })

    const unapprovedReviews = useMemo(() => unapprovedReviewsFilter.length, [unapprovedReviewsFilter]);

    const [badgeIsShow, setBadgeIsShow] = useState(false);

    useEffect(() => {
        if (unapprovedReviews === 0) {
            setBadgeIsShow(false)
        } else {
            setBadgeIsShow(true)
        }
    }, [unapprovedReviews])


    const navigateAdd = () => {
        setIsShow(false);
        setFormIsShow(true);
    };
    const navigateCurrent = () => {
        setIsShow(false);
        setCurrentIsShow(true);
    };

    const navigateComments = () => {
        setIsShow(false);
        setCommentsShow(true);
    };

    const backModule = () => {
        setIsShow(true);
        setFormIsShow(false);
        setCurrentIsShow(false);
        setCommentsShow(false);
    }

    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserAuth(user)
            } else {
                setUserAuth(null)
            }
        });
        return () => {
            listen()
        }
    }, []);

    return (
        <Fragment>
            <h1 className={classes.title}>Area Amministratore</h1>
            {!userAuth && <h2 className={classes.errorText}>Non hai i permessi per accedere!</h2>}
            {userAuth && (
                <>
                    {isShow &&
                        <Container>
                            <h2 className={classes.title}>Benvenuto {userAuth.email}</h2>
                            <div className={classes.admirPage}>
                                <Col className={classes.admirCol}>
                                    <h4>Vedi tutte le Ricette</h4>
                                    <button className={classes.btnForm} onClick={navigateCurrent}>Naviga</button>
                                </Col>
                                <Col className={classes.admirCol}>
                                    <h4>Aggiungi una nuova Ricetta</h4>
                                    <button className={classes.btnForm} onClick={navigateAdd}>Naviga</button>
                                </Col>
                                <Col className={classes.admirCol}>
                                    <h4>Gestisci le recensioni</h4>
                                    {badgeIsShow && <div className={classes.badgeReview}>{unapprovedReviews}</div>}
                                    <button className={classes.btnForm} onClick={navigateComments}>Naviga</button>
                                </Col>
                            </div>
                        </Container>
                    }
                    {formIsShow && <FormHandler />}
                    {currentIsShow && <CurrentRecipes />}
                    {commentsShow && <CommentsPresent />}
                    {!isShow &&
                        <div className={classes.title}>
                            <button className={classes.btnForm} onClick={backModule}>Chiudi scheda</button>
                        </div>
                    }
                </>
            )}
        </Fragment>
    )
};

export default Admin;