import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { disable } from "../../store/navOptionSlice"

const NavWishlist = ({ onClick }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(disable());
  };

  return (
    <NavLink
      to="wishlist"
      className={({ isActive }) => {
        return isActive
          ? "active nav-icon wishlist-icon"
          : "nav-icon wishlist-icon";
      }}
      onClick={handleClick}
    ></NavLink>
  );
};

export default NavWishlist;
