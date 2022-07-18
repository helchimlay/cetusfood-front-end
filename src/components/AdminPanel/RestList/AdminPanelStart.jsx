import React from 'react';
import { Link } from 'react-router-dom';
import variables from '../../../assets/variables.json';

const AdminPanelStart = () => {
    return (<>
        <h3 className="title">Start</h3>
        <div className='AdminPanelStart'>
            <Links
                links={variables.adminPnlNav}
            />
        </div>
    </>)
}

const Links = ({ links }) => {
    return (<>
        {links.map((link, i) => link.sublinks ? (
            <div className='has-sublist'>
                <Link to={link.to}><i className='bx bx-list-ul'></i>{link.name}</Link>
            <div className="list">
                {link.sublinks.map((sblink, i) => (
                    <Link to={sblink.to} title={sblink.name}>{sblink.name}</Link>
                ))}
            </div>
        </div>
        ) : (
            <div>
                <Link to = {link.to}><i className='bx bx-list-ul'></i>{link.name}</Link>
            </div >
        ))}
    </>)
}

export default AdminPanelStart;