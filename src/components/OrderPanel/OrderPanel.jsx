import React from 'react';
import './project.css';
import './Footer-copy.css';
import Order from './Order.jsx';
import { Helmet } from 'react-helmet-async';
import Popup from './popup';

const OrderPanel = () => {
  // {document.title = "CetusFood | Zamów jedzenie"};
  
  conr

     const handleClick1 = () => {
      console.log('adma jest najlepszy');
     document.querySelector(".modal_container").classList.add('show');
  }
    const handleClick2 = () => {
    console.log('adma jest najlepszy')
    document.querySelector(".modal_container").classList.remove("show");
  }

  return (
    <div className='OrderPanel'>
      <Helmet>
        <title>CetusFood | Zamów jedzenie</title>
      </Helmet>
      <div className="header">
        
        <div>
          <form action="">
            <fieldset>
              <input type="text" placeholder="Wyszukaj restauracje" />
            </fieldset>
          </form> 
        </div> 

        <div>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </div>

      </div>
      <div className="mein">
        <form action="">
          <fieldset className='order-container'>
                  <Order onClick={handleClick1} />
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
          </fieldset>
        </form>
        <Popup/>
      </div>
    </div>
  )
}

export default OrderPanel;