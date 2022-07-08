import React from 'react';
import './Stepper.css';

const Stepper = () => {
    return(
        <div className="Stepper">
            
            <div className="line"></div>
<div className='step'>
    
    <div className="one">
    <p className="circle">1</p>
    <p className="jeden">01.Krok pierwszy:<br/>
    Otrzymujesz na  Mail wiadomość<br/>
    z proźbą o złożenie zamówienia </p>
</div>

<div className="two">
    <p className="circlee">2</p>
        <p className="dwa">02.Krok drugi:<br/>
            Wybierasz na aplikacji<br/>
            co chcesz zamówić</p>
</div>

<div className="three">
    <p className="circleee">3</p>
        <p className="trzy">03.Krok trzeci:<br/>
            Zamawiamy Ci co chcesz!</p>

</div>
</div>


        </div>
    )
}

export default Stepper;