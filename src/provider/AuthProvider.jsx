/* eslint-disable react/prop-types */
import {
      createUserWithEmailAndPassword,
      GoogleAuthProvider,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      signInWithPopup,
      signOut,
      updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const provider = new GoogleAuthProvider();

      // User Create Account
      const signUp = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
      };
      // User Log in
      const signIn = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password);
      };
      // User Log in with Google
      const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, provider)
      };
      // User Update Profile
      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }
      // User Log out
      const logout = () => {
            setLoading(true)
            signOut(auth)
                  .then(() => {
                        setUser(null)
                  }).catch(err => {
                        console.log(err)
                  })
            return;
      };
      const authInfo = {
            signUp,
            signIn,
            googleLogin,
            logout,
            updateUserProfile,
            user,
            setUser,
            loading
      };

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  setLoading(false)
            });

            return () => {
                  unSubscribe()
            }
      }, [])

      return (
            <authContext.Provider value={authInfo}>{children}</authContext.Provider>
      );
};

export default AuthProvider;
