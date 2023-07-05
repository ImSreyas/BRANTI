import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { disable } from "../../store/navOptionSlice";

const NavNotification = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(disable());
  };

  return (
    <NavLink
      to="notification"
      className={({ isActive }) => {
        return isActive
          ? "active nav-icon notification-icon"
          : "nav-icon notification-icon";
      }}
      onClick={handleClick}
    ></NavLink>
  );
};

export default NavNotification;
