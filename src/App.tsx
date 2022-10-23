import "./App.css";

import Menu from "./Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/genres" element={<IndexGenres />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
