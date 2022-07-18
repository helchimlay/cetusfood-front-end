import React from 'react';
import './AdminPanel.scss';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AdminNav from './AdminNav';
import variables from '../../assets/variables.json';

const AdminPanel = () => {

    return (
        <div className='AdminPanel'>
            <Helmet>
                <title>CetusFood | Panel admina</title>
            </Helmet>
            <AdminNav links={variables.adminPnlNav} />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminPanel;