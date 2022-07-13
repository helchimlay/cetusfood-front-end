import React from 'react';
import './NewRestForm.css';
import { addRestaurant } from '../../../../services/RestaurationsList.js';
import { Link, useNavigate } from 'react-router-dom';
import NewListElForm from '../../List/ListElForm/NewListElForm';

const AddNewRestForm = () => {
    const [formData, setFormData] = React.useState({});
    const navigate = useNavigate();
    const handleSubmit = e => {
        addRestaurant(formData);
        navigate('../restaurants');
        e.preventDefault();
    }
    const handleInputChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (<>
        <h3 className="title">Dodaj nową restaurację</h3>
        <NewListElForm inputs={[
            { type: 'text', name: 'name', placeholder: 'nazwa', id: 'name', label: 'Nazwa' },
            { type: 'email', name: 'email', placeholder: 'email', id: 'email', label: 'Email' },
            { type: 'text', name: 'url', placeholder: 'url', id: 'url', label: 'Link do strony' },
            { type: 'text', name: 'logoUrl', placeholder: 'logo url', id: 'logoUrl', label: 'Link do loga' },
            // {
            //     type: 'radio', label: 'Typ konta', name: 'test', id: 'test', options: [
            //         { value: 'user', label: 'użytkownik standardowy', id: 'user' },
            //         { value: 'admin', label: 'administrator', id: 'admin' },
            //     ]
            // }
        ]}
            sendingFunc={addRestaurant}
            linkTo='../restaurants'
        />
    </>)
}

export default AddNewRestForm;