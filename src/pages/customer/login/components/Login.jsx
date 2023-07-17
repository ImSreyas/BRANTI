import React, { useState } from "react";
import NewAccount from "./NewAccount";
import OtherLoginMethods from "./OtherLoginMethods";
import LoginForm from "./LoginForm";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <LoginForm
        propStates={[
          { username, setUsername },
          { password, setPassword },
        ]}
      />
      <NewAccount />
      <OtherLoginMethods />
    </div>
  );
};

export default LoginComponent;
