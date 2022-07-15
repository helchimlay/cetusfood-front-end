import React from 'react';
import './Register.css';
import { Helmet } from 'react-helmet-async';
import { registerUser } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { GlobalCtx } from '../../App';

const Register = () => {
    const { user } = React.useContext(GlobalCtx);
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({});
    const emailId = React.useId();
    const passwId = React.useId();
    const passwId2 = React.useId();
    const [error, setError] = React.useState(null);
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
        registerUser(formData.email, formData.password, formData.password2);
        navigate('/log-in');
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
                        <input onChange={updateFormData} type="password" name="password2" required placeholder='Powtórz Hasło' id={passwId2} />
                    </div>
                    <div>
                        <button type="submit">
                            {loginPending ? (<>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </>) : <>Utwórz konto</>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
