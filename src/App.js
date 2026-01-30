import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Lab from "./pages/Lab";
import Cubes from "./pages/PhysicsCubes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/cubes" element={<Cubes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
