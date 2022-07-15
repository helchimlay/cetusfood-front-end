import React from 'react';
import './FinalizationPnl.scss';
import { OrderPnlCtx } from '../OrderPanel';
import { addOrder } from '../../../services/RestaurationsList';
import { GlobalCtx } from '../../../App';
import { NavLink, useNavigate } from 'react-router-dom';

const FinalizationPnl = () => {
    const Ctx = React.useContext(OrderPnlCtx);
    const [popupOpened, setPopupOpened] = React.useState(false);
    const { user } = React.useContext(GlobalCtx);

    const order = () => {
        let restId = Ctx.formData.restId;
        let content = [];
        Ctx.formData.products.forEach(el => content.push(el[0]));
        content = content.join('|');
        setPopupOpened(true);
        addOrder(restId, content, user.accessToken);
    }

    return (
        <div className='FinalizationPnl'>
            {(Ctx.formData.products[0] && Ctx.formData.restId) ? (<>
                <div>
                    <h4>Restauracja: <span>{Ctx.restList.filter(v => v.id === Ctx.formData.restId)[0].name}</span></h4>
                    <div className='list'>
                        <h5>Lista produktów: </h5>
                        {Ctx.formData.products.map((el, i) => <p key={i}>{i + 1}. {el[0]}</p>)}
                    </div>
                    <div>
                        <button disabled={!Ctx.formData.products[0]} type='button' onClick={order}>Potwierdź zamówienie</button>
                    </div>
                    {popupOpened && (
                        <div className='courtain'>
                            <div className='popup'>
                                <h2>Cetus<span>Food</span></h2>
                                <h3>{'Dziękujemy za wybranie naszej strony :)'}</h3>
                                <h5>Twoje jedzenie przyjedzie do ciebie po 13:00</h5>
                                <div>
                                    <NavLink to='/'>Wróć do strony głównej</NavLink>    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </>) : <h4>Nie wybrano restauracji lub nie podano produktów</h4>}

        </div>
    )
}

export default FinalizationPnl;