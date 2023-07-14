import React from "react";
import { NavLink } from "react-router-dom";

const NavWishlist = () => {
  return (
    <NavLink
      to="wishlist"
      className={({ isActive }) => {
        return isActive
          ? "active nav-icon wishlist-icon"
          : "nav-icon wishlist-icon";
      }}
    ></NavLink>
  );
};

export default NavWishlist;
