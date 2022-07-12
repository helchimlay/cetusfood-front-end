import React from 'react';
import './UserSubmenu.scss';
import { GlobalCtx } from '../../../App';
import { logOutUser } from '../../../services/Auth';
import { useNavigate } from 'react-router-dom';

const UserSubmenu = () => {
    const navigate = useNavigate();
    const { user, setUser } = React.useContext(GlobalCtx);
    const [submenuON, setSubmenuON] = React.useState(false);

    const handleLogOutBtn = () => {
        logOutUser();
        localStorage.removeItem('accessToken');
        setUser({
            loggedIn: false,
            role: null,
            accessToken: null,
        });
        navigate('/log-in');
    }

    return (
        <div className='UserSubmenu'>
            <button className='main-btn' onClick={() => setSubmenuON(prev => !prev)}><i class='bx bxs-user'></i></button>
            {submenuON && (
                <div className='submenu'>
                    <p>Jesteś zalogowany</p>
                    <p>Rola: {user.role}</p>
                    <button onClick={handleLogOutBtn} className='log-out'>Wyloguj się</button>
                </div>
            )}
        </div>
    )
}

export default UserSubmenu;