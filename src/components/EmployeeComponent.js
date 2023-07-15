import React, { useState } from "react";

const EmployeeComponent = () => {
  const [file, setFile] = useState();

  const handleFile = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {};

  return (
    <div className="employee_component">
      <div className="container-title">
        <h5>Ajouter des véhicules d'occasions</h5>
      </div>

      <form
        className="form-post"
        encType="multipart/form-data"
        method="POST"
        action="server.js"
      >
        <label for="nom">Nom, marque, Modele :</label>
        <input type="text" id="nom" name="nom" required />
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          required
          onChange={handleFile}
        />

        <label for="prix">Prix :</label>
        <input type="number" name="prix" id="prix" required />

        <label htmlFor="carburant">Carburant :</label>
        <select name="carburant" id="carburant" required>
          <option value="essence">Essence</option>
          <option value="diesel">Diesel</option>
          <option value="hybride">Hybride</option>
          <option value="electrique">Électrique</option>
        </select>

        <label htmlFor="kilometrage">Kilométrage :</label>
        <input type="number" name="kilometrage" id="kilometrage" required />

        <label for="year">Année</label>
        <input type="number" id="year" name="year" required />

        <button onClick={handleUpload} type="submit">
          Ajouter la voiture
        </button>
      </form>
    </div>
  );
};

export default EmployeeComponent;
