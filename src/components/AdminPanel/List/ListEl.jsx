import React from 'react';
import { ListContext } from './List';

const ListEl = ({ data, dontShow, i, setData }) => {
    const Ctx = React.useContext(ListContext);
    const inputRef = React.useRef();

    const handleCheckboxChange = () => {
        if(inputRef.current.checked){
            Ctx.setSelectedIds(prev => [...prev, data.id]);
        }else{
            Ctx.setSelectedIds(prev => prev.filter(val => val !== data.id));
        }
    }
    const handleDblClick = () => {
        if(inputRef.current.checked){
            Ctx.setSelectedIds(prev => [...prev, data.id]);
            inputRef.current.click();
        }else{
            Ctx.setSelectedIds(prev => prev.filter(val => val !== data.id))
            inputRef.current.click();
        }
    }

  return (
    <tr className={`ListEl ${Ctx.selectedIds.includes(data.id) ? 'checked' : null}`} onDoubleClick={handleDblClick}>
        <td>{i+1}</td>
        <td><input checked={Ctx.selectedIds.includes(data.id) ? true : false} ref={inputRef} onChange={handleCheckboxChange} type="checkbox" name="table-checkbox" /></td>
        {Object.keys(data).map((key, i) => dontShow.includes(key) || <td key={i}>{data[key]}</td>)}
        <td className='actions'>
            <button className='edit-btn'><i className='bx bxs-edit'></i></button>
            <button className='del-btn' onClick={() => {Ctx.deleteElFunc(data.id)}}><i className='bx bx-trash-alt' ></i></button>
        </td>
    </tr>
  )
}

export default ListEl;