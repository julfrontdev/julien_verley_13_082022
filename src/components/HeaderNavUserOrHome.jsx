import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavUserOrHome = () => {
  return (
    <>
      <NavLink to="/user.html">
        <i className="header-item-icon fa fa-user-circle"></i>
        <div className="header-item-signin-or-out">Tony (dynamique)</div>
      </NavLink>
      <NavLink to="/">
        <i className="header-item-icon fa fa-sign-out"></i>
        <div className="header-item-signin-or-out">Sign Out</div>
      </NavLink>
    </>
  );
};

export default HeaderNavUserOrHome;
