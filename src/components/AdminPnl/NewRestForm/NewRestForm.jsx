import React, { useState } from 'react';

const NewRestForm = (props) => {
    const [formData, setFormData] = useState({});

    const handleSumbit = e=>{
        e.preventDefault();
        // wysyłamy formData
    }
    const handleInputChange = e=>{
        let val = e.target.value;
        let name = e.target.name;
        setFormData({...formData, [name]: val});
    }

  return (
    <div className='NewRestForm' style={{borderTop: '1px solid black'}}>
        <form onSubmit={handleSumbit}>
            <h4>Dodaj nową restaurację</h4>
            <div>
                <p>
                    <label htmlFor="name">Nazwa</label>
                    <input type="text" id="name" name='name' onChange={handleInputChange} />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type='email' id="email" name='email' onChange={handleInputChange} />
                </p>
                <p>
                    <label htmlFor="linkto">Link</label>
                    <input type="text" id="linkto" name='linkto' onChange={handleInputChange} />
                </p>
            </div>

            <div>  
                <button onClick={e=>{props.setNewRestFormOpened(false); e.preventDefault();}}>Anuluj</button>
                <button type='submit'>Zatwierdź</button>
            </div>
        </form>
        
    </div>
  )
}

export default NewRestForm;