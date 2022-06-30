import React from 'react';

const RestListEl = ({ name, link, email }) => {
  return (
    <tr className='RestListEl'>
        <td>{name}</td>
        <td><a href={`https://${link}`}>{link}</a></td>
        <td>{email}</td>
    </tr>
  )
}

export default RestListEl;