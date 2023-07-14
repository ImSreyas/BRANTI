import React from "react";

const Asset = ({ url }) => {
  return (
    <div className="asset-container">
      <img alt="asset" className="asset-image" src={url} />
    </div>
  );
};

export default Asset;
