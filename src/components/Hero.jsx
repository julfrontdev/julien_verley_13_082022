import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background-image">
        <img src={"../../assets/img/bank-tree.jpeg"} alt="Hero Background" />
      </div>
      <section className="hero-content">
        <h2 className="sr-only">Promoted content</h2>
        <p className="hero-content-subtitle">No fees.</p>
        <p className="hero-content-subtitle">No minimum deposit.</p>
        <p className="hero-content-subtitle">High interest rates.</p>
        <p className="hero-content-text">
          Open a savings account with Argent Bank today!
        </p>{" "}
      </section>
    </div>
  );
};

export default Hero;
