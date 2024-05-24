import { Container, Row, Table, Col } from 'react-bootstrap';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

import useFetchRecipes from '../../util_hook/useFetchRecipes';
import SpinnerLoading from '../../ui/Spinner';

import DeleteRecipe from './DeleteRecipe';
import ModalEdit from './modalEdit';
import Graphic from './graphicComponents/Graphic';
import GraphicSub from './graphicComponents/GraphicSub';

import classes from '../_admin.module.scss';

function CurrentRecipes() {

    const [isDelete, setIsDelete] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isSelect, setIsSelect] = useState(undefined);

    const { recipesApi, error, isLoading } = useFetchRecipes();

    const closeModal = () => {
        setIsDelete(false);
        setIsEdit(false);
    }

    let content = <p className={classes.successfetch}>Nessuna ricetta presente!</p>;

    if (recipesApi.length > 0) {
        content =
            <>
                <Table striped bordered hover responsive className={classes.table}>
                    <thead>
                        <tr>
                            <th>Nome Ricetta</th>
                            <th>Categoria & Sotto categoria ricetta</th>
                            <th>Cuoco</th>
                            <th>N° Ingredienti</th>
                            <th colSpan={2}>Azioni</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipesApi.map((e) => (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.category} / {e.sub_category}</td>
                                <td>{e.cooked}</td>
                                <td>{e.ingredients.length}</td>
                                <td><Icon.PencilFill className={classes.icon} onClick={() => { setIsSelect(e); setIsEdit(true); }} /></td>
                                <td><Icon.TrashFill className={classes.icon} onClick={() => { setIsSelect(e); setIsDelete(true); }} /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Row style={{ justifyContent: "center" }}>
                    <Col lg xl={3}><Graphic /></Col>
                    <Col lg xl={7}><GraphicSub /></Col>
                </Row>
            </>;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <SpinnerLoading />;
    }

    const total = recipesApi.length;

    return (
        <Container>
            {!isDelete && !isEdit && (
                <>
                    <h2 className={classes.title}>Ricette presenti: {total}</h2>
                    {content}
                </>
            )}
            {isDelete && <DeleteRecipe closeModal={closeModal} select={isSelect} />}
            {isEdit && <ModalEdit closeModal={closeModal} select={isSelect} />}
        </Container>
    );
}

export default CurrentRecipes;