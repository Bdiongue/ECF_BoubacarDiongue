import React from "react";
import { NavLink } from "react-router-dom";

const Detail1 = () => {
  return (
    <div className="detail1">
      <NavLink to="/NosVehicules">
        <button type="button">Retour</button>
      </NavLink>

      <div className="detail_container">
        <h4>MARQUE MODELE TYPE ET ESSENCE</h4>
        <img
          src="./assets/images/voiture_occasion.jpg"
          alt="Photo de la voiture"
        ></img>
        <p>
          <strong>Prix :</strong> 5060 €
        </p>
        <p>
          <strong>Kilométrage :</strong> 66960 km
        </p>
        <p>
          <strong>Thermique :</strong> Diesel
        </p>
      </div>

      <div className="vehicule_description">
        <h6>Informations supplémentaires sur le vehicule</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          nobis quidem omnis, explicabo laborum iure neque numquam culpa enim
          quod nostrum odit accusantium molestias ipsam ut tempora repellendus
          eum dolore hic, quasi quam. Error, mollitia modi? Quam eveniet
          repellendus harum quibusdam aspernatur nihil modi accusamus. Libero
          possimus distinctio mollitia perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default Detail1;
