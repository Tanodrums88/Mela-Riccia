import { Container, Col } from 'react-bootstrap';

import classes from '../_admin.module.scss';

const AdminHome = ({ userEmail, navigateCurrent, navigateAdd, navigateComments, badgeIsShow, unapprovedReviews }) => {
    return (
        <Container>
            <h2 className={classes.title}>Benvenuto {userEmail}</h2>
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
    )
};

export default AdminHome;
