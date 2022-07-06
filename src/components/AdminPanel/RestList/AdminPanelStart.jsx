import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanelStart = () => {
  return (<>
   <h3 className="title">Start</h3>
    <div className='AdminPanelStart'>
        <Link to='restaurants'><i className='bx bx-list-ul'></i>Lista restauracji</Link>
        <Link to='users'><i className='bx bx-list-ul'></i>Lista uzytkowników</Link>
    </div>
  </>)
}

export default AdminPanelStart;