import React from "react";
import { Form, NavLink } from "react-router-dom";

const CustomerNav = () => {
  return (
    <nav>
      <div className="search-container">
        <Form method="get" action=".">
          <input
            type="text"
            name="search"
            placeholder="Type to search..."
            className="search-input"
          />
          <button type="submit" className="search-btn"></button>
        </Form>
      </div>
      <div className="navigation-container">
        <NavLink to="." className="nav-links">
          Home
        </NavLink>
        <NavLink to="category" className="nav-links">
          Category
        </NavLink>
        <NavLink to="offers" className="nav-links">
          Offers
        </NavLink>
        <NavLink to="wishlist" className="nav-icon wishlist-icon"></NavLink>
        <NavLink to="cart" className="nav-icon cart-icon"></NavLink>
        <div className="nav-icon profile-icon-container">
          <NavLink to="profile" className="profile-icon"></NavLink>
          <div className="more-options-icon"></div>
        </div>
      </div>
    </nav>
  );
};

export default CustomerNav;
