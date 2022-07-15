import React from 'react';
import { registerUser } from '../../../../services/Auth';
import NewListElForm from '../../List/ListElForm/NewListElForm';

const NewUserForm = () => {
    return (<>
        <h3 className="title">Dodaj nowego użytkownika</h3>
        <NewListElForm inputs={[
            { type: 'email', name: 'email', placeholder: 'email', id: 'email', label: 'Email' },
            { type: 'text', name: 'password', placeholder: 'hasło', id: 'password', label: 'Hasło' },
            { type: 'text', name: 'password2', placeholder: 'powtórz hasło', id: 'password2', label: 'Powtórz hasło' }
        ]}
            sendingFunc={registerUser}
            linkTo='../users'
        />
    </>)
}

export default NewUserForm;