import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavSignIn = () => {
  return (
    <NavLink className="header-item" to="/signin">
      <i className="header-item-icon fa fa-user-circle"></i>
      <div className="header-item-signin-or-out">Sign In</div>
    </NavLink>
  );
};

export default HeaderNavSignIn;
