import React from 'react';
import RestGridEl from './RestGridEl';
import { OrderPnlCtx } from '../OrderPanel';
import './RestGridPnl.css';

const RestGridPnl = () => {
  const Ctx = React.useContext(OrderPnlCtx);

  return (
    <div className='RestGridPnl'>
      {Ctx?.restList.map((el, i) => (
        <RestGridEl data={el} key={i} />
      ))}
       {Ctx?.restList.map((el, i) => (
        <RestGridEl data={el} key={i} />
      ))}
       {Ctx?.restList.map((el, i) => (
        <RestGridEl data={el} key={i} />
      ))}
    </div>
  )
}

export default RestGridPnl;