import React, { useState } from "react";

const LoginComponent = () => {
  const [pseudonyme, setPseudonyme] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="login-component">
      <div className="login-container">
        <div className="greeting-container">
          <h6>Bienvenue !</h6>
          <p>Veuillez-vous connecter à votre espace employé.</p>
        </div>

        <form onSubmit={handleSubmit} className="connexion-container">
          <label for="nom">Pseudonyme</label>
          <input
            id="nom"
            type="text"
            placeholder="Votre pseudonyme employé"
            onChange={(e) => setPseudonyme(e.target.value)}
          />

          <label for="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
