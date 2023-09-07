import React from "react";
import { Link } from "react-router-dom";
import "./style/go-to-account.scss";

const GoToAccount = ({ content="", gotoLink="/" }) => {
  return (
    <div className="goto-account-container">
      <div className="text">{content}</div>
      <Link to={gotoLink} className="link-btn"></Link>
    </div>
  );
};

export default GoToAccount;
