import React from 'react';
import { ListContext } from './List';
import { useNavigate } from 'react-router-dom';

const ListEl = ({ data, dontShow, i, setData }) => {
  const Ctx = React.useContext(ListContext);
  const inputRef = React.useRef();
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    if (inputRef.current.checked) {
      Ctx.setSelectedIds(prev => [...prev, data.id]);
    } else {
      Ctx.setSelectedIds(prev => prev.filter(val => val !== data.id));
    }
  }
  const handleDblClick = () => {
    if (inputRef.current.checked) {
      Ctx.setSelectedIds(prev => [...prev, data.id]);
      inputRef.current.click();
    } else {
      Ctx.setSelectedIds(prev => prev.filter(val => val !== data.id))
      inputRef.current.click();
    }
  }

  return (
    <tr className={`ListEl ${Ctx.selectedIds.includes(data.id) ? 'checked' : null}`} onDoubleClick={handleDblClick}>
      <td>{i + 1}</td>
      <td><input checked={Ctx.selectedIds.includes(data.id) ? true : false} ref={inputRef} onChange={handleCheckboxChange} type="checkbox" name="table-checkbox" /></td>
      {Object.keys(data).map((key, i) => dontShow.includes(key) || <td key={i}>{`${data[key]}`}</td>)}
      <td className='actions'>
        {Ctx?.actionButtons?.map((el, i) => (
            <button title={el.title} key={i} onClick={() => el.onClick(data.id)}><i className={el.boxIcon}></i></button>
        ))}
        <button title='Historia zamówień' className='edit-btn' onClick={() => navigate(`/admin-panel/users/${data.id}/order-list/`)}><i className='bx bx-history'></i></button>
        <button title='Ddytuj' className='edit-btn' onClick={() => navigate(`edit/${data.id}`)}><i className='bx bxs-edit'></i></button>
        <button title='Usuń' className='del-btn' onClick={() => { Ctx.deleteElFunc(data.id, Ctx.accessToken); Ctx.setCounter(Ctx.counter+1) }}><i className='bx bx-trash-alt' ></i></button>
      </td>
    </tr>
  )
}

export default ListEl;