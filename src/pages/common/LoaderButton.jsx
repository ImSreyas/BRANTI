import React from "react";
import loaderIconSvg from "assets/icons/loader.svg";
import "style/loader-button.scss";

const LoaderButton = ({ propStates, content }) => {
  const [isLoader, localMethod] = propStates;

  return isLoader ? (
    <button className="loader-button loader">
      <img alt="leader icon" src={loaderIconSvg} />
    </button>
  ) : (
    <button type="submit" className="loader-button submit" onClick={localMethod}>
      {content}
    </button>
  );
};

export default LoaderButton;
