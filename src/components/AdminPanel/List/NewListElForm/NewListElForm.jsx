import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewListElForm.css';

const NewListElForm = ({ inputs, sendingFunc, linkTo }) => {
    const navigate = useNavigate();

    const handleSubmit = e => {
        let values = {};
        inputs.forEach(el => {
            values = { ...values, [el.name]: e.target.elements[el.name].value };
        })
        sendingFunc(values);
        e.preventDefault();
        navigate(linkTo);
    }

  return (
    <div className='NewListElForm'>
        {inputs[0] && (
            <form onSubmit={handleSubmit}>
                {inputs.map((el, i) => (
                    <p key={i}>
                        <label htmlFor={el.id}>{el.label}</label>
                        <input type={el.type} name={el.name} id={el.id} placeholder={el.placeholder} required={true} />
                    </p>
                ))}
                <div>
                    <button onClick={() => navigate(linkTo)}>Anuluj</button>
                    <button type='submit'>Zatwierdź</button>
                </div>
            </form>
        )}
    </div>
  )
}

export default NewListElForm;