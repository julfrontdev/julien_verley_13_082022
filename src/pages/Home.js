import React from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNavSignIn from "../components/HeaderNavSignIn";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="header">
          <HeaderLogo />
          <HeaderNavSignIn />
        </div>
        <br />
        <Hero />
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default Home;
