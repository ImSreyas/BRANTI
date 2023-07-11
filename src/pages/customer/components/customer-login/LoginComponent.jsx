import React from "react";
import { Form, Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase.config.js";
import {
  setUserTemp,
  setUserPermanent,
} from "../../../../store/customerSlice.js";
import { useDispatch, useSelector } from "react-redux";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const customer = useSelector((state) => state.customer.value);
  const dispatch = useDispatch();
  const [isLogedin, setIsLogedin] = useState(false);
  const [isloader, setIsLoader] = useState(false);
  const [error, setError] = useState(["", ""]);

  const create = async () => {
    try {
      setIsLoader(true);
      const user = await signInWithEmailAndPassword(auth, username, password);
      if (rememberMe) {
        dispatch(
          setUserPermanent({
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
          })
        );
      } else {
        dispatch(
          setUserTemp({
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
          })
        );
      }
      setIsLogedin(true);
    } catch (error) {
      console.log(error.code);
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
        default:
          setError(["*something went wrong", ""]);
      }
    } finally {
      setIsLoader(false);
    }
  };

  if (isLogedin) return <Navigate to="/" />;
  return (
    <div className="login-container">
      <Form className="login-form">
        {/* <label className="label username-label">Username</label> */}
        <div className="username-wrapper">
          <div className="icon username"></div>
          <input
            type="text"
            className={error[0] ? "error-border username" : "username"}
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {error ? <div className="error">{error[0]}</div> : <></>}
        </div>
        {/* <label className="label password-label">Password</label> */}
        <div className="password-wrapper">
          <div className="icon password"></div>
          <input
            type="password"
            className={error[1] ? "error-border password" : "password"}
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {error ? <div className="error">{error[1]}</div> : <></>}
        </div>
        <button
          className={rememberMe ? "active remember-me-btn" : "remember-me-btn"}
          onClick={() => {
            setRememberMe((state) => !state);
          }}
        >
          Remember me
        </button>
        {isloader ? (
          <button className="loader">
            <img src="/icons/loader.svg" />
          </button>
        ) : (
          <button type="submit" className="submit" onClick={create}>
            log in
          </button>
        )}
      </Form>
      <div className="no-account-container">
          <div className="text">Don't have an account? create one</div>
          <button className="create-btn"></button>
      </div>
      <div className="divider">
        <div>or continue with</div>
      </div>
      <div className="other-login-methods">
        <button className="demo-login-btn">
          Demo
        </button>
        <button className="google-login-btn">
          <div></div>
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
