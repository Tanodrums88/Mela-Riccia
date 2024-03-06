import React from 'react';
import * as Icon from 'react-bootstrap-icons';

import classes from '../pages/singleRecipes/singleRecipe.module.scss';

function useStarsCreate(num) {
    let star
    if (num === '1') {
        star = <>
            <Icon.StarFill className={classes.iconStar} />
            <Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} />
        </>
    } else if (num === '2') {
        star = <>
            <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
            <Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} />
        </>
    } else if (num === '3') {
        star = <>
            <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
            <Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} />
        </>
    } else if (num === '4') {
        star = <>
            <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
            <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStarNone} />
        </>
    } else if (num === '5') {
        star = <>
            <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
            <Icon.StarFill className={classes.iconStar} /><Icon.StarFill className={classes.iconStar} />
        </>
    } else {
        star = <>
            <Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} /><Icon.StarFill className={classes.iconStarNone} />
        </>
    }
    return { star };
};

export default useStarsCreate;