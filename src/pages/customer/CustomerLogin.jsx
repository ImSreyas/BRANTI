import React from "react";
import Asset from "../super-global/Asset";
import LoginComponent from "./components/customer-login/LoginComponent";
import "./scss/customer-login.scss";

const CustomerLogin = () => {
  return (
    <div className="main-body login-page">
      <Asset url="/assets/login.svg" />
      <div className="devider"></div>
      <LoginComponent />
    </div>
  );
};

export default CustomerLogin;
