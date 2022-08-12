import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavUserOrHome = () => {
  return (
    <div className="header-nav-user-or-home">
      <NavLink className="header-item" to="/profile.html">
        <i className="header-item-icon fa fa-user-circle"></i>
        <div className="header-item-signin-or-out">Tony</div>
      </NavLink>
      <NavLink className="header-item" to="/">
        <i className="header-item-icon fa fa-sign-out"></i>
        <div className="header-item-signin-or-out">Sign Out</div>
      </NavLink>
    </div>
  );
};

export default HeaderNavUserOrHome;
