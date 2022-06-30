import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className="links">
            <Link to='/'>Główna</Link>
            <Link to='/order'>Zamów jedzenie</Link>
            <Link to='/log-in'>Zaloguj się</Link>
            <Link to='/admin-panel'>Panel administratora</Link>
            <div className="dot"></div>
        </div>
    </div>
  )
}

export default NavBar;