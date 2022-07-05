import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanelStart = () => {
  return (
    <div className='AdminPanelStart'>
        <Link to='restaurants'><i class='bx bx-list-ul'></i>Lista restauracji</Link>
        <Link to='users'><i class='bx bx-list-ul'></i>Lista uzytkowników</Link>
    </div>
  )
}

export default AdminPanelStart;