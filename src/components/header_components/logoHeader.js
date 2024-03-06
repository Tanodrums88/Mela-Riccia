import { Link } from 'react-router-dom';
import logo from '../../image/logo_small_icon_only.svg';
import classes from '../_Header.module.scss';

function LogoHeader() {
    return (
        <>
            <Link to={'/'} className={classes.headerLogo}>
                <img alt='logo' src={logo}></img>
            </Link>
        </>
    )
}

export default LogoHeader;