import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/slices/authSlice";
// import { reset } from "../features/slices/authSlice";

const HeaderNavSignInOrOut = () => {
  // TM
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Ce que j'avais tenté
  // const firstName = useSelector((state) => state.auth.user.firstName);
  // console.log(firstName);

  // TM
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login"); // Pourquoi ça ne fonctionne pas ?
  };
  //   // const userData = {
  //   //   username,
  //   //   password,
  //   // };
  //   dispatchEvent(logout(userData));

  return (
    <>
      {user ? (
        <>
          <div className="header-nav-user-or-home">
            <NavLink className="header-item" to="/profile.html">
              <i className="header-item-icon fa fa-user-circle"></i>
              {/* <div className="header-item-signin-or-out">{firstName}</div> */}
              <div className="header-item-signin-or-out">static-firstName</div>
            </NavLink>
            <NavLink className="header-item" to="/">
              <i className="header-item-icon fa fa-sign-out"></i>
              {/* onclick : 
        1/ vider le token et les informations de l'utlisateur dans le store Redux 
        2/ rediriger vers la page Login.js */}
              {/* TM */}
              <div className="header-item-signin-or-out" onClick={onLogout}>
                Sign Out
              </div>
              {/* <div className="header-item-signin-or-out">Sign Out</div> */}
            </NavLink>
          </div>
        </>
      ) : (
        <div className="header-nav-user-or-home">
          <NavLink className="header-item" to="/login">
            <i className="header-item-icon fa fa-user-circle"></i>
            <div className="header-item-signin-or-out">Sign In</div>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default HeaderNavSignInOrOut;
