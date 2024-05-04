import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import useFetchComments from '../../util_hook/useFetchComments';

import classes from '../_AllRecipes.module.scss';

function BadgeReviews(props) {

    const recipeName = props.name;

    const { commetsApi } = useFetchComments();

    const commentRecipeSelect = commetsApi.filter(obj => {
        return (obj.recipeName === recipeName)
    })

    const commentRecipeApproved = commentRecipeSelect.filter(obj => {
        return (obj.approved === true)
    })

    const valutationMap = commentRecipeApproved.map((e) => (
        e.valutation
    ))

    var arr = JSON.parse('[' + valutationMap + ']');

    function sum() {
        var z = 0;
        var i;
        for (i in arguments) {
            z = z + arguments[i];
        }
        return z;
    }

    const total = sum(...arr)
    const numReview = valutationMap.length;
    const media = total / numReview;

    let mediaReview;

    if (!media) {
        mediaReview = 0
    }

    if (media) {
        mediaReview = media.toFixed(1)
    }

    return (
        <div className={classes.badgeReviewCard}>{mediaReview}<Icon.StarFill /></div>
    )
}

export default BadgeReviews