import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../store/navOptionSlice";

const MoreOptions = () => {
  const moreOptionsBtn = useSelector((state) => state.navOptionSlice);
  const dispatch = useDispatch();
  const handleOptionClick = () => {
    dispatch(change());
  };

  return (
    <div
      className={
        moreOptionsBtn
          ? "active more-options-container"
          : "more-options-container"
      }
    >
      <NavLink
        to="login"
        onClick={handleOptionClick}
        className={({ isActive }) => {
          return isActive
            ? "active option-btn unselectable"
            : "option-btn unselectable";
        }}
      >
        Login
      </NavLink>
      <div className="devider"></div>
      <NavLink
        to="orders"
        onClick={handleOptionClick}
        className={({ isActive }) => {
          return isActive
            ? "active option-btn unselectable"
            : "option-btn unselectable";
        }}
      >
        Orders
      </NavLink>
      <NavLink
        to="offers"
        onClick={handleOptionClick}
        className={({ isActive }) => {
          return isActive
            ? "active option-btn unselectable"
            : "option-btn unselectable";
        }}
      >
        Offers
      </NavLink>
      <NavLink
        to="seller"
        onClick={handleOptionClick}
        className={({ isActive }) => {
          return isActive
            ? "active option-btn unselectable"
            : "option-btn unselectable";
        }}
      >
        Become a seller
      </NavLink>
    </div>
  );
};

export default MoreOptions;
