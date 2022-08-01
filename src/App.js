import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { home, activity, averagesessions, performance } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
