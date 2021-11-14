import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setError('');
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const createUserAccount = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                window.location.reload();
                setUserName(name);
                setUser(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const userLogin = (email, password) => {
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setUser(user);
                window.location.reload();
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        createUserAccount,
        userLogin,
        signInUsingGoogle,
        isLoading,
        logOut
    }
}


export default useFirebase;