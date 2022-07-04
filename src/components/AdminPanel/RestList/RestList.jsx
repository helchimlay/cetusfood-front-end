import React from 'react';
import './RestList.css';
import { getRestaurants, getRestaurantsByName, deleteRestaurant } from '../../services/RestaurationsList';
import RestListEl from './RestListEl';


export const RestListCtx = React.createContext();

const RestList = () => {
    const [fetchedData, setFetchedData] = React.useState([
        {id: 1, name: 'mcdonalds', email: 'contact@mcdonalds.com', url: 'mcdonalds.com'},
        {id: 2, name: 'kfc', email: 'contact@kfc.com', url: 'kfc.com'},
        {id: 3, name: 'subway', email: 'contact@subway.com', url: 'subway.com'}
    ]);
    const [selectedIds, setSelectedIds] = React.useState([]);

    // React.useEffect(()=>{
    //     getRestaurants().then(data => setFetchedData(data.data));
    // }, [newRestFormOpened])
    // const searchBarRef = React.useRef(null);
    // const handleSearch = ()=>{
    //     if(searchBarRef.current.value !== ''){
    //         getRestaurantsByName(searchBarRef.current.value).then(data => setFetchedData(data.data));
    //     }
    // }
    console.log(selectedIds);


    return (
        <div className='RestList'>
            <RestListCtx.Provider value={{
                selectedIds: selectedIds, setSelectedIds: setSelectedIds
            }}>
                <div className="opt-bar">
                    <button onClick={()=>fetchedData?.map(a=>a.id).every(el=>selectedIds.includes(el)) ? setSelectedIds([]) : setSelectedIds(fetchedData?.map(a=>a.id))}>
                        {fetchedData?.map(a=>a.id).every(el=>selectedIds.includes(el)) ? 'Odznacz wszystkie' : 'Zaznacz wszystkie'}
                    </button>
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
    )
}

export default RestList;