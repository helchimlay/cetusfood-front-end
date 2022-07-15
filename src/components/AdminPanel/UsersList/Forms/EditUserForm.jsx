import React from 'react';
import { getAccountById, editAccount } from '../../../../services/Users';
import { useParams } from 'react-router-dom';
import { GlobalCtx } from '../../../../App';
import EditListElForm from '../../List/ListElForm/EditListElForm';

const EditUserForm = () => {
    const { id } = useParams();
    const [elData, setElData] = React.useState(null);
    const { user } = React.useContext(GlobalCtx);

    React.useEffect(() => {
        // getRestaurantsById(id, user.accessToken).then(res => setElData(res.data));
        getAccountById(id, user.accessToken).then(res => setElData(res.data));
    }, [])

    console.log(elData)

    return (<>
        {elData ? (<>
            <h3 className="title">Edytuj dane restauracji: {elData.name}</h3>
            <EditListElForm inputs={[
                { type: 'email', name: 'email', placeholder: 'email', id: 'email', label: 'Email', default: elData.email },
                {
                    type: 'radio', label: 'Typ konta', name: 'role', id: 'role', default: elData.role, options: [
                        { value: 'user', label: 'użytkownik standardowy', id: 'user' },
                        { value: 'admin', label: 'administrator', id: 'admin' },
                    ]
                }
            ]}
                id={elData.id}
                sendingFunc={editAccount}
                linkTo='../users'
            />
        </>) : <h3 className="title">Nie znaleziono użytkownika</h3>}
    </>)
}

export default EditUserForm;