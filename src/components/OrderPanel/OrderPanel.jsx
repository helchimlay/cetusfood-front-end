import React from 'react';
import './project.css';
import './Footer-copy.css';
import Order from './Order.jsx';
import { Helmet } from 'react-helmet-async';

const OrderPanel = () => {
  // {document.title = "CetusFood | Zamów jedzenie"}
     const handleClick2 = () => {
     document.querySelector(".submit").classList.add('sign-up-mode');
  }
    const handleClick1 = () => {
    console.log('adma jest najlepszy')
    document.querySelector(".submit").classList.remove("sign-up-mode");
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
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default OrderPanel;