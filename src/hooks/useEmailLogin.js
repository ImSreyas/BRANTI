import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase.js";
import { setUser } from "store/customerSlice.js";
import { useDispatch } from "react-redux";

const useEmailLogin = (
  userType = "",
  username = "",
  password = "",
  rememberMe = false
) => {
  const [isLogedin, setIsLogedin] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(["", ""]);
  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      setIsLoader(true);
      await signInWithEmailAndPassword(auth, username, password, {
        rememberMe: rememberMe,
      });
      dispatch(
        setUser({
          type: rememberMe ? "PERMANENT" : "TEMPORARY",
          value: {
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
          },
        })
      );
      setIsLogedin(true);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError(["*invalid email", ""]);
          break;
        case "auth/user-not-found":
          setError(["*user not found", ""]);
          break;
        case "auth/missing-password":
          setError(["", "*invalid password"]);
          break;
        case "auth/wrong-password":
          setError(["", "*wrong password"]);
          break;
        default:
          setError(["*something went wrong", ""]);
      }
    } finally {
      setIsLoader(false);
    }
  };

  return { signIn, states: [isLogedin, isLoader, error] };
};

export default useEmailLogin;
