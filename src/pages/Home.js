import React from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderNavSignIn from "../components/HeaderNavSignIn";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="home">
        <div>
          <Header />
          <HeaderNavSignIn />
        </div>
        <Hero />
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default Home;
