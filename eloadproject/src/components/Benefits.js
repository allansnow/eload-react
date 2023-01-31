import React from 'react';
import { benefitsItems } from '../data';
import Benefit from './Benefit';

const Benefits = () => {
  return (
    <section className="second-section-container" id="solucoes">
      <h2 className="second-section-h2 second-section-first-h2">
        Se você <span>busca:</span>
      </h2>
      <div className="benefit-items-container">
        {benefitsItems.map((benefit) => {
          return <Benefit key={benefit.id} benefits={benefit}></Benefit>;
        })}
      </div>
      <h2 className="second-section-h2 second-section-second-h2">
        O <span>Eload</span> é pra você!
      </h2>
    </section>
  );
};

export default Benefits;
