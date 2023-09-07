import Asset from "pages/common/Asset";
import React from "react";
import signInAssetUrl from "assets/images/signin.svg";
import SignIn from "./components/SignIn";
import "./style/sign-in.scss"

const CustomerSignIn = () => {
  return (
    <div className="main-body customer-sign-in-page">
      <SignIn />
      <Asset url={signInAssetUrl} />
    </div>
  );
};

export default CustomerSignIn;
