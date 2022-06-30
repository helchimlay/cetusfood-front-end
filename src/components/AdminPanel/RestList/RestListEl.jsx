import React from 'react';

const RestListEl = ({ name, link, email }) => {
  return (
    <div className='RestListEl'>
        <p>Nazwa: {name}</p>
        <p>Link: <a href={`https://${link}`}>{link}</a></p>
        <p>Email: {email}</p>
    </div>
  )
}

export default RestListEl;