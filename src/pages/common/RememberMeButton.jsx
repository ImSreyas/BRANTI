import React from "react";

const RememberMeButton = ({ propStates }) => {
  const [rememberMe, setRememberMe] = propStates;

  return (
    <button
      className={rememberMe ? "active remember-me-btn" : "remember-me-btn"}
      onClick={() => {
        setRememberMe((state) => !state);
      }}
    >
      Remember me
    </button>
  );
};

export default RememberMeButton;
