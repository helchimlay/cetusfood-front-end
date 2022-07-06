import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import cetusik from '../../images/cetusFood2.png';

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className="logo"><img src={cetusik} alt="cetusik" /><h3>Cetus<span>Food</span></h3></div>
        <input type="checkbox" id="menu-toggle"/>
        <label id="trigger" htmlFor="menu-toggle"></label>
        <label id="burger" htmlFor="menu-toggle"></label>
        <div className="links">
<<<<<<< HEAD
            <Link to='/'>Główna</Link>
            <Link to='/order'>Zamów jedzenie</Link>
            <Link to='/log-in'>Zaloguj się</Link>
            <Link to='/admin-panel'>Panel administratora</Link>
        </div> 
=======
            <NavLink className={({isActive}) => isActive ? 'active' : null} to='/'>Główna</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : null} to='/order'>Zamów jedzenie</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : null} to='/log-in'>Zaloguj się</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : null} to='/admin-panel'>Panel administratora</NavLink>
        </div>
>>>>>>> 4894627ec8ce3530a2e2664d2cf66495b56ee72f
    </div>
  )
} 
export default NavBar;