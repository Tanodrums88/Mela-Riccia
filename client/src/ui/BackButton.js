import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import classes from './_ui.module.scss';

const BackButton = () => {
    return (
        <>
            <div className={classes.backButton}>
                <Link to='..' relative='path' >
                    <Icon.ArrowLeftCircle className={classes.buttonContex} />
                </Link>
            </div>
        </>
    )
}

export default BackButton;