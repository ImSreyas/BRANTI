import useEmailLogin from "hooks/useEmailLogin";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Form } from "react-router-dom";
import RememberMeButton from "pages/common/RememberMeButton";
import Input from "pages/common/Input";
import emailIconUrl from "assets/icons/email.svg";
import passwordIconUrl from "assets/icons/password.svg";
import LoaderButton from "pages/common/LoaderButton";

const LoginForm = ({ propStates }) => {
  const [
    { username, setUsername },
    { password, setPassword },
    { demoTrigger, setDemoTrigger },
  ] = propStates;
  const [rememberMe, setRememberMe] = useState(false);
  const {
    method,
    states: [isLogedin, isLoader, error],
  } = useEmailLogin("customer", username, password, rememberMe);

  useEffect(() => {
    if (demoTrigger === true) {
      setUsername("sreyas@gmail.com");
      setPassword("sreyas@123");
    }
  });

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
      <LoaderButton propStates={[isLoader, method]} content="log in" />
    </Form>
  );
};

export default LoginForm;
