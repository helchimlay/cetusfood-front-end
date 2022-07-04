import React from 'react';
import { RestListCtx } from './RestList';

const RestListEl = ({ data, i }) => {
    const Ctx = React.useContext(RestListCtx);
    const checkboxRef = React.useRef();

    const handleCheckboxChange = e=>{
        if(e.target.checked){
            Ctx.setSelectedIds(prev => [...prev, data.id]);
        }else{
            Ctx.setSelectedIds(prev => prev.filter((val, i, arr)=>{
                return val !== data.id
            }))
        }
    }

    return (
    <tr className='RestListEl'>
        <td>{i}.</td>
        <td><input ref={checkboxRef} checked={Ctx.selectedIds.includes(data.id)} type="checkbox" name="checkbox-el-checker" onChange={handleCheckboxChange} /></td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td><a target='_blank' rel='xd' href={`https://${data.url}`}>{data.url}</a></td>
        <td><button className='edit-btn'><i className='bx bxs-edit'></i></button></td>
        <td><button className='del-btn'><i className='bx bx-trash-alt' ></i></button></td>
    </tr>
  )
}

export default RestListEl;