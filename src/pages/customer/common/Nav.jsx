import "./style/nav.scss";
import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import NavMain from "./NavMain";
import NavNotification from "./NavNotification";
import NavWishlist from "./NavWishlist";
import NavCart from "./NavCart";
import NavProfile from "./NavProfile";
import { useSelector } from "react-redux";
import { windowSizeContext } from "App";

const CustomerNav = () => {
  const width = useContext(windowSizeContext);
  const customer = useSelector((state) => state.customer.value);
  console.log(width);

  return (
    <nav>
      <Logo />
      <Search />
      <NavMain />
      <NavNotification />
      <NavWishlist />
      <NavCart />
      <NavProfile />
    </nav>
  );
};

export default CustomerNav;
