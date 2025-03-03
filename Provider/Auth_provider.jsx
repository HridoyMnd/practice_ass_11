import { useEffect, useState } from "react";
import { Auth_context } from "../Api/Context";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../src/Firebase/firebase.config";

// eslint-disable-next-line react/prop-types
const Auth_provider = ({ children }) => {
    const [user, setUser] = useState('nothing')
    const [loading, setLoading] = useState(true);
    const google_provider = new GoogleAuthProvider()

    // google sing in
    const google_signIn = () => {
        return signInWithPopup(auth, google_provider)
    }

    // sign out user 
    const user_signOut = () => {
        return signOut(auth);
    }

    // current user observer 
    useEffect(( ) => {
        const unsubscribe = onAuthStateChanged(auth, current_user => {
            setLoading(false)
            setUser(current_user);
        })
        return unsubscribe
    }, [])
    
    if(loading) {
        return <span className="loading loading-bars loading-md block mx-auto min-h-screen"></span>
    }
    // else{
    //     console.log(user);
    // }
    console.log(user);
    // provide auth info
    const authInfo = {
        google_signIn,
        user_signOut,
        setUser,
        loading,
        user
    }

    return (
        <Auth_context.Provider value={authInfo} >
            {children}
        </Auth_context.Provider>
    );
};

export default Auth_provider;