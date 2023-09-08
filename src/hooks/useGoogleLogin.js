import { auth } from "config/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const useGoogleLogin = () => {
  const googlePopupLogin = async () => {
    const val = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log(val);
    setTimeout(async () => {
      const res = await signOut(auth);
      console.log(res);
    }, 5000);
  };

  return googlePopupLogin;
};

export default useGoogleLogin;
