import React from 'react';

const LogInForm = () => {
  const [formData, setFormData] = React.useState({});

  const handleSubmit = e => {
    e.preventDefault();
    
  }
  const updateFormData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  console.log(formData);

  return (
    <form className='LogInForm' onSubmit={handleSubmit}>
      <h3 className="title">Zaloguj się</h3>
      <div>
        <label htmlFor="email-l">Email: </label>
        <input onChange={updateFormData} type="email" name="email" id="email-l" placeholder='email' required />
      </div>
      <div>
        <label htmlFor="password-l">Hasło: </label>
        <input onChange={updateFormData} type="password" name="password" id="password-l" placeholder='hasło' required />
      </div>
      <div>
        <button type="submit">Zaloguj się</button>
      </div>
    </form>
  )
}

export default LogInForm;