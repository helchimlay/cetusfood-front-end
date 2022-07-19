import React from 'react';
import Queue from '../Queue/Queue';
import { getAccounts } from '../../../services/Users';
import { GlobalCtx } from '../../../App';

const AcceptQueue = () => {
    const { user } = React.useContext(GlobalCtx);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getAccounts(user.accessToken).then(res => setData(res.data))
    }, [])

  return (
    <div className='AcceptQueue'>
        <h3 className="title">Kolejka odblokowań nowych użytkowników</h3>
        <Queue
            data={data}
            show={['email']}
            buttons={[
                {name: 'Zaakceptuj', boxIconClass: 'bx bxs-happy-alt', class: 'green'},
                {name: 'Odrzuć', boxIconClass: 'bx bxs-sad', class: 'red'},
            ]}
        />
    </div>
  )
}

export default AcceptQueue;