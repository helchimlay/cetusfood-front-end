import React, { useState, useContext } from 'react';
import NewRestForm from './NewRestForm/NewRestForm';
import ShopsList from './ShopsList/ShopsList';
import { MainCtx } from '../../App';

const AdminPnl = () => {
  const Ctx = useContext(MainCtx);
  const [newRestFormOpened, setNewRestFormOpened] = useState(false);

  return (
    <div className='AdminPnl'>
      {Ctx.userIsAdmin ? (<>
        <h3>Panel admina</h3>
        <div className="shops-list" style={{backgroundColor: 'GrayText', border: '3px solid black', color: 'lightgrey'}}>
          <ShopsList />
  
          {newRestFormOpened ? (
            <NewRestForm 
              setNewRestFormOpened={setNewRestFormOpened}
            />
          ) : (
            <button onClick={()=>setNewRestFormOpened(true)}>+</button>
          )}
        </div>  
      </>) : (
        <h3>Użytkownik nie jest adminem</h3>
      )}

      
    </div>
  )
}

export default AdminPnl;