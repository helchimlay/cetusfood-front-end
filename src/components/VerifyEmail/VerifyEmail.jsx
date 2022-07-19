import React from 'react';
import './VerifyEmail.scss';
import { GlobalCtx } from '../../App';
import { Navigate, useParams } from 'react-router-dom';
import { verifyEmail } from '../../services/Auth';

const VerifyEmail = () => {
    const { user } = React.useContext(GlobalCtx);
    const { code } = useParams();

    const handleClick = () => {
        verifyEmail(code);
    }

  return (
    <div className='VerifyEmail'>
        {user.loggedIn && <Navigate to='/' replace />}
        <p>Weryfikacja konta</p>
        <button onClick={handleClick}>Weryfikuj</button>
    </div>
  )
}

export default VerifyEmail;