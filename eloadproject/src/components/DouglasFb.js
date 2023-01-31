import React from 'react'
import douglas from '../images/douglas-img.jpg'

const DouglasFb = () => {
  return (
    <section className="fifth-section-container">
      <div className="fifth-section-img-div">
        <img
          src={douglas}
          alt="img"
          className="fifth-section-img"
        />
      </div>
      <div className="fifth-section-content-div">
        <h3 className="fifth-section-h3">
          Douglas Nazar<br></br> Preparador Físico<br></br> (Sesi Franca
          Basquete)
        </h3>
        <p className="fifth-section-body">
          “O controle de carga de treinamento é de extrema importância para
          monitorar e equilibrar as demandas de treino dos atletas/alunos, por
          isso eu uso e indico essa importante ferramenta que a Eload (Gestão de
          carga de treino) me agrega e otimiza o meu trabalho.”
        </p>
      </div>
    </section>
  );
}

export default DouglasFb