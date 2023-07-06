import React from "react";
import Header from "../components/Header";
import Filtre from "../components/Filtre";
import VehiculesOccasions from "../components/VehiculesOccasions";
import Footer from "../components/Footer";

const NosVehicules = () => {
  return (
    <div className="NosVehicule">
      <Header></Header>
      <Filtre></Filtre>
      <VehiculesOccasions></VehiculesOccasions>
      <Footer></Footer>
    </div>
  );
};

export default NosVehicules;
