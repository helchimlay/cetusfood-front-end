import React from 'react';
import './AdminPanel.scss';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AdminNav from './AdminNav';

const AdminPanel = () => {
    return (
        <div className='AdminPanel'>
            <Helmet>
                <title>CetusFood | Panel admina</title>
            </Helmet>
            <AdminNav
                links={[
                    { name: 'Restauracje', to: 'restaurants' },
                    {
                        name: 'Użytkownicy', to: 'users', sublinks: [
                            { name: 'Odblokowania', to: 'users/accept-queue' }
                        ]
                    },
                ]}
            />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminPanel;