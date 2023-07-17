import React, { useState } from "react";
import { Form, Link, Navigate } from "react-router-dom";
import loaderIconSvg from "assets/icons/loader.svg";
import useEmailLogin from "hooks/useEmailLogin";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordShower, setPasswordShower] = useState(false);
  const { signIn, states: [isLogedin, isLoader, error] } = useEmailLogin("customer", username, password, rememberMe)

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
          <button
            className={
              passwordShower ? "show-password-btn" : "hide-password-btn"
            }
            onClick={() => {
              setPasswordShower((state) => !state);
            }}
          ></button>
          <input
            type={passwordShower ? "text" : "password"}
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
        {isLoader ? (
          <button className="loader">
            <img alt="leader icon" src={loaderIconSvg} />
          </button>
        ) : (
          <button type="submit" className="submit" onClick={signIn}>
            log in
          </button>
        )}
      </Form>
      <div className="no-account-container">
        <div className="text">Don't have an account? create one</div>
        <Link to="/signIn" className="create-btn"></Link>
      </div>
      <div className="divider">
        <div>or continue with</div>
      </div>
      <div className="other-login-methods">
        <button className="demo-login-btn">Demo</button>
        <button className="google-login-btn">
          <div></div>
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
