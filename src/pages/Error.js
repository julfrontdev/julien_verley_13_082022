import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Error = () => {
  return (
    <div className="error404">
      <Header />
      <h2 className="error-message">Page inexistante...</h2>
      <NavLink to="/">
        <h4 className="error-link">Retourner sur la page d'accueil</h4>
      </NavLink>
    </div>
  );
};

export default Error;
