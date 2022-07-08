'use strict';
import React from 'react';
import './Login.css';
import log from './log.svg';
import reg from './register.svg';
import { Helmet } from 'react-helmet-async';

const LogIn = () => {
  const handleClick2 = () => {
    document.querySelector(".container").classList.add("sign-up-mode");
  }
  const handleClick1 = () => {
    console.log('adma jest najlepszy')
    document.querySelector(".container").classList.remove("sign-up-mode");
  }
  return (
    <div className='LogIn'>
      <Helmet>
        <title>CetusFood | Logowanie</title>
      </Helmet>
       <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Zaloguj się</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Nazwa użytkownika" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Hasło" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Lub Zaloguj się za pomocą platform społecznościowych</p>
            <div class="social-media">
              <a href="#" class="social-icon">
              <i class='bx bxl-facebook-circle'></i>
              </a>
              <a href="#" class="social-icon">
              <i class='bx bxl-twitter'></i>
              </a>
              <a href="#" class="social-icon">
               <i class='bx bxl-google' ></i>
              </a>
              <a href="#" class="social-icon">
               <i class='bx bxl-linkedin-square' ></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Zarejestruj się</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Nazwa użytkownika" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Hasło" />
            </div>
            <input type="submit" class="btn" value="Zarejestruj się" />
            <p class="social-text">Lub zarejestruj się na platformach społecznościowych</p>
            <div class="social-media">
              <a href="#" class="social-icon">
              <i class='bx bxl-facebook-circle'></i>
              </a>
              <a href="#" class="social-icon">
              <i class='bx bxl-facebook-circle'></i>
              </a>
              <a href="#" class="social-icon">
              <i class='bx bxl-facebook-circle'></i>
              </a>
              <a href="#" class="social-icon">
              <i class='bx bxl-facebook-circle'></i>
              </a>
            </div>
          </form>
        </div>
      </div>
            <script src='1.js'></script>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Jesteś nowy?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={handleClick2}>
              Zarejestruj się
            </button>
          </div>
          <img src={log} class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>Zaloguj się</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn" onClick={handleClick1}>
              Zaluguj się
            </button>
          </div>
          <img src={reg} class="image" alt="dsadsa" />
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default LogIn;
