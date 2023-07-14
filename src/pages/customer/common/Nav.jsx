import "./style/nav.scss";
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import NavMain from "./NavMain";
import NavNotification from "./NavNotification";
import NavWishlist from "./NavWishlist";
import NavCart from "./NavCart";
import NavProfile from "./NavProfile";
import { useSelector } from "react-redux";

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
        {Object.keys(customer).length !== 0 ? (
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
