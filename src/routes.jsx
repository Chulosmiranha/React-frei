import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import E01 from "./pages/e01/index.jsx";
import E02 from "./pages/e02/index.jsx";
import E03 from "./pages/e03/index.jsx";
import E04 from "./pages/e04/index.jsx";
import E05 from "./pages/e05/index.jsx";
import E06 from "./pages/e06/index.jsx";
import E07 from "./pages/e07/index.jsx";
import E08 from "./pages/e08/index.jsx";
import E09 from "./pages/e09/index.jsx";
import E10 from "./pages/e10/index.jsx";
import E11 from "./pages/e11/index.jsx";
import E12 from "./pages/e12/index.jsx";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        
        <Route path="/e01" element={<E01 />} />
        <Route path="/e02" element={<E02 />} />
        <Route path="/e03" element={<E03 />} />
        <Route path="/e04" element={<E04 />} />
        <Route path="/e05" element={<E05 />} />
        <Route path="/e06" element={<E06 />} />
        <Route path="/e07" element={<E07 />} />
        <Route path="/e08" element={<E08 />} />
        <Route path="/e09" element={<E09 />} />
        <Route path="/e10" element={<E10 />} />
        <Route path="/e11" element={<E11 />} />
        <Route path="/e12" element={<E12 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export { Navigation };
