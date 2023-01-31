import React from 'react'
import certo from '../images/certo-icon.png'
import star from '../images/star.png';


const Feedback = (props) => {
 const {text, img, name, profission } = props.feedback
  return (
    <div className="flex-box-testimonial first-flex-box-testimonial">
      <img
        src={certo}
        alt=""
        className="flex-box-testimonial-img"
      ></img>
      <p className="flex-box-testimonial-body">
       {text}
      </p>
      <img
        src={star}
        alt=""
        className="flex-box-testimonial-star-img"
      ></img>
      <img
        src={img}
        alt=""
        className="flex-box-testimonial-pro-picture"
      ></img>
      <h3 className="seventh-section-h3">{name}</h3>
      <h4 className="seventh-section-h4">{profission}</h4>
    </div>
  );
}

export default Feedback