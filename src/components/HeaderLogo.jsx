import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
    </div>
  );
};

export default Header;
