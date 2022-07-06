import React from 'react';
import './RestList.css';
import { getRestaurants, getRestaurantsByName, deleteRestaurant } from '../../services/RestaurationsList';
import RestListEl from './RestListEl';
import { Link } from 'react-router-dom';


export const RestListCtx = React.createContext();

const RestList = () => {
    const [fetchedData, setFetchedData] = React.useState([]);
    const [selectedIds, setSelectedIds] = React.useState([]);
    const [forceFetch, setForceFetch] = React.useState(0);

    React.useEffect(() => {
        getRestaurants().then(res => setFetchedData(res.data))
    }, [forceFetch])

    const handleDelManyBtn = () => {
        selectedIds?.forEach(el => {
            deleteRestaurant(el);
            console.log(el);
        })
        setSelectedIds([]);
        setForceFetch(forceFetch + 1);
    }

    return (<>
        <h3 className="title">Lista restauracji</h3>
        <div className='RestList'>
            <RestListCtx.Provider value={{
                selectedIds: selectedIds, setSelectedIds: setSelectedIds,
                forceFetch: forceFetch, setForceFetch: setForceFetch
            }}>
                <div className="opt-bar">
                    <button onClick={() => fetchedData?.map(a => a.id).every(el => selectedIds.includes(el)) ? setSelectedIds([]) : setSelectedIds(fetchedData?.map(a => a.id))}>
                        {fetchedData?.map(a => a.id).every(el => selectedIds.includes(el)) ? 'Odznacz wszystkie' : 'Zaznacz wszystkie'}
                    </button>
                    <Link replace to='add-new'>Dodaj nowy element</Link>
                    <button onClick={handleDelManyBtn}>Usuń zaznaczone<i className='bx bx-trash-alt' ></i></button>
                </div>
                <table className='main-table'>
                    {fetchedData[0] && (
                        <thead>
                            <tr>
                                <th>Lp.</th><th></th>
                                {Object.keys(fetchedData[0]).map((key, i) => key !== 'id' && <th key={i}>{key}</th>)}
                            </tr>
                        </thead>
                    )}
                    <tbody>
                        {fetchedData?.map((el, i) => <RestListEl data={el} key={i} i={i + 1} />)}
                    </tbody>
                </table>
                {!fetchedData[0] && <p className='no-data'>Brak danych do wyświetlenia</p>}
            </RestListCtx.Provider>
        </div>
    </>)
}

export default RestList;