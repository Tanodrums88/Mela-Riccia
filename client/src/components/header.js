import { useContext } from "react";
import { UserContext } from "../context/user.context";


import LogoHeader from "./header_components/logoHeader";
import ListHeader from "./header_components/listHeader";
import SearchBar from "./header_components/searchBar";
import Wrapper from "../ui/wrapper";
import AdminMode from "./header_components/adminMode";

import classes from './_Header.module.scss';

function Header() {

    const { user } = useContext(UserContext);

    return (
        <>
            <header className={classes.header} id="header">
                <div className={classes.headerContent}>
                    <div className={classes.headerFirstSection}>
                        <LogoHeader />
                        {user && <AdminMode />}
                        <SearchBar />
                    </div>
                    <ListHeader />
                </div>
            </header>
            <Wrapper />
        </>
    )
};

export default Header;