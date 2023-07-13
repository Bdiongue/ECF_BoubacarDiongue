import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");

  const [menu_class, setMenuClass] = useState("menu hidden");

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="menu-container" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className="logo-container">
          <img
            className="logo-header"
            src="./assets/images/Logo.png"
            alt="Logo Garage V.Parrot"
          />
        </div>

        <div className="right-header">
          <NavLink to="/Login">
            <img
              className="add-user-img"
              src="./assets/images/add-user.png"
              alt="image de création de compte"
            />
          </NavLink>
          <p>Se connecter (employés seulement)</p>
        </div>
      </div>

      <nav className={menu_class}>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/NosVehicules">
            <li>Nos véhicules</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
