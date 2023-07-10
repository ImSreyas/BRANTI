import React from "react";
import { NavLink } from "react-router-dom";
import MoreOptions from "./MoreOptions";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../../../store/navOptionSlice";

const NavProfile = () => {
  const moreOptionsBtn = useSelector((state) => state.navOptionSlice);
  const dispatch = useDispatch();
  const handleOptionClick = () => {
    dispatch(change());
  };
  const user = useSelector((state) => state.customer.value);

  return (
    <div className="nav-icon profile-icon-container">
      <NavLink to="profile" className="profile-icon">
        {user.img ? <img src={user.img} /> : <img src="/icons/user.svg" />}
      </NavLink>
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
