import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import NosVehicules from "./pages/NosVehicules";
import DetailVehicule from "./pages/DetailVehicule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Accueil />} />
        <Route path="/NosVehicules" element={<NosVehicules />} />
        <Route path="/DetailVehicule" element={<DetailVehicule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
