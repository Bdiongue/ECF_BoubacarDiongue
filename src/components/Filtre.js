import React from "react";

const Filtre = () => {
  return (
    <div className="filter_container">
      <div className="filter_title">
        <h2>NOS VEHICULES D'OCCASIONS</h2>
      </div>

      <div className="filters">
        <label for="price">Prix :</label>
        <input type="range" id="price" />

        <label for="Kilometers">Kilométrage :</label>
        <input type="range" id="kilometers" />

        <label for="year">Année de mise en circulation :</label>
        <input type="range" id="year" />

        <button type="submit">Rechercher</button>
      </div>
    </div>
  );
};

export default Filtre;
