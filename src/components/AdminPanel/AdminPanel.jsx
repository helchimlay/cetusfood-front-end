import React from 'react';
import './AdminPanel.css';
import RestList from './RestList/RestList';

const AdminPanel = () => {
    const [whichPanel, setWhichPanel] = React.useState(0);

  return (
    <div className='AdminPanel'>
        <nav className='navigation'>
            <div className="title">Admin Panel</div>
            <button onClick={()=>setWhichPanel(0)} className={whichPanel===0?'current':null}>Restauracje</button>
            <button onClick={()=>setWhichPanel(1)} className={whichPanel===1?'current':null}>Użytkownicy</button>
        </nav>
        <div className="content">
            {whichPanel===0 && (<>
                <h3 className="title">Lista restauracji</h3>
                <RestList />
            </>)}
            {whichPanel===1 && (<>
                <h3 className="title">Lista użytkowników</h3>
            </>)}
        </div>
    </div>
  )
}

export default AdminPanel;