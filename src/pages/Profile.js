import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNavSignInOrOut from "../components/HeaderNavSignInOrOut";
import UserMain from "../components/UserMain";
import { setUser } from "../features/slices/authSlice";
import { useNavigate } from "react-router-dom";
// import UserAccount from "../components/UserAccount";

const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if token is null, redirect to login page (if not logged in)
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data.body); //
        dispatch(setUser(response.data.body));
      });
  }, [token, dispatch]); // Effect runs only once when token and dispatch change

  return (
    <>
      <div className="header">
        <HeaderLogo />
        <HeaderNavSignInOrOut />
      </div>
      <UserMain />
      <Footer />
    </>
  );
};

export default Profile;
