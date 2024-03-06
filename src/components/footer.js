import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import Wrapper from '../ui/wrapper';

import classes from './_footer.module.scss';

function Footer() {

    return (
        <Fragment>
            <Wrapper />
            <footer id={classes.footer}>
                <Row>
                    <Col sm={6} xs={12}>
                        <ul>
                            <p>Contatti</p>
                            <li>
                                <Link to={'mailto:gaetano.gelo@live.com'} target='_blank'><Icon.EnvelopeFill className={classes.icon} />melariccia@hotmail.com</Link>
                            </li>
                            <li>
                                <Link to={"https://www.linkedin.com/in/gaetano-gelo-1995a2207/"} target='_blank'><Icon.Telegram className={classes.icon} />Telegram</Link>
                            </li>
                            <li>
                                <Link to={'https://wa.me/393293274681'} target='_blank'><Icon.Whatsapp className={classes.icon} />WhatsApp</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} xs={12}>
                        <ul>
                            <p>Social network</p>
                            <li>
                                <Link to={'https://www.facebook.com/gaetano.gelo.1'} target='blank'><Icon.Facebook className={classes.icon} />Facebook</Link>
                            </li>
                            <li>
                                <Link to={'https://www.linkedin.com/in/gaetano-gelo-1995a2207'} target='blank'><Icon.Linkedin className={classes.icon} />Linkedin</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className={classes.footer_footer}>
                    <p>Made by
                        <Link to={'https://www.geloweb.altervista.org'} target='blank'> Gelo-Web </Link>© 2014 Copyright Text
                    </p>
                </div>
            </footer>
        </Fragment>
    )

};

export default Footer;