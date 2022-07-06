import React from 'react';
import ListEl from './ListEl';

export const ListContext = React.createContext();

const List = ({ data, dontShow, buttons, deleteElFunc }) => {
    const [selectedIds, setSelectedIds] = React.useState([]);

    const handleDelManyBtn = () => {
        selectedIds?.forEach(el => {
            deleteElFunc(el);
            console.log(el);
        })
        setSelectedIds([]);
    }

  return (
    <ListContext.Provider value={{
        selectedIds: selectedIds, setSelectedIds: setSelectedIds,
        deleteElFunc: deleteElFunc
    }}>
        <div className='List'>
            <div className="opt-bar">
                <button onClick={() => data?.map(a => a.id).every(el => selectedIds.includes(el)) ? setSelectedIds([]) : setSelectedIds(data?.map(a => a.id))}>
                    {data?.map(a => a.id).every(el => selectedIds.includes(el)) ? 'Odznacz wszystkie' : 'Zaznacz wszystkie'}
                </button>
                {deleteElFunc && <button onClick={handleDelManyBtn}>Usuń zaznaczone</button>}
                {buttons?.map((el, i) => (
                    <button key={i} onClick={el.onClick}>{el.text}</button>
                ))}
            </div>
        {data[0] ? (<>
            <table className='main-table'>
                <thead>
                    <tr>
                        <th>Lp.</th><th></th>
                        {Object.keys(data[0]).map((key, i) => dontShow.includes(key) || <th key={i}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, i) => <ListEl key={i} i={i} data={el} dontShow={dontShow} />)}
                </tbody>
            </table>
        </>) : <p>Brak danych do wyświetlenia</p>}

        </div>
    </ListContext.Provider>
  )
}

export default List;