import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


import useFetchComments from '../../util_hook/useFetchComments';

import SpinnerLoading from '../../ui/Spinner';
import ModalDeleteComment from './modalDeleteComment';
import ModalApprovalComment from './modalApprovalComment';

import classes from '../_admin.module.scss';

function CommentsPresent() {

    const [isDelete, setIsDelete] = useState(false);
    const [isApproval, setIsApproval] = useState(false);
    const [isSelect, setIsSelect] = useState(undefined);

    const { commetsApi, isLoading, error } = useFetchComments();


    const totalReview = commetsApi.map((e) => e)

    const unapprovedReviewsFilter = commetsApi.filter(obj => {
        return (obj.approved === false)
    })

    const unapprovedReviews = unapprovedReviewsFilter.length;

    const closeModal = () => {
        setIsDelete(false);
        setIsApproval(false);
    }

    let content = <p className={classes.successfetch}>Nessuna recensione presente!</p>;

    if (commetsApi.length > 0) {
        content = <>
            <Table striped bordered hover responsive className={classes.table}>
                <thead>
                    <tr>
                        <th>Nome Ricetta</th>
                        <th>User</th>
                        <th>Valutazione</th>
                        <th>Data recensione</th>
                        <th>Approvato</th>
                        <th colSpan={2}>Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {commetsApi.toReversed().map((e) => (
                        <tr key={e.id}>
                            <td>{e.recipeName}</td>
                            <td>{e.user}</td>
                            <td>{e.valutation}</td>
                            <td>{e.date}</td>
                            <td>{e.approved ? <Icon.CircleFill style={{ color: 'green' }} /> : <Icon.CircleFill style={{ color: 'red' }} />}</td>
                            <td><Icon.EyeFill className={classes.icon} onClick={() => { setIsSelect(e); setIsApproval(true); }} /></td>
                            <td><Icon.TrashFill className={classes.icon} onClick={() => { setIsSelect(e); setIsDelete(true); }} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <SpinnerLoading />;
    }

    return (
        <Container>
            {!isDelete && !isApproval && (
                <>
                    <h2>Totali recensioni: {totalReview.length}</h2>
                    <h2>Recensioni da approvare: {unapprovedReviews}</h2>
                    {content}
                </>
            )}
            {isDelete && <ModalDeleteComment closeModal={closeModal} select={isSelect} />}
            {isApproval && <ModalApprovalComment closeModal={closeModal} select={isSelect} />}
        </Container>
    )
}

export default CommentsPresent