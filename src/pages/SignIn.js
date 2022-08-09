import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderNavSignIn from "../components/HeaderNavSignIn";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <>
      <div>
        <Header />
        <HeaderNavSignIn />
      </div>
      <SignInForm />
      <Footer />
    </>
  );
};

export default SignIn;
