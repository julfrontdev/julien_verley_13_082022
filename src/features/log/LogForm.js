import React from "react";
import { addEmail } from "./logSlice";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";

const LogForm = () => {
  //   const logSelector = useSelector((state) => state.log.value); // to get the value of the log in Redux store
  const dispatch = useDispatch();

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={() => dispatch(addEmail())}
            />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <a href="./profile.html" className="sign-in-button">
            Sign In
          </a> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          <button class="sign-in-button" onClick={() => dispatch(addEmail())}>
            {/* Pas addEmail mais un "addForm" ou "handleSubmit" pour toutes les données du Form cf. FS 34"*/}
            Sign In
          </button>
          {/* <button class="sign-in-button">Sign In</button> */}
          {/* <!--  --> */}
        </form>
      </section>
    </main>
  );
};

export default LogForm;
