import { auth } from "config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const useEmailSignIn = (username = "", password = "") => {
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(["", ""]);

  const method = async () => {
    try {
      setIsLoader(true);
      await createUserWithEmailAndPassword(auth, username, password);
    } catch (error) {
      switch (error.code) {
        case "auth/missing-email":
          setError(["*username cannot be empty", "", ""]);
          break;
        case "auth/missing-password":
          setError(["", "*password cannot be empty", ""]);
          break;
        case "auth/email-already-in-use":
          setError(["*email has already been taken", "", ""]);
          break;
        case "auth/weak-password":
          setError(["", "*weak password", ""]);
          break;
        default:
          setError(["*something went wrong", "", ""]);
      }
      console.log(error.code);
    } finally {
      setIsLoader(false);
    }
  };
  return { method, states: [isLoader, error, setError] };
};

export default useEmailSignIn;
