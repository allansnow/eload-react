import React from 'react'

const Benefit = (props) => {
  const { img, text } = props.benefits; 
  console.log(props.benefits)
  return (
    <div className="benefit-item">
          <img
            src={img}
            alt=""
          />
          <p className="benefit-item-body">
            {text}
          </p>
        </div>
      )
}

export default Benefit