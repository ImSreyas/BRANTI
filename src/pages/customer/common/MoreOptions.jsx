import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { change, disable } from "store/navOptionSlice";
import { unsetUser } from "store/customerSlice";
import { signOut } from "firebase/auth";
import { auth } from "config/firebase";

const MoreOptions = ({reference}) => {
  const moreOptionsBtn = useSelector((state) => state.navOptionSlice);
  const user = useSelector((state) => state.customer.value);
  const optionRef = useRef(null);
  const dispatch = useDispatch();

  const handleOptionClick = () => {
    dispatch(change());
  };
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("signed out successfully");
    } catch (err) {
      console.log(err);
    }
    dispatch(unsetUser());
    dispatch(change());
  };
  const handleWindowClick = (e) => {
    if (e.target !== optionRef.current && e.target !== reference) {
      dispatch(disable());
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, );

  return (
    <div
      ref={optionRef}
      className={
        moreOptionsBtn
          ? "active more-options-container"
          : "more-options-container"
      }
    >
      {Object.keys(user).length !== 0 ? (
        <>
          <button onClick={logout} className="option-btn unselectable">
            Logout
          </button>
          <div className="devider"></div>
        </>
      ) : null}

      <NavLink
        to="orders"
        onClick={handleOptionClick}
        className={({ isActive }) => {
          return isActive
            ? "active option-btn unselectable"
            : "option-btn unselectable";
        }}
      >
        Orders
      </NavLink>
      <NavLink
        to="offers"
        onClick={handleOptionClick}
        className={({ isActive }) => {
          return isActive
            ? "active option-btn unselectable"
            : "option-btn unselectable";
        }}
      >
        Offers
      </NavLink>
      <NavLink
        to="seller"
        onClick={handleOptionClick}
        className={({ isActive }) => {
          return isActive
            ? "active option-btn unselectable"
            : "option-btn unselectable";
        }}
      >
        Become a seller
      </NavLink>
    </div>
  );
};

export default MoreOptions;
