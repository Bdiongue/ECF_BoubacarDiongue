import React from "react";

const Main2 = () => {
  return (
    <main className="main2">
      <div className="title-temoingnage">
        <h3>TEMOINGNAGE CLIENTS</h3>
      </div>

      <div className="temoingnage_container">
        <div className="introduction_commentaire">
          <p>
            Laissez nous un commentaire ! <br /> (Veillez à rester respectueux
            et a ne pas poster de contenue offensant)
          </p>
        </div>

        <form>
          <input placeholder="Titre / Sujet"></input>
          <textarea placeholder="Contenue de votre commentaire..."></textarea>
          <button type="submit">Publier</button>
        </form>
      </div>

      <div className="temoingnage_client_container">
        <div className="commmentaire_type">
          <h4>Exemple de commentaire pouvant etre posté</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            recusandae eligendi consectetur architecto esse, animi porro est
            dicta excepturi nihil sed aut voluptates fuga autem sapiente illum
            molestiae fugiat quam?
          </p>
        </div>
        <div className="commmentaire_type">
          <h4>Exemple de commentaire pouvant etre posté</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            recusandae eligendi consectetur architecto esse, animi porro est
            dicta excepturi nihil sed aut voluptates fuga autem sapiente illum
            molestiae fugiat quam?
          </p>
        </div>
        <div className="commmentaire_type">
          <h4>Exemple de commentaire pouvant etre posté</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            recusandae eligendi consectetur architecto esse, animi porro est
            dicta excepturi nihil sed aut voluptates fuga autem sapiente illum
            molestiae fugiat quam?
          </p>
        </div>
        <div className="commmentaire_type">
          <h4>Exemple de commentaire pouvant etre posté</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            recusandae eligendi consectetur architecto esse, animi porro est
            dicta excepturi nihil sed aut voluptates fuga autem sapiente illum
            molestiae fugiat quam?
          </p>
        </div>
        <div className="commmentaire_type">
          <h4>Exemple de commentaire pouvant etre posté</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            recusandae eligendi consectetur architecto esse, animi porro est
            dicta excepturi nihil sed aut voluptates fuga autem sapiente illum
            molestiae fugiat quam?
          </p>
        </div>
      </div>
      <div className="voir_plus_container">
        <button type="submit" className="voir_plus">
          Voir plus
        </button>
      </div>
    </main>
  );
};

export default Main2;
