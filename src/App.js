// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { home, login, profile } from "./routes";

function App() {
  return (
    <>
      <Router baseline="/">
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={login} element={<Login />} />
          <Route path={profile} element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
