import React from 'react';
import './NewRestForm.css';
import { RestListCtx } from './RestList';
import { addRestaurant } from '../../services/RestaurationsList';

const NewRestForm = () => {
  const Ctx = React.useContext(RestListCtx);
  const handleSubmit = (e)=>{
    addRestaurant(Ctx.newRestFormData);
    e.preventDefault();
  }
  const hendleInputChange = (e)=>{
    Ctx.setNewRestFormData({...Ctx.newRestFormData, [e.target.name]: e.target.value});
  }

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
          <label htmlFor="url">Link do strony: </label>
          <input onChange={hendleInputChange} type="text" name="url" id="url" placeholder='np. link.com' />
        </p>
        <p><button type='submit'>Zatwierdź</button></p>
      </form>
    </div>
  )
}

export default NewRestForm;