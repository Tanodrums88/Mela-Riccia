import { createContext, useState } from "react";
import { App, Credentials } from "realm-web";

const API_ACCESS = process.env.REACT_APP_API_LOGIN;

const app = new App(API_ACCESS);

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const emailPasswordLogin = async (email, password) => {
        setIsLoading(true);
        const credentials = Credentials.emailPassword(email, password);
        const authenticatedUser = await app.logIn(credentials);
        setUser(authenticatedUser);
        setIsLoading(false);
        return authenticatedUser;
    };

    const fetchUser = async () => {
        if (!app.currentUser) return false;
        try {
            await app.currentUser.refreshCustomData();
            setUser(app.currentUser);
            return app.currentUser;
        } catch (error) {
            throw error;
        }
    }

    const logOutUser = async () => {
        if (!app.currentUser) return false;
        try {
            await app.currentUser.logOut();
            setUser(null);
            return true;
        } catch (error) {
            throw error
        }
    }

    return <UserContext.Provider value={{ user, setUser, fetchUser, emailPasswordLogin, logOutUser, isLoading }}>
        {children}
    </UserContext.Provider>;
}