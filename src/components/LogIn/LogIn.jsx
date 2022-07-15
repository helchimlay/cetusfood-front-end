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
    const [error, setError] = React.useState([null, 1]);
    const [loginPending, setLoginPending] = React.useState(false);

    React.useEffect(() => {
        setLoginPending(false);
    }, [user, error])

    const updateFormData = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = e => {
        setLoginPending(true);
        e.preventDefault();
        logInUser(formData.email, formData.password)
            .then(res => {
                setUser(prev => ({ ...prev, accessToken: res.data }));
                navigate('/');
            })
            .catch(err => setError([err.response.data.message, Math.random()]))
    }


    return (
        <div className='LogIn'>
            <Helmet>
                <title>CetusFood | Logowanie</title>
            </Helmet>
            <div className="center">
                <header>
                    <h3 className="title">Zaloguj się</h3>
                    <p className='title_1'>używając swojej nazwy użytkownika i hasła</p>
                </header>
                <form onSubmit={handleSubmit}>
                    {error[0] && (
                        <div className='error'>Niepoprawne dane logowania. Może literówka?</div>
                    )}
                    <div>
                        <input onChange={updateFormData} type="email" name="email" placeholder="Nazwa użytkownika" required id={emailId} />
                    </div>
                    <div>
                        <input onChange={updateFormData} type="password" name="password" placeholder="Hasło" required id={passwId} />
                    </div>
                    <div>
                        <button type="submit" disabled={loginPending}>
                            {loginPending ? (<>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </>) : <>Zaloguj się</>}
                        </button>
                    </div>
                    <div>
                        <span>Nie masz jeszcze konta?</span>  <a onClick={() => navigate('/register')}>Stwórz nowe</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn;
