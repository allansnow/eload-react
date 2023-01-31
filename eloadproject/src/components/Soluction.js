import React from 'react'

const Soluction = (props) => {
    const {img, title, text} = props.soluction;
  return (
    <div className="flex-box-item">
      <img
        src= {img}
        alt=""
        className="flex-box-img"
      />
      <h3 className="flex-box-h3">{title.toUpperCase()}</h3>
      <p className="flex-box-body">
        {text}
      </p>
    </div>
  );
}

export default Soluction