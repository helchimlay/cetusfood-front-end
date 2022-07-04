import React from 'react';

const RestListEl = ({ data, i }) => {
  return (
    <tr className='RestListEl'>
        <td>{i}.</td>
        <td><input type="checkbox" name="checkbox-el-checker" /></td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td><a href={`https://${data.url}`}>{data.url}</a></td>
        <td><button className='edit-btn'><i className='bx bxs-edit'></i></button></td>
        <td><button className='del-btn'><i className='bx bx-trash-alt' ></i></button></td>
    </tr>
  )
}

export default RestListEl;