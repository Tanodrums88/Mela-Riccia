import { Fragment, useState, useEffect } from "react";
import { auth } from '../auth/firebase';
import { onAuthStateChanged } from "firebase/auth";


import LogoHeader from "./header_components/logoHeader";
import ListHeader from "./header_components/listHeader";
import SearchBar from "./header_components/searchBar";
import Wrapper from "../ui/wrapper";
import AdminMode from "./header_components/adminMode";

import classes from './_Header.module.scss';

function Header() {

    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserAuth(user)
            } else {
                setUserAuth(null)
            }
        });
        return () => {
            listen()
        }
    }, []);

    return (
        <Fragment>
            <header className={classes.header} id="header">
                <div className={classes.headerContent}>
                    <div className={classes.headerFirstSection}>
                        <LogoHeader />
                        {userAuth && <AdminMode />}
                        <SearchBar />
                    </div>
                    <ListHeader />
                </div>
            </header>
            <Wrapper />
        </Fragment>
    )
};

export default Header;