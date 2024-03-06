import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useStateAuth from '../../auth/StateAuth';

import Logout from '../../auth/Logout';

import classes from '../_Header.module.scss';

import * as Icon from 'react-bootstrap-icons';

function ListHeader() {

    const { userAuth } = useStateAuth();

    const [isShow1, setIsShow1] = useState(false);
    const [isShow2, setIsShow2] = useState(false);
    const [isShow3, setIsShow3] = useState(false);
    const [hamburgerIsOpen, setHamburgenIsOpen] = useState(false);

    const ulShow1 = () => {
        setIsShow1(true)
    };
    const ulShow2 = () => {
        setIsShow2(true)
    };
    const ulShow3 = () => {
        setIsShow3(true)
    };
    const ulNoShow1 = () => {
        setIsShow1(false)
    };
    const ulNoShow2 = () => {
        setIsShow2(false)
    };
    const ulNoShow3 = () => {
        setIsShow3(false)
    };
    const iconBurgerToggle = () => {
        setHamburgenIsOpen((prev) => !prev)
    };

    function handleScroll(e) {
        e.preventDefault();
        window.scroll({
            top: document.body.scrollHeight,
            left: 0,
        });
    }

    return (
        <>
            <div className={`${classes.iconHmg} ${hamburgerIsOpen && classes.open}`} onClick={iconBurgerToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`${classes.headerUl} ${hamburgerIsOpen && classes.ulOpen}`}>
                <li onClick={() => setHamburgenIsOpen(false)}>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    } end
                    >Home</NavLink>
                </li>
                <li className={classes.dropdownHeader} onMouseEnter={ulShow1} onMouseLeave={ulNoShow1}>
                    <NavLink to='/Primi' className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    } onDoubleClickCapture={() => setHamburgenIsOpen(false)}>
                        Primi Piatti
                    </NavLink>
                    <ul className={`${isShow1 && classes.ulShow}`}>
                        <li onClick={() => setHamburgenIsOpen(false)}><Link to={`/Primi/Pasta`}>Pasta</Link></li>
                        <li onClick={() => setHamburgenIsOpen(false)}><Link to={`/Primi/Risotti`}>Risotti</Link></li>
                        <li onClick={() => setHamburgenIsOpen(false)}><Link to={`/Primi/Altri Primi`}>Altri Primi</Link></li>
                    </ul>
                </li>
                <li className={classes.dropdownHeader} onMouseEnter={ulShow2} onMouseLeave={ulNoShow2}>
                    <NavLink to='/Secondi' className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    } onDoubleClickCapture={() => setHamburgenIsOpen(false)}>
                        Secondi Piatti
                    </NavLink>
                    <ul className={`${isShow2 && classes.ulShow}`}>
                        <li onClick={() => setHamburgenIsOpen(false)}><Link to={`/Secondi/Secondi di Carne`}>Secondi di Carne</Link></li>
                        <li onClick={() => setHamburgenIsOpen(false)}><Link to={`/Secondi/Secondi di Pesce`}>Secondi di Pesce</Link></li>
                        <li onClick={() => setHamburgenIsOpen(false)}><Link to={`/Secondi/Secondi Vegetariani`}>Secondi Vegetariani</Link></li>
                    </ul>
                </li>
                <li id="contorni_header"><NavLink to='/Contorni' className={({ isActive }) =>
                    isActive ? classes.active : undefined
                } onClick={() => setHamburgenIsOpen(false)}>
                    Antipasti e Contorni
                </NavLink></li>
                <li className={classes.dropdownHeader} onMouseEnter={ulShow3} onMouseLeave={ulNoShow3}>
                    <NavLink to='/Dolci' className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    } onDoubleClickCapture={() => setHamburgenIsOpen(false)}>
                        Dolci e Dessert
                    </NavLink>
                    <ul className={`${isShow3 && classes.ulShow}`}>
                        <li onClick={() => setHamburgenIsOpen(false)}><Link to={`/Dolci/Dolci con Cottura`}>Dolci con Cottura</Link></li>
                        <li onClick={() => setHamburgenIsOpen(false)}><Link to={`/Dolci/Dolci senza Cottura`}>Dolci senza Cottura</Link></li>
                    </ul>
                </li>
                <li>
                    <NavLink to='/tutte le ricette' className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    } onClick={() => setHamburgenIsOpen(false)}
                    >Tutte le Ricette
                    </NavLink></li>
                <li onClick={() => setHamburgenIsOpen(false)}><Link onClick={handleScroll}>Contatti</Link></li>
                <li onClick={() => setHamburgenIsOpen(false)}>{!userAuth ? <Link to={'/Auth'}><Icon.LockFill /></Link> : <Link to={'/Admin'}>Admin</Link>}</li>
                {userAuth && <Logout />}
            </ul>
        </>
    )
}

export default ListHeader;