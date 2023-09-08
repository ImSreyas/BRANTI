import useGoogleLogin from "hooks/useGoogleLogin";
import React from "react";

const OtherLoginMethods = ({ propStates: { demoTrigger, setDemoTrigger } }) => {
  const handleDemo = () => {
    setDemoTrigger(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const googlePopupLogin = useGoogleLogin();

  return (
    <>
      <div className="divider">
        <div>or continue with</div>
      </div>
      <div className="other-login-methods">
        <button className="demo-login-btn" onClick={handleDemo}>
          Demo
        </button>
        <button className="google-login-btn" onClick={googlePopupLogin}>
          <div></div>
        </button>
      </div>
    </>
  );
};

export default OtherLoginMethods;
