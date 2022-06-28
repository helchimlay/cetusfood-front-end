import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
        <div className="mobile-app">
            <p>Download CetusFood app</p>
            <i className='bx bxl-apple'></i>
            <i className='bx bxl-play-store'></i>
        </div>
        <div className="boxes">
            <ul>
                <li>Company</li>
                <li>About us</li>
                <li>Clients</li>
                <li>Services</li>
                <li>Technologies</li>
                <li>Career</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="boxes">
            <ul>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Terms of Use</li>
            </ul>
        </div>
        <div className="contact-box">
            <form action="">
                <legend>Contact Us!</legend>
                <input type="text" name="Name" id="Name" placeholder="Name"/>
                <input type="email" name="Email" id="UserEmail" placeholder="Email"/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    </footer>
  )
}

export default Footer