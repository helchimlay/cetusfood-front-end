import React from 'react';
import { GlobalCtx } from '../../../App';
import './Queue.scss';
import { acceptAccount } from '../../../services/Users';

export const QueueContext = React.createContext(null);

const CtxVal = {

}

const Queue = ({ data, show, buttons, counter, setCounter }) => {
  const { user } = React.useContext(GlobalCtx);
  console.log(data);
  console.log(buttons);
  console.log(user)
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
                  <td>{i + 1}</td>
                  {Object.keys(el).filter(v => show.includes(v)).map((key, ii) => (
                    <td key={ii}>{el[key]}</td>
                  ))}
                  {buttons.map((button, i) => (
                    <td key={i}>
                      <button onClick={() => {button.onClick(el.id, user.accessToken); setCounter(counter+1)}} className={button.class}><i className={button.boxIconClass}></i></button>
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