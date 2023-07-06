import React, { useState } from "react";
import Logo from "../nav/Logo";
import Search from "../nav/Search";
import NavMain from "../nav/NavMain";
import NavNotification from "../nav/NavNotification";
import NavWishlist from "../nav/NavWishlist";
import NavCart from "../nav/NavCart";
import NavProfile from "../nav/NavProfile";
import { useDispatch } from "react-redux";
import { change } from "../../../../store/navOptionSlice";

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
