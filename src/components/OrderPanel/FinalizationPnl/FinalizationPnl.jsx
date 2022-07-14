import React from 'react';
import './FinalizationPnl.scss';
import { OrderPnlCtx } from '../OrderPanel';
import { addOrder } from '../../../services/RestaurationsList';
import { GlobalCtx } from '../../../App';
import { useNavigate } from 'react-router-dom';

const FinalizationPnl = () => {
    const Ctx = React.useContext(OrderPnlCtx);
    const { user } = React.useContext(GlobalCtx);
    const navigate = useNavigate();

    const order = () => {
        let restId = Ctx.formData.restId;
        let content = [];
        Ctx.formData.products.forEach(el => content.push(el[0]));
        content = content.join('|');
        console.log({ restId, content })
        addOrder(restId, content, user.accessToken);
        navigate('/');
    }

  return (
    <div className='FinalizationPnl'>
        <img className='rest-logo' src={Ctx.restList.filter(v => v.id===Ctx.formData.restId)[0].logoUrl} />
        <div>
            <h4>Restauracja: <span>{Ctx.restList.filter(v => v.id===Ctx.formData.restId)[0].name}</span></h4>
            <div className='list'>
                <h5>Lista produktów: </h5>
                {Ctx.formData.products.map((el, i) => <p key={i}>{i+1}. {el[0]}</p>)}
                {!Ctx.formData.products[0] && <h4>Brak produktów</h4>}
            </div>
        <div>
            <button disabled={!Ctx.formData.products[0]} type='button' onClick={order}>Potwierdź zamówienie</button>
        </div>
        </div>
    </div>
  )
}

export default FinalizationPnl;