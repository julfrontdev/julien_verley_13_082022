import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/slices/authSlice";

const HeaderNavSignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  // console.log(user); //

  const onLogout = () => {
    dispatch(logout());
    navigate("/login"); // Antoine : pourquoi ça ne fonctionne pas ?
  };

  return (
    <div className="header-nav-user-or-home">
      <div className="header-item" to="/profile.html">
        <i className="header-item-icon fa fa-user-circle"></i>
        <div className="header-item-signin-or-out">{user.firstName}</div>
      </div>
      <NavLink className="header-item" to="/">
        <i className="header-item-icon fa fa-sign-out"></i>
        <div
          className="header-item-signin-or-out hover-underline"
          onClick={onLogout}
        >
          Sign Out
        </div>
      </NavLink>
    </div>
  );
};

export default HeaderNavSignOut;
