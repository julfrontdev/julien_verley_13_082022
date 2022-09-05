import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  // Initialize dispatch and navigate
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Selecting what we need from the state
  const { user, isSuccess } = useSelector((state) => state.auth);

  // Form inputs default values
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Destructuring formData
  // const username = formData.username
  // const password = formData.password
  const { username, password } = formData;

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, isSuccess, navigate, dispatch]);

  const onChange = (e) => {
    // setFormData: values of form inputs are stored in formData
    setFormData((prevState) => ({
      ...prevState,
      // username: e.target.value
      // password: e.target.value
      [e.target.name]: e.target.value,
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
        dispatch(setToken(response.data.body.token));
        navigate("/profile");
      });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              id="username"
              name="username"
              value={username}
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
