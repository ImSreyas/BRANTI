import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { disable } from "../../store/navOptionSlice"

const NavCart = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(disable());
  };

  return (
    <NavLink
      to="cart"
      className={({ isActive }) => {
        return isActive ? "active nav-icon cart-icon" : "nav-icon cart-icon";
      }}
      onClick={handleClick}
    ></NavLink>
  );
};

export default NavCart;
