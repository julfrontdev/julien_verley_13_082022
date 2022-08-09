import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error = () => {
  return (
    <div className="error404">
      <Header />
      <div className="error-content">
        <h2 className="error-message">Page inexistante...</h2>
        <NavLink to="/">
          <h4 className="error-link">Retourner sur la page d'accueil</h4>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
