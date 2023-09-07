import React, { useState } from "react";
import GoToAccount from "pages/customer/common/GoToAccount";
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
      <GoToAccount
        content="Don't have an account? create one"
        gotoLink="/signIn"
      />
      <OtherLoginMethods />
    </div>
  );
};

export default LoginComponent;
