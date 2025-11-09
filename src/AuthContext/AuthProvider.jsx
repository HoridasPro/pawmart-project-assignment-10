import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./../firebase/firebase.init";
import AuthContext from "./AuthContex";

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // user Sign In With Google
  const userSignInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  // Sing Out
  const userSignOut = () => {
    return signOut(auth);
  };

  // On auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUsr) => {
      setUser(currentUsr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    userSignInWithGoogle,
    userSignOut,
  };
  return (
    <div>
      <AuthContext value={AuthInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
