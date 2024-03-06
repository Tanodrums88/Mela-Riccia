import { Modal } from "react-bootstrap";

import classes from './_ui.module.scss';

export default function ModalImageCurrent(props) {

    const urlImage = props.image;
    const urlName = props.name;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body className={classes.boxModalImage}>
                <h4>{urlName}</h4>
                <img src={urlImage} alt={urlName} />
            </Modal.Body>
            <Modal.Footer>
                <button className={classes.btnModal} onClick={props.onHide}>Chiudi</button>
            </Modal.Footer>
        </Modal>
    )
}
