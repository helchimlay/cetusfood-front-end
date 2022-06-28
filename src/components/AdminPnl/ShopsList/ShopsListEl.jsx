import React from 'react';

const ShopsListEl = ({ name, link, email }) => {
  return (
    <div className='ShopsListEl' style={{borderTop: '1px solid black'}}>
        <p>Nazwa: {name ? name : 'error'}</p>
        <p>Email: {email ? email : 'error'}</p>
        <p>Link do strony: {link ? link : 'error'}</p>
    </div>
  )
}

export default ShopsListEl;