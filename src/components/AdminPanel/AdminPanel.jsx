import React from 'react';
import './AdminPanel.css';
import { Outlet, NavLink, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AdminPanel = () => {
  // {document.title = "CetusFood | Panel admina"}
  return (
    <div className='AdminPanel'>
      <Helmet>
        <title>CetusFood | Panel admina</title>
      </Helmet>
        <nav className='navigation'>
            <div className="title">Admin Panel</div>
            <NavLink className={({isActive}) => isActive ? 'current' : null} to='restaurants'>Restauracje</NavLink>
            <NavLink className={({isActive}) => isActive ? 'current' : null} to='users'>Użytkownicy</NavLink>
        </nav>
        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}

export default AdminPanel;