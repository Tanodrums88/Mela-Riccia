import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function useStateAuth() {

    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserAuth(user)
                const timer = setTimeout(() => {
                    signOut(auth).then(() => {
                    }).catch(error => console.log(error))
                }, 600000);
                return () => clearTimeout(timer);
            } else {
                setUserAuth(null)
            }
        });
        return () => {
            listen()
        }
    }, []);

    return { userAuth }
}