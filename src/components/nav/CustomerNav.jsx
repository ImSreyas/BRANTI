import React, { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import NavMain from "./NavMain";
import NavNotification from "./NavNotification";
import NavWishlist from "./NavWishlist";
import NavCart from "./NavCart";
import NavProfile from "./NavProfile";
import { useDispatch } from "react-redux";
import { change } from "../../store/navOptionSlice";

const CustomerNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(change());
  };

  return (
    <nav>
      <div className="logo-and-search-container">
        <Logo />
        <Search />
      </div>
      <div className="navigation-container">
        <NavMain />
        <NavWishlist />
        <NavCart />
        <NavNotification />
        <NavProfile />
      </div>
    </nav>
  );
};

export default CustomerNav;
