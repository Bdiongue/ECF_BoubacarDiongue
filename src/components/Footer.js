import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="horaire_container">
        <h5>Horaire d'ouverture</h5>
      </div>
      <div className="container_footer">
        <div className="jours">
          <ul>
            <li>Lundi</li>
            <li>Mardi</li>
            <li>Mercredi</li>
            <li>Jeudi</li>
            <li>Vendredi</li>
            <li>Samedi</li>
            <li>Dimanche</li>
          </ul>
        </div>

        <div className="heure">
          <ul>
            <li id="H_lundi">8h 45 - 12h ; 14h -18h</li>
            <li id="H_mardi">8h 45 - 12h ; 14h -18h</li>
            <li id="H_mercredi">8h 45 - 12h ; 14h -18h</li>
            <li id="H_jeudi">8h 45 - 12h ; 14h -18h</li>
            <li id="H_vendredi">8h 45 - 12h ; 14h -18h</li>
            <li id="H_samedi">8h 45 - 12h </li>
            <li id="H_dimanche"> Fermé</li>
          </ul>
        </div>
      </div>

      <h5>Contactez Nous !</h5>
      <div className="contact">
        <h6>Adresse</h6>
        <p>10 Rue De La Liberté, Toulouse, 31500</p>

        <h6>Email</h6>
        <p>ParrrotGarage@gmail.com</p>

        <h6>Téléphone</h6>
        <p>08 73 64 21 38</p>
      </div>
    </footer>
  );
};

export default Footer;
