import React from 'react'
import './popup.css';
const Popup = () => {
  const handleClick1 = () => {
    // document.getElementsByClassName("modal-container").classList.add("show");
    document.querySelector(".modal-container").classList.add(".show");
    console.log("2334");
  }
  const handleClick2 = () => {
    document.querySelector(".modal-container").classList.remove(".show");
  }
  return (
    <div className='Popup'>
         <div className='button' onClick={handleClick1} id="open" >Click me please</div>
            <div className="modal-container" id="modal_container"  >
          <div className="modal">
            <h1>Modal are :</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi, voluptate nobis quam suscipit ipsum ratione labore nesciunt. Sed nemo quia, amet iste magni alias magnam at porro nam consequatur!</p>
            <div>
                <button id="close" onClick={handleClick2}>Close</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Popup