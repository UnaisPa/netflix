import { createContext, useContext, useState, useEffect } from "react";
import { auth,db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {setDoc,doc} from "firebase/firestore"

// ... (import statements)

const AuthContext = createContext();

export function AuthContextProvider({ children }) { // Corrected 'child' to 'children'
    const [user, setUser] = useState(null); // Initialize with null instead of {}

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db,'users',email),{
            savedShows: []
        })
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []); // Added an empty dependency array to run the effect only once

    return <AuthContext.Provider value={{ signUp, login, logOut, user }}>{children}</AuthContext.Provider>;
}

export function UserAuth() { // Changed the function name to 'useAuth'
    return useContext(AuthContext);
}
