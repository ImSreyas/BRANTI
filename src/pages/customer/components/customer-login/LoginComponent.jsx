import React from "react";
import { Form } from "react-router-dom";
import { useState } from "react";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <Form className="login-form">
        <label className="label username-label">Username</label>
        <input
          type="text"
          className="username"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label className="label password-label">Password</label>
        <input
          type="password"
          className="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="submit">
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
