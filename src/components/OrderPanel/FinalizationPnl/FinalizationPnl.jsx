import React from 'react';
import './FinalizationPnl.scss';
import { OrderPnlCtx } from '../OrderPanel';
import { addOrder } from '../../../services/RestaurationsList';
import { GlobalCtx } from '../../../App';

const FinalizationPnl = () => {
    const Ctx = React.useContext(OrderPnlCtx);
    const { user } = React.useContext(GlobalCtx);

    const order = () => {
        let restId = Ctx.formData.restId;
        let content = [];
        Ctx.formData.products.forEach(el => content.push(el[0]));
        content = content.join('|');
        console.log({ restId, content })
        addOrder(restId, content, user.accessToken);
    }

  return (
    <div className='FinalizationPnl'>
        <div>
            <h4></h4>
        </div>
        <div>
            <button type='button' onClick={order}>Potwierdź zamówienie</button>
        </div>
    </div>
  )
}

export default FinalizationPnl;