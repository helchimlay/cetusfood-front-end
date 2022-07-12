import React from 'react';
import '../LogIn/Login.css';
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
      <div className='center'>
      <header>
        <h3 className="title">Stwórz nowe konto</h3>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={updateFormData} type="email" name="email" required placeholder='Nazwa użytkownika' id={emailId} />
        </div>
        <div>
          <input onChange={updateFormData} type="password" name="password" required placeholder='Hasło' id={passwId} />
        </div>
        <div>
          <input onChange={updateFormData} type="password" name="password2" required placeholder='Hasło' id={passwId2} />
        </div>
        <div>
          <button type="submit">Stwórz konto</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register;
