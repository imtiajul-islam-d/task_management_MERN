import React, { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState(true);
  const [user, setUser] = useState(null);

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

  const authInfo = {
    loadingState,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
