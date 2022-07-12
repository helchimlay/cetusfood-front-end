import React from 'react';
import './Login.css';
import { Helmet } from 'react-helmet-async';
import { NavLink, useNavigate } from 'react-router-dom';
import { logInUser } from '../../services/Auth';
import { GlobalCtx } from '../../App';

const LogIn = () => {
    const { user, setUser } = React.useContext(GlobalCtx);
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({});
    const emailId = React.useId();
    const passwId = React.useId();

    const updateFormData = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        logInUser(formData.email, formData.password).then(res => setUser(prev => ({ ...prev, accessToken: res.data })));
        navigate('/');
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
                    <p>Nie masz jeszcze konta? <NavLink to='/register'>Załóż nowe konto</NavLink></p>
                </div>
            </form>
        </div>
    )
}

export default LogIn;
