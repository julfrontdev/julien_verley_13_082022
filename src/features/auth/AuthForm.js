// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../slices/authSlice";
// import { setUser } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, //
    }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data.body.token);
        dispatch(setToken(response.data.body.token));
        navigate("/profile");
      });
  };

  return (
    <main className="main bg-dark">
      {/* Form */}
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              // type="text"
              type="email"
              id="username"
              name="username"
              value={username}
              // onChange={(e) => setUsername(e.target.value)}
              onChange={onChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={onChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button
            type="submit"
            className="sign-in-button"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default AuthForm;
