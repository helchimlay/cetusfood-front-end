import React from 'react';
import { RestListCtx } from './RestList';

const RestListEl = ({ data, i }) => {
    const Ctx = React.useContext(RestListCtx);
    const checkboxRef = React.useRef();

    const handleCheckboxChange = ()=>{
        if(checkboxRef.current.checked){
            Ctx.setSelectedIds(prev => [...prev, data.id]);
        }else{
            Ctx.setSelectedIds(prev => prev.filter(val=>{
                return val !== data.id
            }))
        }
    }
    const handleElDblClick = ()=>{
        if(checkboxRef.current.checked){
            Ctx.setSelectedIds(prev => [...prev, data.id]);
            checkboxRef.current.click();
        }else{
            Ctx.setSelectedIds(prev => prev.filter(val=>{
                return val !== data.id
            }))
            checkboxRef.current.click();
        }
    }

    return (
    <tr className={`RestListEl ${Ctx.selectedIds.includes(data.id)?'checked':null}`} onDoubleClick={handleElDblClick}>
        <td>{i}.</td>
        <td><input ref={checkboxRef} checked={Ctx.selectedIds.includes(data.id)} type="checkbox" name="checkbox-el-checker" onChange={handleCheckboxChange} /></td>
        <td>{data.name}</td>
        <td><a href={`mailto:${data.email}`}>{data.email}</a></td>
        <td><a target='_blank' rel='noreferrer' href={`https://${data.url}`}>{data.url}</a></td>
        <td><button className='edit-btn'><i className='bx bxs-edit'></i></button></td>
        <td><button className='del-btn'><i className='bx bx-trash-alt' ></i></button></td>
    </tr>
  )
}

export default RestListEl;