import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavSignIn = () => {
  return (
    <div className="header-nav-user-or-home">
      <NavLink className="header-item" to="/login">
        <i className="header-item-icon fa fa-user-circle"></i>
        <div className="header-item-signin-or-out">Sign In</div>
      </NavLink>
    </div>
  );
};

export default HeaderNavSignIn;
