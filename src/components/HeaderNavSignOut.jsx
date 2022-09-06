import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";

const HeaderNavSignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="header-nav-user-or-home">
      <div className="header-item" to="/profile.html">
        <i className="header-item-icon fa fa-user-circle"></i>
        <div className="header-item-signin-or-out">{user.firstName}</div>
      </div>
      <div className="header-item">
        <i className="header-item-icon fa fa-sign-out"></i>
        <div
          className="header-item-signin-or-out hover-underline"
          onClick={onLogout}
        >
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default HeaderNavSignOut;
