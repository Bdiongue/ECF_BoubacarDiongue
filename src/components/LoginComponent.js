import React, { useState } from "react";
import "./LoginValidation";
import Validation from "./LoginValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = event => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/employees", values)
        .then(res => {
          if (res.data === "success") {
            navigate("/Employee");
          } else {
            alert("email ou mot de pass incorrecte");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="login-component">
      <div className="login-container">
        <div className="greeting-container">
          <h6>Bienvenue !</h6>
          <p>Veuillez-vous connecter à votre espace employé/admin.</p>
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

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
