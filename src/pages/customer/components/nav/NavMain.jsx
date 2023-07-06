import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { disable } from "../../store/navOptionSlice";

const NavMain = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(disable());
  };

  return (
    <>
      <NavLink to="." className="nav-links" onClick={handleClick}>
        Home
      </NavLink>
      <NavLink to="category" className="nav-links" onClick={handleClick}>
        Category
      </NavLink>
      <NavLink
        to="trending"
        className={({ isActive }) => {
          return isActive ? "active nav-links" : "nav-links";
        }}
        onClick={handleClick}
      >
        Trending
      </NavLink>
    </>
  );
};

export default NavMain;
