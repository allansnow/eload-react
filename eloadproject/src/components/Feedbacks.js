import React from 'react'
import { feedbacks } from '../data';
import Feedback from './Feedback';

const Feedbacks = () => {
  return (
    <section className="seventh-section-container">
      <h2 className="seventh-section-h2">
        Veja a opinião de alguns profissionais que já{' '}
        <span>utilizam o eLoad:</span>
      </h2>
      <div className="testimonials-container">
      {feedbacks.map((feedback)=> {
      return <Feedback feedback={feedback} />
      })}
      </div>
    </section>
  );
}

export default Feedbacks