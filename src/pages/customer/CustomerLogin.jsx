import React, { useEffect } from "react";
import Asset from "../super-global/Asset";
import LoginComponent from "./components/customer-login/LoginComponent";
import "./scss/customer-login.scss";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

export const loader = () => {
  if (localStorage.getItem("customer") ?? sessionStorage.getItem("customer")) return redirect("/");
  return null
}

const CustomerLogin = () => {

  return (
    <div className="main-body login-page">
      <Asset url="/assets/login.svg" />
      <LoginComponent />
    </div>
  );
};

export default CustomerLogin;
