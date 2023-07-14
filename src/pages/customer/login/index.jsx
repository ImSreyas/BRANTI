import React from "react";
import Asset from "pages/common/Asset";
import LoginComponent from "./components/Login";
import "./style/customer-login.scss";
import { redirect } from "react-router-dom";
import loginImageUrl from "assets/images/login.svg"

export const loader = () => {
  if (localStorage.getItem("customer") ?? sessionStorage.getItem("customer")) return redirect("/");
  return null
}

const CustomerLogin = () => {

  return (
    <div className="main-body login-page">
      <Asset url={loginImageUrl} />
      <LoginComponent />
    </div>
  );
};

export default CustomerLogin;
