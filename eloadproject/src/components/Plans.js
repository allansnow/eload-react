import React from 'react'
import {fiveatlPlans} from '../data'
import Plan from './Plan';

const Plans = () => {
  return (
    <section id='planos'>
      <div className="tenth-section-title-div">
        <h2>Escolha o melhor plano para você</h2>
      </div>

      <div className="tenth-section-container">
        <h2 className="plan-title">5 Atletas</h2>
        <div className="plan-item-container">
          {fiveatlPlans.map((plan) => {
            return <Plan plan={plan} />;
          })}
        </div>

        <h2 className="plan-title">15 Atletas</h2>
        <div className="plan-item-container">
          {fiveatlPlans.map((plan) => {
            return <Plan plan={plan} />;
          })}
        </div>

        <h2 className="plan-title">25 Atletas</h2>
        <div className="plan-item-container">
          {fiveatlPlans.map((plan) => {
            return <Plan plan={plan} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Plans