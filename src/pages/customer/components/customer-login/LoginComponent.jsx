import React from "react";
import { Form } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase.config.js";
import { setUser, setUserAuth } from "../../../../store/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const currentUser = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const create = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, username, password);
      // console.log(typeof(auth.currentUser));
      if (rememberMe) {
        dispatch(setUser(auth.currentUser));
      } else {
        dispatch(setUserAuth(auth.currentUser));
      }
    } catch (error) {
      console.log(error.code);
    }
  };
  console.log(currentUser);

  return (
    <div className="login-container">
      <Form className="login-form">
        {/* <label className="label username-label">Username</label> */}
        <div className="username-wrapper">
          <div className="icon username"></div>
          <input
            type="email"
            className="username"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        {/* <label className="label password-label">Password</label> */}
        <div className="password-wrapper">
          <div className="icon password"></div>
          <input
            type="password"
            className="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className={rememberMe ? "active remember-me-btn" : "remember-me-btn"}
          onClick={() => {
            setRememberMe((state) => !state);
          }}
        >
          Remember me
        </button>
        <button type="submit" className="submit" onClick={create}>
          log in
        </button>
      </Form>
      <div className="divider">
        <div>or</div>
      </div>
      <div className="other-login-methods">
        <button className="google-login-btn">
          <div>Continue with google</div>
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
