import React from 'react';
import './Login.css';
import { Helmet } from 'react-helmet-async';
import LogInForm from './Forms/LogInForm';

const LogIn = () => {
  return (
    <div className='LogIn'>
      <Helmet>
        <title>CetusFood | Logowanie</title>
      </Helmet>

      <LogInForm />

      {/* <form>
        <h3 className="title">Stwórz nowe konto</h3>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" placeholder='email' />
        </div>
        <div>
          <label htmlFor="password">Hasło: </label>
          <input type="password" name="password" id="password" placeholder='haslo' />
        </div>
        <div>
          <label htmlFor="password2">Powtórz hasło: </label>
          <input type="password" name="password2" id="password2" placeholder='powtórz hasło' />
        </div>
      </form> */}


    </div>
  )
}

export default LogIn;
