import React from 'react';
import './MealInputPnl.css';
import { OrderPnlCtx } from '../OrderPanel';

const MealInputPnl = () => {
    const Ctx = React.useContext(OrderPnlCtx);
    const inputRef = React.useRef();

    const handleBtnClick = () => {
        if(inputRef.current.value !== ''){
            Ctx.setFormData({ ...Ctx.formData, products: [ ...Ctx.formData.products, [inputRef.current.value, Math.random()] ] });
        }
        inputRef.current.value = '';
    }

  return (
    <div className='MealInputPnl'>
        {Ctx.formData.restId ? (<>
            <label htmlFor="i-text">Napisz co chcesz zamówić?
                <a target='_blank' rel="noreferrer" href={`https://${Ctx.restList.filter(v => v.id===Ctx?.formData?.restId)[0].url}`}>Link do strony <span>{Ctx.restList.filter(v => v.id===Ctx?.formData?.restId)[0].name}</span></a>
            </label>
            <div>
                <input ref={inputRef} onKeyDown={e => e.key==='Enter' && handleBtnClick()} type="text" id='i-text' placeholder='Wpisz tutaj...' autoComplete='off'/>
                <button type='button' onClick={handleBtnClick}><i className='bx bx-plus'></i></button>
            </div>
            <div className="list">
                {Ctx.formData.products.map((el, i) => (
                    <p key={i}><span>{i+1}. {el[0]}</span><button type='button' onClick={() => Ctx.setFormData({ ...Ctx.formData, products: [ ...Ctx.formData.products.filter(v => v[1]!==el[1]) ] })}><i className='bx bx-trash-alt'></i></button></p>
                ))}
                {!Ctx.formData.products[0] && <h4>Brak elementów</h4>}
            </div>
        </>) : <h4>Nie wybrano restauracji</h4>}
        
    </div>
  )
}

export default MealInputPnl;