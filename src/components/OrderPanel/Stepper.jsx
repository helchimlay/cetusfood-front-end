import React from 'react';
import './Stepper.css';
import { OrderPnlCtx } from './OrderPanel';

const Stepper = () => {
    const Ctx = React.useContext(OrderPnlCtx);

  return (
    <div className='Stepper'>
        <div className="line"></div>
        {Ctx?.steps.map((el, i) => (
            <button key={i} onClick={() => Ctx.setStep(i)} className={Ctx?.step===i?'current':null}>{i+1}<span>{el}</span></button>
        ))}
    </div>
  )
}

export default Stepper;