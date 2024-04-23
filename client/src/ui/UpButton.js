import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

import classes from './_ui.module.scss';

const UpButton = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    let classUpButton;

    if (offset <= 399) {
        classUpButton = classes.upButtonInvisible;
    }

    if (offset >= 400) {
        classUpButton = classes.upButton;
    }

    function handleScroll(e) {
        e.preventDefault();
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className={classUpButton}><Icon.ArrowUpCircle className={classes.buttonContex} onClick={handleScroll} /></div>
        </>
    )
}

export default UpButton;