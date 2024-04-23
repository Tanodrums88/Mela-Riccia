import { Spinner } from "react-bootstrap";
import classes from './_ui.module.scss';

const SpinnerLoading = () => {
    return (
        <div className={classes.spinner}>
            <Spinner animation="border" variant="warning" />
        </div>
    )
};

export default SpinnerLoading;