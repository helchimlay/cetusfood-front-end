import React from 'react';
import './RestList.css';
import RestListEl from './RestListEl';

const RestList = () => {
  return (
    <div className='RestList'>
        <div className="list">
            <RestListEl name='name1' link='link.pl' email='email@gmail.com' />
        </div>
        <div className="options">
            
        </div>
    </div>
  )
}

export default RestList;