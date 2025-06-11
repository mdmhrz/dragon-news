import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // console.log(user);

    // for Register user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for observe logged in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);


    // for logout user
    const logOut = () => {
        return signOut(auth)
    }

    // for login user

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;