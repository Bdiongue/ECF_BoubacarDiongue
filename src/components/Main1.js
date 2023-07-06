import React from "react";

const Main1 = () => {
  return (
    <main className="main1">
      <div className="Nos_services">
        <h3>
          NOS SERVICES POUR VOTRE <br />
          VEHICULE
        </h3>
        <h2>REPARATION TOUT TYPES</h2>
      </div>

      <div className="sans_rdv">
        <h4>SANS RENDEZ-VOUS !</h4>
        <h3>SERVICE EXPRESS !</h3>
        <p>contactez nous au 08 73 64 21 38</p>
      </div>

      <div className="services_details">
        <div className="detail1">
          <h3>Nos services</h3>
          <p>
            Notre garage adresse 10 Rue De La Liberté, à Toulouse. Propose
            différents types de services / prestations sans rendez-vous.
          </p>
        </div>

        <div className="detail2">
          <div className="service">
            <div>
              <h2>Carrosserie</h2>
              <p>100%</p>
              <span></span>
            </div>
            <div>
              <h2>entretient</h2>
              <p>100%</p>
              <span></span>
            </div>
            <div>
              <h2>Freinage</h2>
              <p>100%</p>
              <span></span>
            </div>
            <div>
              <h2>Pneu</h2>
              <p>100%</p>
              <span></span>
            </div>
          </div>
          <div className="service_text">
            <h5>Eh oui tout cela sans rendez-vous !</h5>
            <p>
              Contactez nous par téléphone ou e-mail pour plus d’informations à
              ce sujet, ou si vous n’êtes pas sur du de la raison de votre
              visite potentiel !
              <br />
              Informations en bas de page !
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main1;
