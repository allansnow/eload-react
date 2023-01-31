import React from 'react'
import eloadcel from '../images/eload-cel-img.jpg'

const Funcional = () => {
  return (
    <section className="container sixth-section-container">
      <div className="sixth-section-content-div">
        <h2 className="sixth-section-h2">
          Funcional e auxilia diarimante no controle de cargas.
        </h2>
        <p className="sixth-section-body">
          O eLoad é 100% responsivo, isso quer dizer que a plataforma se adapta
          totalmente ao seu aparelho, entregando uma melhor visualização dos
          dados e possibilitando que você tenha uma melhor tomada de decisão .
        </p>
        <button className="sixth-section-btn">FAÇA UM TESTE GRÁTIS</button>
      </div>
      <div className="sixth-section-img-div">
        <img
          src={eloadcel}
          alt=""
          className="sixth-section-img"
        ></img>
      </div>
    </section>
  );
}

export default Funcional