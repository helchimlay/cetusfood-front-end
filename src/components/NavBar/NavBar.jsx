import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
const NavBar = () => {
  const handleClick = () => {
    console.log('adma jest najlepszy')
    document.getElementById('ada').style.backgroundColor="red";
  }
  return (
    <div className='NavBar'>
        <div className="links">
            <Link to='/'>Główna <div className="dot"></div></Link>
            <Link to='/order'>Zamów jedzenie <div className="dot"></div></Link>
            <Link to='/log-in'>Zaloguj się <div className="dot"></div></Link>
            <Link id='ada'to='/admin-panel'>Panel administratora <div className="dot"></div></Link>
        </div>
        <button onClick={handleClick}>adam</button>
    </div>
  )
}

export default NavBar;