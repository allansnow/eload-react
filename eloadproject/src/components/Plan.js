import React from 'react'

const Plan = (props) => {
    const {
      atletas,
      plantype,
      discount,
      portions,
      price,
      perAtlhete,
      classe,
      hrclass,
      buttonClass,
    } = props.plan;
  return (
    <div className={classe}>
      <h3>
        Plano {plantype}<br></br>{atletas} Atletas
      </h3>
      <p className="plan-item-p-discount">
        (<span>{discount}%</span> de desconto)
      </p>
      <p className="plan-item-p-parcels">{portions}</p>
      <h2 className="plan-item-h2-price">
        <span>R$</span>{price}<span>,90</span>
      </h2>
      <p className="plan-item-price-per-atlhete">Apenas {perAtlhete}/Atleta</p>
      <hr className={hrclass}></hr>
      <button className={buttonClass}>EXPERIMENTE AGORA</button>
    </div>
  );
}

export default Plan