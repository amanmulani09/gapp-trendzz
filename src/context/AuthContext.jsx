import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../component/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const LoginContext = createContext(null);

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser)
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <LoginContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </LoginContext.Provider>
  );
};
export const useAuth = () => useContext(LoginContext);
export default AuthContext;
