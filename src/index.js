import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store from "./app/store";
import { store } from "./app/store";
import { Provider } from "react-redux";

// Provider = Fournisseur de données

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
