// firebase
import React, { useEffect, useState } from "react";

import app from "../../../firebase/firebase.config";
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

// create user
const createUserEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
// update starting
const updateUser = (info) => {
  return updateProfile(auth.currentUser, info);
};
// login user
// google login starting
const googleLogin = () => {
  return signInWithPopup(auth, googleProvider);
};
const emailLogin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
// logout starting
const logOut = () => {
  //   localStorage.removeItem("");
  return signOut(auth);
};
//

// firebase

const initState = {
  authentication: {
    createUserEmail: createUserEmail,
    updateUser: updateUser,
    googleLogin: googleLogin,
    emailLogin: emailLogin,
    logOut: logOut,
  },
};
const authReducer = (state = initState, action) => {
  return state;
};

export default authReducer;
