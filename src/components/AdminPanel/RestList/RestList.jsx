import React from 'react';
import NewRestForm from './NewRestForm';
import './RestList.css';
import RestListEl from './RestListEl';
import { getRestaurants, deleteRestaurant } from '../../services/RestaurationsList';


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
        // fechuj i wepchaj do fetchedData z searchBarRef
        if(searchBarRef.current.value !== ''){
            alert('szukam');
        }
    }

    return (
        <div className='RestList'>
            <RestListCtx.Provider value={{
                selectedElId: selectedElId, setSelectedElId: setSelectedElId,
                newRestFormData: newRestFormData, setNewRestFormData: setNewRestFormData
            }}>
                <div className="list">
                    <div className='filtres'>
                        <div className='search-field'>
                            <input ref={searchBarRef} type="text" placeholder='Szukaj po nazwie' />
                            <i className='bx bx-search' onClick={handleSearch}></i>
                        </div>
                    </div>
                    <div className="table" style={{height: '65vh'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Lp.</th>
                                    <th>Nazwa</th>
                                    <th>Link</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fetchedData?.map((el, i) => (
                                    <RestListEl key={i} id={el.id} oNum={i + 1} name={el.name} link={el.url} email={el.email} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="add-new-form">  
                        <button onClick={()=>{setNewRestFormOpened(true); setSelectedElId(null)}}>Dodaj nowy element</button>
                    </div>
                </div>
                <div className="options">
                    {selectedElId ? (<>
                        <h4 className='title'>Opcje, id: {selectedElId}</h4>
                        <div className="option">
                            <p>
                                <span>Edytuj element</span>
                                <button>Akceptuj zmiany</button>
                            </p>
                            <p>
                                <label htmlFor="name">Nazwa: </label>
                                <input placeholder='nazwa...' type="text" name="name" id="name" autoComplete='off' />
                            </p>
                            <p>
                                <label htmlFor="email">Email: </label>
                                <input placeholder='email...' type="email" name="email" id="email" autoComplete='on' />
                            </p>
                            <p>
                                <label htmlFor="link">Link: </label>
                                <input placeholder='link...' type="text" name="link" id="link" autoComplete='on' />
                            </p>
                        </div>
                        <div className="option">
                            <p>
                                <span>Usuń element</span>
                                <button onClick={()=>deleteRestaurant(selectedElId)}>Usuń</button>
                            </p>
                        </div>
                    </>) : (newRestFormOpened ? (
                        <NewRestForm />
                    ) : (
                        <><h4 className='title'>Nie wybrano elementu</h4></>
                    ))}
                </div>
            </RestListCtx.Provider>
        </div>
    )
}

export default RestList;