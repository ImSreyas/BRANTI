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
import useWindowSize from "hooks/useWidowSize";
import MobileOptions from "./MobileOptions";


const CustomerNav = () => {
  const { width } = useWindowSize();
  const customer = useSelector((state) => state.customer.value);

  return (
    <nav>
      {1200 < width ? (
        <>
          <Logo />
          <Search />
          <NavMain />
          <NavNotification />
          <NavWishlist />
          <NavCart />
          <NavProfile />
        </>
      ) : 600 < width ? (
        <>
          <div className="top-section">
            <div className="logo-container">
              <Logo />
            </div>
            <div className="nav-btn-container">
              <NavNotification />
              <NavWishlist />
              <NavCart />
              <NavProfile />
            </div>
          </div>
          <div className="bottom-section">
            <NavMain />
            <Search />
          </div>
        </>
      ) : (
        <>
          <div className="top-section">
            <div className="logo-container">
              <Logo />
            </div>
            <div className="nav-btn-container">
              <NavNotification />
              <NavWishlist />
              <NavCart />
              <MobileOptions />
            </div>
          </div>
          <div className="bottom-section">
            <Search />
          </div>
        </>
      )}
    </nav>
  );
};

export default CustomerNav;
