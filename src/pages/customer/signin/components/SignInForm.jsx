import Input from "pages/common/Input";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import emailIconUrl from "assets/icons/email.svg";
import passwordIconUrl from "assets/icons/password.svg";
import LoaderButton from "pages/common/LoaderButton";
import useEmailSignIn from "hooks/useEmailSignIn";

const SignInForm = () => {
  const emailRegularEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    method,
    states: [isLoader, error, setError],
  } = useEmailSignIn(email, password);
  const localMethod = () => {
    if (!email.match(emailRegularEx)) {
      if (email === "") {
        setError(["*username cannot be empty", "", ""]);
      } else {
        setError(["*invalid email", "", ""]);
      }
    } else {
      if (password !== confirmPassword) {
        setError(["", "", "*password should be same"]);
      } else method();
    }
  };

  return (
    <Form className="sign-in-form">
      <Input
        type="text"
        placeholder="email"
        iconSrc={emailIconUrl}
        propStates={[email, setEmail]}
        error={error[0]}
      />
      <Input
        type="password"
        placeholder="password"
        iconSrc={passwordIconUrl}
        propStates={[password, setPassword]}
        error={error[1]}
      />
      <Input
        type="password"
        placeholder="confirm password"
        iconSrc={passwordIconUrl}
        propStates={[confirmPassword, setConfirmPassword]}
        error={error[2]}
      />
      <LoaderButton propStates={[isLoader, localMethod]} content="sign in" />
    </Form>
  );
};

export default SignInForm;
