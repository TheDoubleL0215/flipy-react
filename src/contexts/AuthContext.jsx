import React, { useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut, getAdditionalUserInfo } from "firebase/auth";
import { auth, db } from "../services/firebase.jsx";
import { collection, doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)

  async function createFirestoreUserInstance(credentials) {
    const userDoc = doc(collection(db, 'users'), credentials.user.uid);
    return setDoc(userDoc, {
      username: credentials.user.email,
      location: "hu"
    });
  }

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(cred => {
      createFirestoreUserInstance(cred)
    });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function googleLogin() {
    console.log("Fut a google")
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const details = getAdditionalUserInfo(result)
        createFirestoreUserInstance(result)

        console.log(result);
        console.log(details)

      }).catch((error) => {
        console.log(error)
      });
  };

  function logout() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false)
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    googleLogin,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
