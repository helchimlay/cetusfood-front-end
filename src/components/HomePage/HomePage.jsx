import React from 'react';
import './HomePage.css';
import cetusek from '../../images/CetusFoodNapisDown.png';
import cetKurier from '../../images/CetusikKurier.png';

const HomePage = () => {
  {document.title = "CetusFood | Strona główna"}
  return (
    <div className='HomePage'>
      <section>
        <div className="aboutUs">
        <div className="cetusek"><img src={cetusek} alt="cetusek" /></div>
        <div className="graybox about-us">
          <h2>O Aplikacji</h2>
          <p>Nasza dynamicznie rozwijająca się aplikacja Cetusfood, pomoże Ci
              złożyć zamówienie jedzenia dla całej firmy. Aplikacja została
              stworzona przez stażystów z Zespołu Szkół Technicznych.
              Naszym celem było stworzenie aplikacji, która ma za zadanie
              usprawnić funkcjonowanie pracy w firmie.</p>
        </div>
      </div>
      <hr />
        <div className="offer">
          <div className="graybox whatOffer">
            <h2>Co oferujemy?</h2>
            <p>Dostarczamy zamówienia z najlepszych restauracji i barów.
              W naszej ofercie są produkty z m.in.: McDonald's, KFC, Burger King, Subway, Pizza Hut, Starbucks i wiele więcej... 
            </p>
          </div>
          <div className="cetKurier"><img src={cetKurier} alt="cetKurier" /></div>
        </div>
      </section>
      
    </div>
  )
}

export default HomePage;