import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer-left'>

<h3>Cetus<span>Food</span></h3>

<p className='footer-links'>
  <Link to='/'>Główna</Link>
  <Link to='/order'>Zamów jedzenie</Link>
  <Link to='/log-in'>Zaloguj się</Link>
</p>

<p className='footer-company-name'>CetusFood &copy; 2022</p>
</div>

<div className='footer-center'>

<div>
  <i className='fa fa-map-marker'></i>
  <p><span>Rzeszów </span> PL(Poland)</p>
</div>

<div>
  <i className='fa fa-phone'></i>
  <p>+48 886 668 544</p>
</div>

<div>
  <i className='fa fa-envelope'></i>
  <p><a href="mailto:contact@cetuspro.com">support@cetuspro.com
  </a></p>
</div>

</div>

<div className='footer-right'>

<p className='footer-company-about'>
  <span>Kim jesteśmy</span>
  jesteśmy firmą u której zamówisz swoje ulubione jedzenie
</p>

<div className='footer-icons'>

  <a href="#"><i className='bx bxl-facebook-circle'></i></a>
  <a href="#"><i className='bx bxl-twitter'></i></a>
  <a href="#"><i className='bx bxl-instagram' ></i></a>
  <a href="#"><i className='bx bxl-linkedin' ></i></a>

</div>

</div>

    </div>
  )
}

export default Footer;