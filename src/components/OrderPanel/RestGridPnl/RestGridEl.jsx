import React from 'react';
import { OrderPnlCtx } from '../OrderPanel';

const RestGridEl = ({ data }) => {
    const Ctx = React.useContext(OrderPnlCtx);
    const elId = React.useId();

    const handleRadioChange = () => {
      Ctx.setFormData({ restId: data.id, products: [] });
    }
  return (
    <label className='RestGridEl' htmlFor={elId}>
        <input type="radio" name={'rest-list-radio'} id={elId} checked={Ctx?.formData?.restId===data.id} onChange={handleRadioChange} />
        <span>
            <span className="name"><span>{data.name}</span></span>
            <span className="img-container">
                <span className="img" style={{backgroundImage: `url(${data.logoUrl})`}}></span>
            </span>
        </span>
    </label>
  )
}

export default RestGridEl;