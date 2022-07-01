import React from 'react';
import './NewRestForm.css';

const NewRestForm = () => {
  const handleSubmit = (e)=>{


    e.preventDefault();
  }

  return (
    <div className='NewRestForm'>
      <h3>Dodaj nową restaurację</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Nazwa: </label>
          <input type="text" name="name" id="name" />
        </p>
      </form>
    </div>
  )
}

export default NewRestForm;