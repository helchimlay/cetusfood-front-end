import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { click } from '@testing-library/user-event/dist/click';
=======
import cetusik from '../../images/cetusFood2.png';

>>>>>>> 5319aa813574f416de12ee00914cec23a786a98c
const NavBar = () => {
  const handleClick = () => {
    console.log('adma jest najlepszy')
    document.getElementById('ada').style.backgroundColor="red";
  }
  return (
    <div className='NavBar'>
<<<<<<< HEAD
=======
        <div className="logo"><img src={cetusik} alt="cetusik" /><h1>CetusFood</h1></div>
>>>>>>> 5319aa813574f416de12ee00914cec23a786a98c
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