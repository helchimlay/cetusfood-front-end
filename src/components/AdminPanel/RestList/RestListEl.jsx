import React from 'react';
import { RestListCtx } from './RestList';

const RestListEl = ({ id, oNum, name, link, email }) => {
  const Ctx = React.useContext(RestListCtx);
  const radioRef = React.useRef(null);

  const handleRadioChange = ()=>{
    Ctx.setSelectedElId(id);
  }
  const handleElDblClick = ()=>{
    Ctx.setSelectedElId(id);
    radioRef.current.click();
  }

  return (
    <tr className={`RestListEl ${Ctx.selectedElId===id?'selected':null}`} onDoubleClick={handleElDblClick}>
        <td className='radio'><input type="radio" name='list-item' ref={radioRef} onChange={handleRadioChange} /></td>
        <td className='o-num'>{oNum}.</td>
        <td>{name}</td>
        <td><a target='_blank' rel="noreferrer" href={`https://${link}`}>{link}</a></td>
        <td>{email}</td>
    </tr>
  )
}

export default RestListEl;