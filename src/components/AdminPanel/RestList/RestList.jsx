import React from 'react';
import './RestList.css';
import { getRestaurants, getRestaurantsByName, deleteRestaurant } from '../../services/RestaurationsList';
import RestListEl from './RestListEl';


export const RestListCtx = React.createContext();

const RestList = () => {
    const [fetchedData, setFetchedData] = React.useState([
        {name: 'mcdonalds', email: 'contact@mcdonalds.com', url: 'mcdonalds.com'},
        {name: 'kfc', email: 'contact@kfc.com', url: 'kfc.com'},
        {name: 'subway', email: 'contact@subway.com', url: 'subway.com'}
    ])
    const [selectedElId, setSelectedElId] = React.useState(null);
    const [newRestFormOpened, setNewRestFormOpened] = React.useState(false);
    const [newRestFormData, setNewRestFormData] = React.useState({});

    // React.useEffect(()=>{
    //     getRestaurants().then(data => setFetchedData(data.data));
    // }, [newRestFormOpened])
    // const searchBarRef = React.useRef(null);
    // const handleSearch = ()=>{
    //     if(searchBarRef.current.value !== ''){
    //         getRestaurantsByName(searchBarRef.current.value).then(data => setFetchedData(data.data));
    //     }
    // }

    return (
        <div className='RestList'>
            <RestListCtx.Provider value={{
                selectedElId: selectedElId, setSelectedElId: setSelectedElId,
                newRestFormData: newRestFormData, setNewRestFormData: setNewRestFormData
            }}>
                <table className='main-table'>
                    <thead>
                        <td>Lp.</td><td></td>
                        {Object.keys(fetchedData[0]).map((key, i)=><td key={i}>{key}</td>)}
                    </thead>
                    <tbody>
                        {fetchedData?.map((el, i)=>(
                            <RestListEl data={el} key={i} i={i+1} />
                        ))}
                    </tbody>
                </table>
                
            </RestListCtx.Provider>
        </div>
    )
}

export default RestList;