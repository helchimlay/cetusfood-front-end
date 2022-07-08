import React from 'react'
import './popup.css';
const Popup = () => {
  return (
    <div className='Popup'>
          <div className="modal_container" id="modal_container"  >
          <div className="modal">
            <input type="text" name="" id="" placeholder='Napisz zamówienie' />
            <div className='button potwierdz'>Zatwierdz</div>
            <div>
               <div className='button zamknij'>Zamknij</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Popup