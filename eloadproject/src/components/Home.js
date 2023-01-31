import React from 'react'
import home from '../images/note-inteiro-img.jpg';

const Home = () => {
  return (
    <section className="main-section-container" id="home">
      <div className="main-section-div">
        <div className="main-section-content-div">
          <h2 className="main-section-h2">
            Plataforma de Gestão de Carga de Treinamento para Alta Performance.
          </h2>
          <p className="main-section-p">
            O eLoad guia o profissional para <span>aumentar a performance</span>{' '}
            dos atletas e<span>reduzir as chances de lesão</span>, embasando as
            tomadas de decisão.
          </p>
          <h4 className="main-section-h4">
            <span>Não é mágica, é controle.</span>
          </h4>
          <div className="main-section-btns-div">
            <button className="main-section-btn futg-button">
              Faça um teste grátis.
            </button>
            <button className="main-section-btn auar-button">
              Agende uma apresentação rápida.
            </button>
          </div>
        </div>
        <div className="main-section-img-div">
          <img
            src={home}
            alt="eload"
            className="main-section-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Home