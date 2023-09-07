import React from "react";
import SignInForm from "./SignInForm";
import GoToAccount from "pages/customer/common/GoToAccount";
import OtherSignInMethods from "./OtherSignInMethods";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <SignInForm />
      <GoToAccount content="Already have an account! Login" gotoLink="/login" />
      <OtherSignInMethods />
    </div>
  );
};

export default SignIn;
