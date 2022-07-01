import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
const handleClick2 = () => {
 console.log('adam')
}
const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className="logo" onClick={handleClick2}>CetusFood </div>
        {/* <input type="checkbox" id="menu-toggle"/>
        <label id="trigger" htmlFor="menu-toggle"></label>
        <label id="burger" htmlFor="menu-toggle"></label> */}
        <div className="links" id='link'>
            <Link to='/'>Główna</Link>
            <Link to='/order'>Zamów jedzenie</Link>
            <Link to='/log-in'>Zaloguj się</Link>
            <Link to='/admin-panel'>Panel administratora</Link>
            
        </div>
    </div>
  )
}

export default NavBar;