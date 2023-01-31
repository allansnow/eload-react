import React from 'react'
import { soluctions } from '../data';
import Soluction from './Soluction';

const Soluctions = () => {
  return (
    <section className="container fourth-section-container">
      <h2 className="fourth-section-title">
        Os melhores dados de forma
        <span> simples e prática,</span> para a sua melhor tomada de decisão.
      </h2>
      
      <div className="flex-box-container">
      {soluctions.map((soluction) => {
      return (
        <Soluction key={soluction.id} soluction={soluction} />
      )
      })}
      </div>
      <button className="fourth-section-btn">
        EU QUERO ENTREGAR OS MELHORES RESULTADOS
      </button>
    </section>
  );
}

export default Soluctions