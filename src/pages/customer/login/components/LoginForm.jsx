import useEmailLogin from "hooks/useEmailLogin";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Form } from "react-router-dom";
import RememberMeButton from "pages/common/RememberMeButton";
import LoginButton from "pages/common/LoginButton";
import Input from "pages/common/Input";
import emailIconUrl from "assets/icons/email.svg";
import passwordIconUrl from "assets/icons/password.svg";

const LoginForm = ({ propStates }) => {
  const [{ username, setUsername }, { password, setPassword }] = propStates;
  const [rememberMe, setRememberMe] = useState(false);
  const {
    signIn,
    states: [isLogedin, isLoader, error],
  } = useEmailLogin("customer", username, password, rememberMe);

  if (isLogedin) return <Navigate to="/" />;
  return (
    <Form className="login-form">
      <Input
        type="text"
        placeholder="username"
        iconSrc={emailIconUrl}
        propStates={[username, setUsername]}
        error={error[0]}
      />
      <Input
        type="password"
        placeholder="password"
        iconSrc={passwordIconUrl}
        propStates={[password, setPassword]}  
        error={error[1]}
      />
      <RememberMeButton propStates={[rememberMe, setRememberMe]} />
      <LoginButton propStates={[isLoader, signIn]} />
    </Form>
  )
}

export default LoginForm;
