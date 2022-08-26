import React from "react";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNavSignIn from "../components/HeaderNavSignIn";
import HeaderNavSignInOrOut from "../components/HeaderNavSignInOrOut";
import AuthForm from "../features/auth/AuthForm";
//

const Login = () => {
  return (
    <>
      <div className="header">
        <HeaderLogo />
        {/* <HeaderNavSignIn /> */}
        <HeaderNavSignInOrOut />
      </div>
      <AuthForm />
      <Footer />
    </>
  );
};

export default Login;
