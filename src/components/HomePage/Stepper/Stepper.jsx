import React from "react";
import "./Stepper.scss";

const Stepper = ({ items }) => {
  return (
    <div className="Stepper">
      {/* <hr className="line" ></hr> */}
      <div className="step">
        {items.map((el, i) => (
          <div key={i} className='step-cont'>
            <p className='circle'>{el.num}</p>
            <p className='heading'>{el.heading}:
             <p className='desc'>{el.description}</p>
            </p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
