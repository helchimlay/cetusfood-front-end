import React from 'react';
import ShopsListEl from './ShopsListEl';

const ShopsList = () => {
  return (
    <div className='ShopsList'>
        <h3><button>odświerz</button> Lista restauracji</h3>
        <ShopsListEl name='kfc' link='kfc.pl' email='email@kfc.pl' />
        <ShopsListEl name='mc donalds' link='mcdonalds.pl' email='email@mcdonalds.pl' />
    </div>
  )
}

export default ShopsList;