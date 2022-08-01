import React from "react";
import Logo from "./Logo";
import SignIn from "./SignIn";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <NavLink to="/">
          <Logo />
          <SignIn />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
