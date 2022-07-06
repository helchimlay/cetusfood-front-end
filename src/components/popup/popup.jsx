import React from 'react'
import './popup.css';

const popup = () => {
  const handleClick1 = () => {
    document.getElementById('modal_container').classList.add('show');
  }
  const handleClick2 = () => {
    document.getElementById('modal_container').classList.remove('show');
  }
  return (
    <div className='Popup'>
         <div id="open" className='button' onClick={handleClick1}>Click med please</div>
            <div className="modal_container" id="modal_container">
          <div className="modal">
            <h1>Modal are :)</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi, voluptate nobis quam suscipit ipsum ratione labore nesciunt. Sed nemo quia, amet iste magni alias magnam at porro nam consequatur!</p>
            <div>
                <div id="close" className='button' onClick={handleClick2}>Close</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default popup