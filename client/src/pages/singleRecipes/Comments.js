import React from 'react';
import { Card, Col } from 'react-bootstrap';

import useFetchComments from '../../util_hook/useFetchComments';
import useStarsCreate from '../../util_hook/useStarsCreate';

import classes from './singleRecipe.module.scss';

function Comments(props) {

  const Star = (num) => {
    const { star } = useStarsCreate(num);
    return star;
  }

  const recipeName = props.recipeName.toString();

  const { commetsApi } = useFetchComments();

  const commentRecipeSelect = commetsApi.filter(obj => {
    return (obj.recipeName === recipeName)
  })

  const commentRecipeApproved = commentRecipeSelect.filter(obj => {
    return (obj.approved === true)
  })

  let content;

  if (commentRecipeApproved.length === 0) {
    content = <p>Nessuna recensione presente</p>
  } else {
    content = <>
      {commentRecipeApproved.map((el, index) => (
        <Col style={{ padding: '12px' }} key={index}>
          <Card className={classes.cardComment}>
            <Card.Header>{Star(el.valutation)}</Card.Header>
            <Card.Body>
              <Card.Title>{el.user}</Card.Title>
              <Card.Text>{el.review}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{el.date}</Card.Footer>
          </Card>
        </Col>
      ))}
    </>
  }

  return (
    <>
      {content}
    </>
  )
}

export default Comments