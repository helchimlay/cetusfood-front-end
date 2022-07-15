import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNav = ({ links }) => {
    const [subpanelsActive, setSubpanelsActive] = React.useState([]);

    const handleBtnClick = (i) => {
        setSubpanelsActive(prev => prev.includes(i) ? prev.filter(v => v!==i) : [...prev, i]);
    }

    console.log(subpanelsActive)

    return (
        <nav className='navigation'>
            {links?.map((link, i) => (
                <div className='link' key={i}>
                    <div className="a">
                        <NavLink className={({ isActive }) => isActive ? 'current' : null} to={link.to}>{link.name}</NavLink>
                        {link.sublinks && <button><i onClick={() => handleBtnClick(i)} className='bx bx-chevron-down'></i></button>}
                    </div>
                    {(link.sublinks && subpanelsActive.includes(i)) && (<>
                        <div className="list">
                            {link.sublinks.map((sublink, ii) => (
                                <NavLink key={ii} className={({ isActive }) => isActive ? 'current' : null} to={sublink.to} >{sublink.name}</NavLink>
                            ))}
                        </div>
                    </>)}
                </div>
            ))}
        </nav>
    )
}

export default AdminNav;