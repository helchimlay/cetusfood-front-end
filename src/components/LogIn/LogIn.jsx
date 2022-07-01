'use strict';
import React from 'react';
import './Login.css';
import log from './log.svg';
import reg from './register.svg';

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
       <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Sign in with social platforms</p>
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
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
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
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={handleClick2}>
              Sign up
            </button>
          </div>
          <img src={log} class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn" onClick={handleClick1}>
              Sign in
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
