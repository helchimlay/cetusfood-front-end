import React from "react";
import "./HomePage.scss";
import cetusek from "../../images/CetusFoodNapisDown.png";
import cetKurier from "../../images/CetusikKurier.png";
import { Helmet } from "react-helmet-async";
import Stepper from "./Stepper/Stepper";



const HomePage = () => {
  // {document.title = "CetusFood | Strona główna"}
  const stepperData = [
    {
      num: 1,
      heading: "01.Krok pierwszy",
      description:
        "Otrzymujesz na  Mail wiadomość z proźbą o złożenie zamówienia ",
    },
    {
      num: 2,
      heading: "02.Krok drugi",
      description: "Wybierasz na aplikacji co chcesz zamówić",
    },
    {
      num: 3,
      heading: "03.Krok trzeci",
      description: "Zamawiamy Ci co chcesz!",
    },
  ];
  return (
    <div className="HomePage">
      <Helmet>
        <title>CetusFood | Strona główna</title>
      </Helmet>
      <section>
        <div className="aboutUs">
          <div className="cetusek">
            <img src={cetusek} alt="cetusek" />
          </div>
          <div className="graybox about-us">
            <h2>O Aplikacji</h2>
            <p>
              Nasza dynamicznie rozwijająca się aplikacja Cetusfood, pomoże Ci
              złożyć zamówienie jedzenia dla całej firmy. Aplikacja została
              stworzona przez stażystów z Zespołu Szkół Technicznych. Naszym
              celem było stworzenie aplikacji, która ma za zadanie usprawnić
              funkcjonowanie pracy w firmie.
            </p>
          </div>
        </div>
        <hr />
        <div className="offer">
          <div className="graybox whatOffer">
            <h2>Co oferujemy?</h2>
            <p>
              Dostarczamy zamówienia z najlepszych restauracji i barów. W naszej
              ofercie są produkty z m.in.: McDonald's, KFC, Burger King, Subway,
              Pizza Hut, Starbucks i wiele więcej...
            </p>
          </div>
          <div className="cetKurier">
            <img src={cetKurier} alt="cetKurier" />
          </div>
        </div>
        <hr />
        <h2 className="how">Jak to działa?</h2>
        <Stepper items={stepperData} />
      </section>
    </div>
  );
};

export default HomePage;
