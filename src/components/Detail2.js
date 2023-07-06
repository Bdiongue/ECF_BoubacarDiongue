import React from "react";

const Detail2 = () => {
  return (
    <div className="detail2">
      <div className="title_container">
        <div className="title">
          <p>Des questions concernant ce vehicule ?</p>
          <p>Contactez nous directement avec ce formulaire :</p>
        </div>
      </div>

      <div className="form_container">
        <form className="form">
          <label for="prenom">Prenom</label>
          <input type="text" id="prenom" />

          <label for="nom">Nom</label>
          <input type="text" id="nom" />

          <label for="email">Email</label>
          <input type="email" id="email" />

          <label for="tel">Téléphone</label>
          <input type="tel" id="tel" />
        </form>

        <div className="textarea_container">
          <label for="question">
            Votre message concernant le Vehicule ( x )
          </label>
          <textarea
            id="question"
            placeholder="Question / remarque de tout genre..."
          ></textarea>
          <button type="button">Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default Detail2;
