import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import NosVehicules from "./pages/NosVehicules";
import DetailVehicule from "./pages/DetailVehicule";
import Login from "./pages/Login";
import PageAdmin from "./pages/PageAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Accueil />} />
        <Route path="/NosVehicules" element={<NosVehicules />} />
        <Route path="/DetailVehicule" element={<DetailVehicule />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PageAdmin" element={<PageAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
