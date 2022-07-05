import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import cetusik from '../../images/cetusFood2.png';

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className="logo"><img src={cetusik} alt="cetusik" /><h3>Cetus<span>Food</span></h3></div>
        <input type="checkbox" id="menu-toggle"/>
        <label id="trigger" for="menu-toggle"></label>
        <label id="burger" for="menu-toggle"></label>
        <div className="links">
            <Link to='/'>Główna</Link>
            <Link to='/order'>Zamów jedzenie</Link>
            <Link to='/log-in'>Zaloguj się</Link>
            <Link to='/admin-panel'>Panel administratora</Link>
        </div>
    </div>
  )
} 
export default NavBar;