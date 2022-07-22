import React from 'react';
import Queue from '../Queue/Queue';
import { acceptAccount, getNotAcceptedAccounts } from '../../../services/Users';
import { GlobalCtx } from '../../../App';

const AcceptQueue = () => {
  const { user } = React.useContext(GlobalCtx);
  const [data, setData] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => getNotAcceptedAccounts(user.accessToken).then(res => setData(res.data)), 100);
  }, [counter])

  return (
    <div className='AcceptQueue'>
      <h3 className="title">Kolejka odblokowań nowych użytkowników</h3>
      <Queue
        data={data}
        show={['email']}
        buttons={[
          { name: 'Zaakceptuj', boxIconClass: 'bx bxs-happy-alt', class: 'green', onClick: acceptAccount },
          // { name: 'Zbanuj', boxIconClass: 'bx bxs-sad', class: 'red' },
        ]}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  )
}

export default AcceptQueue;