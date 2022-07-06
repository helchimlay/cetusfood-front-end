import React from "react";
import "./popup.css";

const Popup = ({ show }) => {
  const closeModal = () => {
    document.getElementById("modal_container").classList.remove("show");
  };

  return (
    <>
      <div
        className={`modal_container${show ? " show" : ""}`}
        id="modal_container"
      >
        <div className="modal">
          <h1>Modal are:</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis sequi, voluptate nobis quam suscipit ipsum ratione
            labore nesciunt. Sed nemo quia, amet iste magni alias magnam at
            porro nam consequatur!
          </p>
          <div>
            <button id="close" className="button" onClick={closeModal}>
              Cslose
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
