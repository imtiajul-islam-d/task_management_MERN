import React, { useEffect, useState } from 'react';

import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = () => {
    const [loadingState, setLoadingState] = useState(true);
    const [user, setUser] = useState(null);
    // registration starting
    const createUserEmail = (email, password) => {
      setLoadingState(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    // registration ending
    // update starting
    const updateUser = (info) => {
      setLoadingState(true)
      return updateProfile(auth.currentUser, info)
    }
    // update ending
    // google login starting
    const googleLogin = () => {
      setLoadingState(true)
      return signInWithPopup(auth, googleProvider)
    }
    // google login ending
    // login starting
    const emailLogin = (email, password) => {
      setLoadingState(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
    // login ending
    // logout starting
    const logOut = () => {
      localStorage.removeItem('furniture')
      return signOut(auth)
    }
    // logout ending
    // get currently signed in user
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoadingState(false);
      });
      return () => {
        unSubscribe();
      };
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;