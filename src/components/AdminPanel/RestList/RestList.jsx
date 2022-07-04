import React from 'react';
import './RestList.css';
import { getRestaurants, getRestaurantsByName, deleteRestaurant } from '../../services/RestaurationsList';


export const RestListCtx = React.createContext();

const RestList = () => {
    const [fetchedData, setFetchedData] = React.useState([])
    const [selectedElId, setSelectedElId] = React.useState(null);
    const [newRestFormOpened, setNewRestFormOpened] = React.useState(false);
    const [newRestFormData, setNewRestFormData] = React.useState({});

    React.useEffect(()=>{
        getRestaurants().then(data => setFetchedData(data.data));
    }, [newRestFormOpened])

    
    const searchBarRef = React.useRef(null);

    const handleSearch = ()=>{
        if(searchBarRef.current.value !== ''){
            getRestaurantsByName(searchBarRef.current.value).then(data => setFetchedData(data.data));
        }
    }

    return (
        <div className='RestList'>
            <RestListCtx.Provider value={{
                selectedElId: selectedElId, setSelectedElId: setSelectedElId,
                newRestFormData: newRestFormData, setNewRestFormData: setNewRestFormData
            }}>
                
            </RestListCtx.Provider>
        </div>
    )
}

export default RestList;