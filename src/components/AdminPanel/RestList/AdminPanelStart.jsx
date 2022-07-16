import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanelStart = () => {
    return (<>
        <h3 className="title">Start</h3>
        <div className='AdminPanelStart'>
            <div>
                <Link to='restaurants'><i className='bx bx-list-ul'></i>Lista restauracji</Link>
            </div>
            <div className='has-sublist'>
                <Link to='users'><i className='bx bx-list-ul'></i>Lista uzytkowników</Link>
                <div className="list">
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                    <Link to='users/accept-queue'>Odblokowania</Link>
                </div>
            </div>
        </div>
    </>)
}

export default AdminPanelStart;