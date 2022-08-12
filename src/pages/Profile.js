import React from "react";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNavUserOrHome from "../components/HeaderNavUserOrHome";
import UserMain from "../components/UserMain";

const Profile = () => {
  return (
    <>
      <div className="header">
        <HeaderLogo />
        <HeaderNavUserOrHome />
      </div>
      <UserMain />
      <Footer />
    </>
  );
};

export default Profile;
