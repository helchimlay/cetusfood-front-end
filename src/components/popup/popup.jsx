import React from 'react'
import './popup.css';
        const open = document.getElementById('open');
        const modal_container = document.getElementById('modal_container');
        const close = document.getElementById('close');

        open.addEventListener('click',() => {
            modal_container.classList.add('show');
        })
        close.addEventListener('click',() => {
            modal_container.classList.remove('show');
        })
const popup = () => {
  return (
    <div className='Popup'>
         <button id="open">Click me please</button>
            <div className="modal-container" id="modal_container">
          <div className="modal">
            <h1>Modal are :)</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi, voluptate nobis quam suscipit ipsum ratione labore nesciunt. Sed nemo quia, amet iste magni alias magnam at porro nam consequatur!</p>
            <div>
                <button id="close">Close</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default popup