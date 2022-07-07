import React from 'react';
import './MealInputPnl.css';
import { OrderPnlCtx } from '../OrderPanel';

const MealInputPnl = () => {
    const Ctx = React.useContext(OrderPnlCtx);
    const inputRef = React.useRef();

  return (
    <div className='MealInputPnl'>
        <label htmlFor="i-text">Napisz co chcesz zamówić?
                {Ctx.formData.restId ? <a target='_blank' href={`https://${Ctx.restList.filter(v => v.id===Ctx?.formData?.restId)[0].url}`}>Link do strony <span>{Ctx.restList.filter(v => v.id===Ctx?.formData?.restId)[0].name}</span></a> : <span>Nie wybrano restauracji</span>}
        </label>
        <div>
            <input ref={inputRef} type="text" id='i-text' placeholder='Wpisz tutaj...' />
            <button type='buttom'><i className='bx bx-plus'></i></button>
        </div>
    </div>
  )
}

export default MealInputPnl;