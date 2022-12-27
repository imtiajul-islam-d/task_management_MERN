// firebase
import React, { useEffect, useState } from 'react';

import app from '../../../firebase/firebase.config';
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
// firebase

const initState = {
    authentication :  {
        login: () => {return "object"},
        register: () => {return "register"}
    }
}
const authReducer = (state = initState, action) => {
    return state
}

export default authReducer;