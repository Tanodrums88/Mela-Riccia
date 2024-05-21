import React, { useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from '../context/user.context';

function Logout() {
    const { logOutUser } = useContext(UserContext);
    const navigate = useNavigate();

    const userLogOut = async () => {
        try {
            const loggedOut = await logOutUser();
            if (loggedOut) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <li onClick={userLogOut}>
            <NavLink>Log Out</NavLink>
        </li>
    )
};

export default Logout;