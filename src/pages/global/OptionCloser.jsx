import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { disable } from "../../store/navOptionSlice";

const OptionCloser = () => {
  const isActive = useSelector((state) => state.navOptionSlice);
  const dispatch = useDispatch()
  const handleClick = () => {
    isActive && dispatch(disable());
  };

  return (
    <div
      className={
        isActive ? "active global-option-closer" : "global-option-closer"
      }
      onClick={handleClick}
    ></div>
  );
};

export default OptionCloser;
