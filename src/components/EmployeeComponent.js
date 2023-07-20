import React, { useState } from "react";

const EmployeeComponent = () => {
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
        <input type="file" name="image" id="image" accept="image/*" required />

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

        <label for="description">Description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          required
        ></textarea>

        <button type="submit">Ajouter la voiture</button>
      </form>
    </div>
  );
};

export default EmployeeComponent;
