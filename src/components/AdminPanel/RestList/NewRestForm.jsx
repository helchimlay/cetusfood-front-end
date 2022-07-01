import React from 'react';
import './NewRestForm.css';
import { RestListCtx } from './RestList';

const NewRestForm = () => {
  const Ctx = React.useContext(RestListCtx);
  const handleSubmit = (e)=>{


    e.preventDefault();
  }
  const hendleInputChange = (e)=>{
    Ctx.setNewRestFormData({...Ctx.newRestFormData, [e.target.name]: e.target.value});
  }
  console.log(Ctx.newRestFormData)

  return (
    <div className='NewRestForm'>
      <h3>Dodaj nową restaurację</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Nazwa: </label>
          <input onChange={hendleInputChange} type="text" name="name" id="name" placeholder='np. Super Pizza' />
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input onChange={hendleInputChange} type="email" name="email" id="email" placeholder='np. x@example.com' />
        </p>
        <p>
          <label htmlFor="link">Link do strony: </label>
          <input onChange={hendleInputChange} type="text" name="link" id="link" placeholder='np. link.com' />
        </p>
      </form>
    </div>
  )
}

export default NewRestForm;