import React from 'react';
import ShopsList from './ShopsList/ShopsList';

const AdminPnl = () => {
  return (
    <div className='AdminPnl'>
      <h3>Panel admina</h3>
      <div className="shops-list">
        <ShopsList />
      </div>
    </div>
  )
}

export default AdminPnl;