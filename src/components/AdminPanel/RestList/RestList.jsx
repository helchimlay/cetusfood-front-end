import React from 'react';
import './RestList.css';
import RestListEl from './RestListEl';

const RestList = () => {
  return (
    <div className='RestList'>
        <RestListEl name='name1' link='link.pl' email='email@gmail.com' />
    </div>
  )
}

export default RestList;