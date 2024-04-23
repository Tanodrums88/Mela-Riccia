import { Card, Placeholder, Spinner, Col, Row } from "react-bootstrap"

import classes from '../ui/_ui.module.scss';

export default function CardLoading() {
    return (
        <Row xs={1} sm={2} md={3} lg={3}>
            <Col>
                <Card className={classes.cardLoading}>
                    <Card.Title className={classes.cardTop}>
                        <Spinner animation="grow" className={classes.spinner} />
                    </Card.Title>
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button className={classes.btnCard} xs={6} size="lg" />
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className={classes.cardLoading}>
                    <Card.Title className={classes.cardTop}>
                        <Spinner animation="grow" className={classes.spinner} />
                    </Card.Title>
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button className={classes.btnCard} xs={6} size="lg" />
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className={classes.cardLoading}>
                    <Card.Title className={classes.cardTop}>
                        <Spinner animation="grow" className={classes.spinner} />
                    </Card.Title>
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button className={classes.btnCard} xs={6} size="lg" />
                    </Card.Body>
                </Card>
            </Col>
        </Row >
    )
}
