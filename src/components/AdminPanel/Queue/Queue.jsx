import React from 'react';

export const QueueContext = React.createContext(null);

const CtxVal = {
    
}

const Queue = ({ data, show }) => {
  return (
    <div className='Queue'>
        <QueueContext value={CtxVal}>
            <table>
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
            </table>

        </QueueContext>
    </div>
  )
}

export default Queue;