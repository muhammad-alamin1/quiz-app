import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile
} from "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import '../firebase';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currUser, setCurrUser] = useState();

    // firebase state change
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    // sign up 
    const signup = async (email, password, username) => {
        const auth = getAuth();

        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        });

        const user = auth.currentUser;
        setCurrUser({
            ...user,
        });
    }

    // login user
    const login = (email, password) => {
        const auth = getAuth();

        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out user
    const logout = () => {
        const auth = getAuth();

        return signOut(auth);
    }

    const value = {
        currUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    );
}