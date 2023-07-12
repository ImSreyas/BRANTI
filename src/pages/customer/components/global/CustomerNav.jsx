import "./scss/nav.scss";
import React, { useState } from "react";
import Logo from "../nav/Logo";
import Search from "../nav/Search";
import NavMain from "../nav/NavMain";
import NavNotification from "../nav/NavNotification";
import NavWishlist from "../nav/NavWishlist";
import NavCart from "../nav/NavCart";
import NavProfile from "../nav/NavProfile";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuth } from "firebase/auth";

const CustomerNav = () => {
  const customer = useSelector((state) => state.customer.value);

  return (
    <nav>
      <div className="logo-and-search-container">
        <Logo />
        <Search />
      </div>
      <div className="navigation-container">
        <NavMain />
        {Object.keys(customer).length != 0 ? (
          <>
            <NavWishlist />
            <NavCart />
            <NavNotification />
          </>
        ) : (
          <></>
        )}
        <NavProfile />
      </div>
    </nav>
  );
};

export default CustomerNav;
