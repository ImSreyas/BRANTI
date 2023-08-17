import React from "react";
import { NavLink } from "react-router-dom";

const NavNotification = () => {
  return (
    <NavLink
      to="notification"
      className={({ isActive }) => {
        return isActive
          ? "active nav-icon icon notification-icon"
          : "nav-icon icon notification-icon";
      }}
    ></NavLink>
  );
};

export default NavNotification;
