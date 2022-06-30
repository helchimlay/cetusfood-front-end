import React from 'react';

const RestListEl = ({ name, link, email }) => {
  return (
    <tr className='RestListEl'>
        <td>{name}</td>
        <td><a target='_blank' rel="noreferrer" href={`https://${link}`}>{link}</a></td>
        <td>{email}</td>
    </tr>
  )
}

export default RestListEl;