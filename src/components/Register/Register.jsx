import React from 'react';
import './Register.css';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const [formData, setFormData] = React.useState({});
  const emailId = React.useId();
  const passwId = React.useId();
  const passwId2 = React.useId();

  const updateFormData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className='Register'>
      <Helmet>
        <title>CetusFood | Rejestracja</title>
      </Helmet>

      <h3 className="title">Stwórz nowe konto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={emailId}>Email: </label>
          <input onChange={updateFormData} type="email" name="email" id={emailId} />
        </div>
        <div>
          <label htmlFor={passwId}>Hasło: </label>
          <input onChange={updateFormData} type="password" name="password" id={passwId} />
        </div>
        <div>
          <label htmlFor={passwId2}>Hasło: </label>
          <input onChange={updateFormData} type="password" name="password2" id={passwId2} />
        </div>
        <div>
          <button type="submit">Stwórz konto</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
