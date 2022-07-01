import React from 'react';
import './HomePage.css';
import cetusek from '../../images/CetusFoodNapisDown.png';

const HomePage = () => {
  return (
    <div className='HomePage'>
        <div className="cetusek"><img src={cetusek} alt="cetusek" /></div>
        <div className="about-us">
          <h2>O Aplikacji</h2>
          <p>Nasza dynamicznie rozwijająca się aplikacja Cetusfood, pomoże Ci
złożyć zamówienie jedzenia dla całej firmy. Aplikacja została
stworzona przez stażystów z Zespołu Szkół Technicznych.
Naszym celem było stworzenie aplikacji, która ma za zadanie
usprawnić funkcjonowanie pracy w firmie.</p>
        </div>
    </div>
  )
}

export default HomePage;