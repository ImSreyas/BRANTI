import React from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  return (
    <div className="no-account-container">
      <div className="text">Don't have an account? create one</div>
      <Link to="/signIn" className="create-btn"></Link>
    </div>
  );
};

export default NewAccount;
