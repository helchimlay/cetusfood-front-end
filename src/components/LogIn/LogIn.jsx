import React from 'react';
import './Login.css';
import { Helmet } from 'react-helmet-async';

const LogIn = () => {
  const [formData, setFormData] = React.useState({});
  const emailId = React.useId();
  const passwId = React.useId();

  const updateFormData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className='LogIn'>
      <Helmet>
        <title>CetusFood | Logowanie</title>
      </Helmet>

      <h3 className="title">Zaloguj się na swoje konto</h3>
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
          <button type="submit">Zaloguj się</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn;
