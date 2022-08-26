import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNavSignInOrOut from "../components/HeaderNavSignInOrOut";
import UserMain from "../components/UserMain";
import { setUser } from "../features/slices/authSlice";

const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

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
        console.log(response.data.body);
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
