import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className='NavBar'>
        <div className="logo">LOGO</div>
        <div className="links">
            <Link to='/'>
                Główna
            </Link>
            <Link to='/order'>
                Zamów jedzenie
            </Link>
            <Link to='/admin-panel'>
                Panel admina
            </Link>
        </div>
        <hr className='zniknij to później' />
    </div>
  )
}

export default NavBar;