import React from 'react';
import { OrderPnlCtx } from '../OrderPanel';

import XdImg from './mc.png';

const RestGridEl = ({ data }) => {
    const Ctx = React.useContext(OrderPnlCtx);
    const elId = React.useId();

  return (
    <label className='RestGridEl' htmlFor={elId}>
        <input type="radio" name={'rest-list-radio'} id={elId} checked={Ctx?.formData?.restId===data.id} onChange={() => Ctx.setFormData({ restId: data.id, products: [] })} />
        <span>
            <span className="name"><span>{data.name}</span></span>
            <span className="img" style={{backgroundImage: `url(${XdImg})`}}></span>
        </span>
    </label>
  )
}

export default RestGridEl