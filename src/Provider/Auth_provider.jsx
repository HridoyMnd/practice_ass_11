import { useEffect, useState } from "react";
// import { Auth_context } from "../../Api/Context";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { Auth_context } from "../Api/Context";

// eslint-disable-next-line react/prop-types
const Auth_provider = ({ children }) => {
    const [user, setUser] = useState('nothing')
    const [loading, setLoading] = useState(true);
    const google_provider = new GoogleAuthProvider()

    // google sing in
    const google_signIn = () => {
        return signInWithPopup(auth, google_provider)
    }

    // create user 
    const create_user = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const user_signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user sign out
    const user_signOut = () => {
        return signOut(auth);
    }

    // current user observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, current_user => {
            setLoading(false)
            setUser(current_user);
        })
        return unsubscribe
    }, [])

    if (loading) {
        return <span className="loading loading-bars loading-md block mx-auto min-h-screen"></span>
    }

    // provide auth info
    const authInfo = {
        create_user,
        user_signIn,
        google_signIn,
        user_signOut,
        setUser,
        loading,
        user,
    }

    return (
        <Auth_context.Provider value={authInfo} >
            {children}
        </Auth_context.Provider>
    );
};

export default Auth_provider;