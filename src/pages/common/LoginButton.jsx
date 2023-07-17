import React from "react";
import loaderIconSvg from "assets/icons/loader.svg";

const LoginButton = ({ propStates }) => {
  const [isLoader, signIn] = propStates;

  return isLoader ? (
    <button className="loader">
      <img alt="leader icon" src={loaderIconSvg} />
    </button>
  ) : (
    <button type="submit" className="submit" onClick={signIn}>
      log in
    </button>
  );
};

export default LoginButton;
