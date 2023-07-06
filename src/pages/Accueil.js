import React from "react";
import Header from "../components/Header";
import Main1 from "../components/Main1";
import Main2 from "../components/Main2";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <div className="accueil">
      <Header></Header>
      <div className="main1_2">
        <Main1></Main1>
        <Main2></Main2>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Accueil;
