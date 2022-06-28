import React, { useState } from 'react';

const OrderPnl = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  let maxStep = 4;

  const handleInputChange = e=>{
    let val = e.target.value;
    let name = e.target.name;
    setFormData({...formData, [name]: val});
  }

  console.log(step)
  console.log(formData)
  return (
    <div className='OrderPnl'>
      <div className="step-container" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <button style={{position: 'fixed', left: 0, top: '50%'}} onClick={()=>setStep(step!==0 ? step-1 : step)}>{"<-"}</button>
        <button style={{position: 'fixed', right: 0, top: '50%'}} onClick={()=>setStep(step!==maxStep ? step+1 : step)}>{'->'}</button>
        {step===0 && (
          <div className='step' style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
            Wybierz restaurację
            <select name="restaurant" size={30} onChange={handleInputChange}>
              <option value="mcdonalds">Mc. Donalds</option>
              <option value="kfc">KFC</option>
              <option value="subway">Subway</option>
            </select>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderPnl;