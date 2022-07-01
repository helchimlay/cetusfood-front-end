import React from 'react';
import './RestList.css';
import RestListEl from './RestListEl';

export const RestListCtx = React.createContext();

const RestList = () => {
    const [fetchedData, setFetchedData] = React.useState([
        { id: 1, name: 'name1', link: 'link1.pl', email: 'email1@gmail.com' },
        { id: 2, name: 'name2', link: 'link2.pl', email: 'email2@gmail.com' },
        { id: 3, name: 'name3', link: 'link3.pl', email: 'email3@gmail.com' },
        { id: 4, name: 'name4', link: 'link4.pl', email: 'email4@gmail.com' },
        { id: 5, name: 'name5', link: 'link5.pl', email: 'email5@gmail.com' },
        { id: 6, name: 'name6', link: 'link6.pl', email: 'email6@gmail.com' },
    ])
    const [selectedElId, setSelectedElId] = React.useState(null);

    console.log(selectedElId);

    return (
        <div className='RestList'>
            <RestListCtx.Provider value={{
                selectedElId: selectedElId, setSelectedElId: setSelectedElId
            }}>
                <div className="list">
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
                                <RestListEl key={i} id={el.id} oNum={i + 1} name={el.name} link={el.link} email={el.email} />
                            ))}
                        </tbody>
                    </table>
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
                                <button>Usuń</button>
                            </p>
                        </div>
                    </>) : (
                        <><h4 className='title'>Nie wybrano elementu</h4></>
                    )}
                </div>
            </RestListCtx.Provider>
        </div>
    )
}

export default RestList;