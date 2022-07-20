import React from 'react';
import ListEl from './ListEl';
import './List.css';

export const ListContext = React.createContext();

const List = ({ getDataByParamFunc, getDataFunc, dontShow, buttons, deleteElFunc, accessToken, actionButtons }) => {
    const [selectedIds, setSelectedIds] = React.useState([]);
    const [data, setData] = React.useState([]);
    const searchBarRef = React.useRef();
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => fetchData(undefined, accessToken), 100)
    }, [counter])
    const fetchData = async (name, token) => {
        if (name && name !== '') {
            console.log(name, token)
            await getDataByParamFunc(name, token).then(res => setData(res.data));
        } else {
            await getDataFunc(token).then(res => setData(res.data));
        }
    }
    const handleDelManyBtn = () => {
        selectedIds?.forEach(el => {
            deleteElFunc(el, accessToken);
        })
        setSelectedIds([]);
        setCounter(counter+1);
    }
    const handleSearchBtnClick = () => {
        fetchData(searchBarRef.current.value, accessToken);
        setSelectedIds([]);
    }
    console.log(selectedIds)
    return (
        <ListContext.Provider value={{
            selectedIds, setSelectedIds,
            deleteElFunc,
            accessToken,
            actionButtons,
            counter, setCounter
        }}>
            <div className='List'>
                <div className="opt-bar">
                    <div>
                        <input onKeyDown={e => e.key === 'Enter' && handleSearchBtnClick()} ref={searchBarRef} type="text" placeholder='Szukaj' />
                        <button className="search" onClick={handleSearchBtnClick}><i className='bx bx-search'></i></button>
                    </div>
                    <button onClick={() => { fetchData(null, accessToken); setSelectedIds([]); }}>Pokaż wszystkie</button>
                    <button onClick={() => data?.map(a => a.id).every(el => selectedIds.includes(el)) ? setSelectedIds([]) : setSelectedIds(data?.map(a => a.id))}>
                        {data?.map(a => a.id).every(el => selectedIds.includes(el)) ? 'Odznacz wszystkie' : 'Zaznacz wszystkie'}
                    </button>
                    {(deleteElFunc && selectedIds[0]) && <button onClick={handleDelManyBtn}>Usuń zaznaczone</button>}
                    {buttons?.map((el, i) => (
                        <button key={i} onClick={el.onClick}>{el.text}</button>
                    ))}
                </div>
                {data[0] ? (<>
                    <table className='main-table'>
                        <thead>
                            <tr>
                                <th>Lp.</th><th></th>
                                {Object.keys(data[0]).map((key, i) => dontShow.includes(key) || (
                                    <th key={i}>
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((el, i) => <ListEl key={i} i={i} setData={setData} data={el} dontShow={dontShow} />)}
                        </tbody>
                    </table>
                </>) : <p>Brak danych do wyświetlenia</p>}

            </div>
        </ListContext.Provider>
    )
}

export default List;