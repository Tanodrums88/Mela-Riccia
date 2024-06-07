import Accordion from 'react-bootstrap/Accordion';

function IngredientsAccordion({ items }) {

    return (
        <Accordion style={{ marginBottom: '15px' }}>
            <Accordion.Item eventKey="0">
                <Accordion.Header><b>Ingredienti:</b></Accordion.Header>
                <Accordion.Body>
                    <ul>
                        {items}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default IngredientsAccordion;