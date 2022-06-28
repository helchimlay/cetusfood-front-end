import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainCtx } from '../../App';

const NavBar = (props) => {
    const Ctx = useContext(MainCtx);

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
            {Ctx.userData.admin && (
                <Link to='/admin-panel'>
                Panel admina
            </Link>
            )}
            <Link to='/log-in'>
                Zaloguj się
            </Link>
        </div>
        <hr className='zniknij to później' />
    </div>
  )
}

export default NavBar;