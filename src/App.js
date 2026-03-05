import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const ProjetoBU = lazy(() => import("./pages/ProjetoBU"));
const ProjetoFBC = lazy(() => import("./pages/ProjetoFBC"));
const ProjetoKicks = lazy(() => import("./pages/ProjetoKicks"));
const ProjetoIgor = lazy(() => import("./pages/ProjetoIgor"));
const Lab = lazy(() => import("./pages/Lab"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProjetoBU" element={<ProjetoBU />} />
          <Route path="/ProjetoFBC" element={<ProjetoFBC />} />
          <Route path="/ProjetoKicks" element={<ProjetoKicks />} />
          <Route path="/ProjetoIgor" element={<ProjetoIgor />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;