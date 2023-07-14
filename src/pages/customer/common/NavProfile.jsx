import React from "react";
import { NavLink } from "react-router-dom";
import MoreOptions from "./MoreOptions";
import { useSelector, useDispatch } from "react-redux";
import { change } from "store/navOptionSlice";
import userIconUrl from "assets/icons/user.svg";

const NavProfile = () => {
  const user = useSelector((state) => state.customer.value)
  const moreOptionsBtn = useSelector((state) => state.navOptionSlice);
  const dispatch = useDispatch();
  const handleOptionClick = () => {
    dispatch(change());
  };

  return (
    <div className="nav-icon profile-icon-container">
      {Object.keys(user).length !== 0 ? (
        <NavLink to="profile" className="profile-icon">
          {user.img ? (
            <img alt="profile icon" src={user.img} />
          ) : (
            <img alt="profile icon" src={userIconUrl} />
          )}
        </NavLink>
      ) : (
        <NavLink
          to="login"
          className={({ isActive }) => {
            return isActive
              ? "active nav-links login-btn"
              : "nav-links login-btn";
          }}
        >
          login
        </NavLink>
      )}
      <div className="divider"></div>
      <div
        onClick={handleOptionClick}
        className={
          moreOptionsBtn ? "active more-options-icon" : "more-options-icon"
        }
      ></div>
      <MoreOptions />
    </div>
  );
};

export default NavProfile;
