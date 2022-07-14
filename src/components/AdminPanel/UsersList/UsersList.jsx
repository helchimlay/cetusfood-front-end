import React from 'react';
import List from '../List/List';
import { getAccounts, getAccountById, getAccountsByEmail, deleteAccount } from '../../../services/Users';
import { useNavigate } from 'react-router-dom';
import { GlobalCtx } from '../../../App';

const UsersList = () => {
    const navigate = useNavigate();
    const { user } = React.useContext(GlobalCtx);
    return (<>
        <h3 className="title">Lista użytkowników</h3>
        
        <List
            getDataFunc={getAccounts}
            getDataByParamFunc={getAccountsByEmail}
            dontShow={['id', 'password']}
            deleteElFunc={deleteAccount}
            buttons={[
                {text: 'Dodaj nowy element', onClick: () => navigate('add-new')}
            ]}
            accessToken={user.accessToken}
        />
    </>)
}

export default UsersList;