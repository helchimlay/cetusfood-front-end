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
    <div className="center">
      <header>
        <h3 className="title">Zaloguj się</h3>
        <p className='title_1'>zaloguj się, używając swojej nazwy użytkownika i hasła</p>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={updateFormData} type="email" name="email" placeholder="Nazwa użytkownika" required id={emailId} />
        </div>
        <div>
          <input onChange={updateFormData} type="password" name="password" placeholder="Hasło" required id={passwId} />
        </div>
        <div>
          <button type="submit">Zaloguj się</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default LogIn;
