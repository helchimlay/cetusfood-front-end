import React from "react";
import "./Stepper.scss";

const Stepper = ({ items }) => {
  return (
    <div className="Stepper">
      <div className="line" ></div>
      <div className="step">
        {items.map((el, i) => (
          <div key={i} className='step-cont'>
            <p className='circle'>{el.num}</p>
            <p className='heading'>{el.heading}:</p>
            <p className='desc'>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
