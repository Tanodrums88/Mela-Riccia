import React from 'react'
import { NavLink } from "react-router-dom";
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function Logout() {
    const userLogOut = () => {
        signOut(auth).then(() => {
        }).catch(error => console.log(error))
    }

    return (
        <li onClick={() => userLogOut({ logoutParams: { returnTo: window.location.origin } })}>
            <NavLink>Log Out</NavLink>
        </li>
    )
}

export default Logout