import React from "react";

const Asset = ({ url }) => {
  return (
    <div className="asset-container">
      <img className="asset-image" src={url} />
    </div>
  );
};

export default Asset;
