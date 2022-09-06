import React from "react";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNavSignInOrOut from "../components/HeaderNavSignInOrOut";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <>
      <div className="header">
        <HeaderLogo />
        <HeaderNavSignInOrOut />
      </div>
      <AuthForm />
      <Footer />
    </>
  );
};

export default Login;
