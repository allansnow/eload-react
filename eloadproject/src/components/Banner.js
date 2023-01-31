import React from 'react'
import telas from '../images/telas-eload.jpg'

const Banner = () => {
  return (
    <section className="container eighth-section-container">
      <div className="eighth-section-main-div">
        <div className="eighth-section-main-div-content">
          <h2 className="eighth-section-h2">
            Informações de forma clara, facilitando possíveis intervenções de
            trabalho.
          </h2>
          <p className="eighth-section-body">
            Controlando um grupo ou um aluno/atleta apenas, você terá as
            informações para a sua melhor tomada de decisão, entregando mais
            desempenho e menos lesões.
          </p>
          <p className="eighth-section-correct"> &#10003 Várias métricas</p>
          <p className="eighth-section-correct">
            {' '}
            &#10003 Acerta na periodização
          </p>
        </div>
        <div className="eighth-section-main-div-img">
          <img
            src={telas}
            alt=""
            className="eight-section-img"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Banner