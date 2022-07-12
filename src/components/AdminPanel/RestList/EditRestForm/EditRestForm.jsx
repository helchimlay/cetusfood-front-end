import React from 'react';
import { editRestaurant, getRestaurantsById } from '../../../../services/RestaurationsList';
import { useParams } from 'react-router-dom';
import EditListElForm from '../../List/ListElForm/EditListElForm';

const EditRestForm = () => {
    const { id } = useParams();
    const [elData, setElData] = React.useState(null);

    React.useEffect(() => {
        getRestaurantsById(id).then(res => setElData(res.data));
    }, [])

    console.log(elData)

  return (
    <div className='EditRestForm'>
        {elData ? (<>
            <h3 className="title">Edytuj dane restauracji: {elData.name}</h3>
            <EditListElForm inputs={[
                    {type: 'text', name: 'name', placeholder: 'nazwa', id: 'name', label: 'Nazwa', default: elData.name},
                    {type: 'email', name: 'email', placeholder: 'email', id: 'email', label: 'Email', default: elData.email},
                    {type: 'text', name: 'url', placeholder: 'url', id: 'url', label: 'Link do strony', default: elData.url},
                    {type: 'text', name: 'logoUrl', placeholder: 'logo url', id: 'logoUrl', label: 'Link do loga', default: elData.logoUrl}
                ]}
                id={elData.id}
                sendingFunc={editRestaurant}
                linkTo='../restaurants'
            />
        </>) : <h3 className="title">Nie znaleziono restauracji</h3>}
    </div>
  )
}

export default EditRestForm;