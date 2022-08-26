import React, { useState, useEffect } from "react"; // TM
// import React, { useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux"; // TM
import { setToken } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // TM
import { login, reset } from "../slices/authSlice";
import Spinner from "../../components/Spinner";

const AuthForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  }); // default values for formData

  // Destructuring formData
  const { username, password } = formData;
  // const username = formData.username
  // const password = formData.password

  // Initialize dispatch and navigate
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selecting what we need from the state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  ); // TM

  // TM
  ////////////////////////////////
  // Revoir le reset qui remet tout à zéro, même quand successs = true
  ////////////////////////////////
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // if (isSuccess || user) {
    if (isSuccess) {
      navigate("/profile");
      // state.isSuccess = true // écriture à revoir
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // setFormData: values of form inputs in object { username, password }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, // spread operator keeps previous state and add new element
      [e.target.name]: e.target.value,
      // [e.target.name] = key of the input field
      // e.target.value = value of the input field typed in
    }));
  };

  ////////////////////////////////
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
        dispatch(setToken(response.data.body.token)); // dispatch response to setToken in authSlice
        navigate("/profile");
      });
  };
  ////////////////////////////////

  if (isLoading) {
    return <Spinner />;
  }

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
              type="email"
              id="username"
              // name = destructured "username" from our state formData
              name="username"
              // what is typed in the input field
              value={username}
              // function onChange is called when the value of the input field is changed
              onChange={onChange}
              // ou bien // onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              // password = destructured "password" from our state formData
              name="password"
              // what is typed in the input field:
              value={password}
              // function onChange is called when the value of the input field is changed
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
            // function handleSubmit is called when the form is submitted
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
