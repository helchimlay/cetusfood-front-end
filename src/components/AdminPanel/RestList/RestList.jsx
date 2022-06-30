import React from 'react';
import './RestList.css';
import RestListEl from './RestListEl';

const RestList = () => {
  return (
    <div className='RestList'>
        <div className="list">
            <table>
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Link</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <RestListEl name='name1' link='link.pl' email='email@gmail.com' />
                    <RestListEl name='name1' link='link.pl' email='email@gmail.com' />
                    <RestListEl name='name1' link='link.pl' email='email@gmail.com' />
                </tbody>
            </table>
        </div>
        <div className="options">

        </div>
    </div>
  )
}

export default RestList;