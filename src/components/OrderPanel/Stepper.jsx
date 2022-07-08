import React from 'react';
import './Stepper.css';
import { OrderPnlCtx } from './OrderPanel';

const Stepper = () => {
    const Ctx = React.useContext(OrderPnlCtx);

  return (
    <div className='Stepper'>
        <div className="line"></div>
        {Ctx?.steps.map((el, i) => (
            <button key={i} onClick={() => Ctx.setStep(i)} className={Ctx?.step===i?'current':null}>
              {i===0 && (Ctx.formData.restId ? <i className='bx bx-check'></i> : <>{i+1}</>)}
              {i===1 && (Ctx.formData.products.length>0 ? <i className='bx bx-check'></i> : <>{i+1}</>)}
              {i===2 && <>{i+1}</>}
              <span>{el}</span>
              
            </button>
        ))}
    </div>
  )
}

export default Stepper;