import React, { useState } from "react";
import Validation from "./LoginValidation";
import "./LoginValidation";
import axios from "axios";

const AdminComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = event => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (validationErrors.email === "" && validationErrors.password === "") {
      axios
        .post("http://localhost:8081/parrotdata", values)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      alert("employé créé avec succès");
    }
  };

  return (
    <div className="login-component">
      <div className="login-container">
        <div className="greeting-container">
          <h6>Bienvenue Monsieur Parrot !</h6>
          <p>Créer un nouveau compte employé ici !</p>
        </div>

        <form onSubmit={handleSubmit} className="connexion-container">
          <label for="email">Email</label>
          <input
            onChange={handleInput}
            name="email"
            id="email"
            type="email"
            placeholder="Exemple@gmail.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label for="password">Mot de passe</label>
          <input
            onChange={handleInput}
            name="password"
            id="password"
            type="password"
            placeholder="**************"
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <button type="submit">Créer</button>
        </form>
      </div>
    </div>
  );
};

export default AdminComponent;
