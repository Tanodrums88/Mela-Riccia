import { Modal } from 'react-bootstrap';

import classes from './_ui.module.scss';

const ModalWrapper = ({ closeModal, confirm, name, id, obj }) => {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton onClick={closeModal}>
                <Modal.Title>Annulla o Conferma</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Sei sicuro di voler cancellare la {obj} <b>{name}</b>?</p>
                <p>id elemento n° {id}</p>
            </Modal.Body>

            <Modal.Footer>
                <button className={classes.btnModal} onClick={closeModal}>Annulla</button>
                <button className={classes.btnModal} onClick={confirm}>Conferma</button>
            </Modal.Footer>
        </Modal.Dialog>
    )
};

export default ModalWrapper;