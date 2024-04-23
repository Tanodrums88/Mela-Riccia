import { Modal } from 'react-bootstrap';
import { useHref } from 'react-router-dom';
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

import classes from './_ui.module.scss';

function ShareModal(props) {

    const url = useHref();
    console.log(url);
    const currentPage = 'geloweb.altervista.org'; //window.location.href
    //console.log(currentPage);

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton style={{ flexDirection: 'column-reverse' }}>
                <Modal.Title><h3 style={{ textAlign: 'center' }}>Condividi la Ricetta <br /><strong>'{props.el}'</strong></h3></Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.modalShare}>
                <EmailShareButton url={currentPage}>
                    <EmailIcon round={true} />
                </EmailShareButton>
                <FacebookShareButton url={currentPage} hashtag='#MelaRiccia'>
                    <FacebookIcon round={true} />
                </FacebookShareButton>
                <FacebookMessengerShareButton url={currentPage} appId={currentPage}>
                    <FacebookMessengerIcon round={true} />
                </FacebookMessengerShareButton>
                <WhatsappShareButton url={currentPage}>
                    <WhatsappIcon round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton url={currentPage}>
                    <LinkedinIcon round={true} />
                </LinkedinShareButton>
                <TelegramShareButton url={currentPage}>
                    <TelegramIcon round={true} />
                </TelegramShareButton>
                <TwitterShareButton url={currentPage}>
                    <TwitterIcon round={true} />
                </TwitterShareButton>
            </Modal.Body>
            <Modal.Footer>
                <button className={classes.btnModal} onClick={props.onHide}>
                    Chiudi
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ShareModal