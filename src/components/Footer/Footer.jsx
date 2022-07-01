import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-left">

<h3>Cetus<span>Food</span></h3>

<p className="footer-links">
  <a href="#">Home</a>
  ·
  <a href="#">Blog</a>
  ·
  <a href="#">Pricing</a>
  ·
  <a href="#">About</a>
  ·
  <a href="#">Faq</a>
  ·
  <a href="#">Contact</a>
</p>

<p className="footer-company-name">CetusFood &copy; 2022</p>
</div>

<div className="footer-center">

<div>
  <i className="fa fa-map-marker"></i>
  <p><span>Rzeszów </span> PL(Poland)</p>
</div>

<div>
  <i className="fa fa-phone"></i>
  <p>+48 886 668 544</p>
</div>

<div>
  <i className="fa fa-envelope"></i>
  <p><a href="mailto:support@company.com">fantacydesignss@gmail.com
  </a></p>
</div>

</div>

<div className="footer-right">

<p class="footer-company-about">
  <span>About the company</span>
  we are the company through which you order food.
</p>

<div className="footer-icons">

  <a href="#"><i class="fab fa-facebook-f"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-github"></i></a>

</div>

</div>

    </div>
  )
}

export default Footer;