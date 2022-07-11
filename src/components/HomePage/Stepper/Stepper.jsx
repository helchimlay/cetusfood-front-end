import React from "react";
import "./Stepper.scss";

const Stepper = ({ items }) => {
  return (
    <div className="Stepper">
      {/* <div className="line" ></div> */}
      <div className="step">
        {items.map((el, i) => (
          <div className={el.circContClass}>
            <p className={el.circClass}>{el.num}</p>
            <p className={el.circHeadingClass}>{el.heading}:</p>
            <p className={el.circDescClass}>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
