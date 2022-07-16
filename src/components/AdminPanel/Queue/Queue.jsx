import React from 'react';
import './Queue.scss';

export const QueueContext = React.createContext(null);

const CtxVal = {

}

const Queue = ({ data, show, buttons }) => {
    return (
        <div className='Queue'>
            <QueueContext.Provider value={CtxVal}>
                {data[0] && (
                    <table className='main-table'>
                        <thead>
                            <tr>
                                <th>Lp.</th>
                                {Object.keys(data[0]).filter(v => show.includes(v)).map((key, i) => (
                                    <th key={i}>{key}</th>
                                ))}
                                {buttons.map((button, i) => (
                                    <th key={i}>{button.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((el, i) => (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    {Object.keys(el).filter(v => show.includes(v)).map((key, ii) => (
                                        <td key={ii}>{el[key]}</td>
                                    ))}
                                    {buttons.map((button, i) => (
                                        <td key={i}>
                                            <button className={button.class}><i className={button.boxIconClass}></i></button>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}


            </QueueContext.Provider>
        </div>
    )
}

export default Queue;