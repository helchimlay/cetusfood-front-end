import React from 'react';
import './RestList.css';
import { getRestaurants, getRestaurantsByName, deleteRestaurant } from '../../services/RestaurationsList';
import RestListEl from './RestListEl';
import { Link } from 'react-router-dom';


export const RestListCtx = React.createContext();

const RestList = () => {
    const [fetchedData, setFetchedData] = React.useState([
        {id: 1, name: 'example1', email: 'contact@example1.com', url: 'example1.com'},
        {id: 2, name: 'example2', email: 'contact@example2.com', url: 'example2.com'},
        {id: 3, name: 'example3', email: 'contact@example3.com', url: 'example3.com'}
    ]);
    const [selectedIds, setSelectedIds] = React.useState([]);

    React.useEffect(() => {
        getRestaurants().then(res => console.log(res))
    }, [])


    return (<>
        <h3 className="title">Lista restauracji</h3>
        <div className='RestList'>
            <RestListCtx.Provider value={{
                selectedIds: selectedIds, setSelectedIds: setSelectedIds
            }}>
                <div className="opt-bar">
                    <button onClick={()=>fetchedData?.map(a=>a.id).every(el=>selectedIds.includes(el)) ? setSelectedIds([]) : setSelectedIds(fetchedData?.map(a=>a.id))}>
                        {fetchedData?.map(a=>a.id).every(el=>selectedIds.includes(el)) ? 'Odznacz wszystkie' : 'Zaznacz wszystkie'}
                    </button>
                    <Link to='add-new'>Dodaj nowy element</Link>
                </div>
                <table className='main-table'>
                    <thead>
                        <tr>
                            <th>Lp.</th><th></th>
                            {Object.keys(fetchedData[0]).map((key, i) => key!=='id' && <th key={i}>{key}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {fetchedData?.map((el, i) => <RestListEl data={el} key={i} i={i+1} />)}
                    </tbody>
                </table>
            </RestListCtx.Provider>
        </div>
    </>)
}

export default RestList;