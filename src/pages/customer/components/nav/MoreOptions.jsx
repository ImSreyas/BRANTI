import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../../../store/navOptionSlice";

const MoreOptions = () => {
  const moreOptionsBtn = useSelector((state) => state.navOptionSlice);
  const dispatch = useDispatch();
  const handleOptionClick = () => {
    dispatch(change());
  };
  const user = useSelector((state) => state.userSlice);

  return (
    <div
      className={
        moreOptionsBtn
          ? "active more-options-container"
          : "more-options-container"
      }
    >
      {user == {}
        ? [
          <>
            <button className="option-btn unselectable">Logout</button>
            <div className="devider"></div>
          </>
          ]
        : null}

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
