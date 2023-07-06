import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <>
      <NavLink to="." className="nav-links">
        Home
      </NavLink>
      <NavLink to="category" className="nav-links">
        Category
      </NavLink>
      <NavLink
        to="trending"
        className={({ isActive }) => {
          return isActive ? "active nav-links" : "nav-links";
        }}
      >
        Trending
      </NavLink>
    </>
  );
};

export default NavMain;
