import React from "react";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNavSignIn from "../components/HeaderNavSignIn";
import SignInForm from "../components/SignInForm";
import LogForm from "../features/log/LogForm";

const LogIn = () => {
  return (
    <>
      <div className="header">
        <HeaderLogo />
        <HeaderNavSignIn />
      </div>
      {/* <SignInForm /> */}
      <LogForm />
      <Footer />
    </>
  );
};

export default LogIn;
