import React from 'react';
import { Card, Col } from 'react-bootstrap';
//import * as Icon from 'react-bootstrap-icons';

import useFetchComments from '../../util_hook/useFetchComments';
import useStarsCreate from '../../util_hook/useStarsCreate';

import classes from './singleRecipe.module.scss';

function Comments(props) {

  const { star } = useStarsCreate();

  const recipeName = props.recipeName.toString();

  const url = 'https://react-http-88-default-rtdb.europe-west1.firebasedatabase.app/comments.json'

  const { commetsApi } = useFetchComments(url);

  const commentRecipeSelect = commetsApi.filter(obj => {
    return (obj.name === recipeName)
  })

  const commentRecipeApproved = commentRecipeSelect.filter(obj => {
    return (obj.approved === true)
  })

  // const stars = (num) => {
  //   let star
  //   if (num === '1') {
  //     star = <>
  //       <Icon.StarFill className={classes.iconStar} />
  //       <Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} />
  //     </>
  //   } else if (num === '2') {
  //     star = <>
  //       <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
  //       <Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} />
  //     </>
  //   } else if (num === '3') {
  //     star = <>
  //       <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
  //       <Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} />
  //     </>
  //   } else if (num === '4') {
  //     star = <>
  //       <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
  //       <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStarNone} />
  //     </>
  //   } else if (num === '5') {
  //     star = <>
  //       <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
  //       <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
  //     </>
  //   } else {
  //     star = <>
  //       <Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} />
  //     </>
  //   }
  //   return star
  // }

  let content;

  if (commentRecipeApproved.length === 0) {
    content = <p>Nessuna recensione presente</p>
  } else {
    content = <>
      {commentRecipeApproved.map((el, index) => (
        <Col style={{ padding: '12px' }} key={index}>
          <Card className={classes.cardComment}>
            <Card.Header>{star(el.valutation)}</Card.Header>
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