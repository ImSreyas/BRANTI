import React from "react";
import { NavLink } from "react-router-dom";

const NavCart = () => {
  return (
    <NavLink
      to="cart"
      className={({ isActive }) => {
        return isActive
          ? "active nav-icon icon cart-icon"
          : "nav-icon icon cart-icon";
      }}
    ></NavLink>
  );
};

export default NavCart;
