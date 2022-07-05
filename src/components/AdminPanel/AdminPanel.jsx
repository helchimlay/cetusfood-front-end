import React from 'react';
import './AdminPanel.css';
import { Outlet, Link, Navigate } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className='AdminPanel'>
        <nav className='navigation'>
            <div className="title">Admin Panel</div>
            <Link to='restaurants'>Restauracje</Link>
            <Link to='users'>Użytkownicy</Link>
        </nav>
        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}

export default AdminPanel;