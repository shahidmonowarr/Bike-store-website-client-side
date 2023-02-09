import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
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

    const createUserAccount = (name, email, password, location, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setUserName(name);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                window.location.reload();
                setUser(user);
                // //save user to the database
                saveUser(email, name, 'POST');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const userLogin = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                setError('');
                setUser(user);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                window.location.reload();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    useEffect(() => {
        fetch(`https://bike-store-website-server.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://bike-store-website-server.onrender.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        error,
        createUserAccount,
        userLogin,
        signInUsingGoogle,
        isLoading,
        logOut
    }
}


export default useFirebase;