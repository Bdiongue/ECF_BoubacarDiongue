import React, { useState } from "react";

const LoginComponent = () => {
  return (
    <div className="login-component">
      <div className="login-container">
        <div className="greeting-container">
          <h6>Bienvenue Monsieur Parrot !</h6>
          <p>Créer un nouveau compte employé ici !</p>
        </div>

        <form onSubmit={handleSubmit} className="connexion-container">
          <label for="nom">Pseudonyme</label>
          <input id="nom" type="text" placeholder="Votre pseudonyme employé" />

          <label for="password">Mot de passe</label>
          <input id="password" type="password" placeholder="**************" />

          <button type="submit">Créer</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
