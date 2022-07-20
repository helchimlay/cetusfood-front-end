import React from 'react';
import './MenuPnl.scss';
import { useParams } from 'react-router-dom';
import { GlobalCtx } from '../../../../App';
import { getProducts } from '../../../../services/RestaurationsList';
import MenuEl from './MenuEl';
import NewElForm from './NewElForm';

const EditMenuPnl = () => {
    const { id } = useParams();
    const [data, setData] = React.useState([]);
    const { user } = React.useContext(GlobalCtx);
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        getProducts(id, user.accessToken).then(res => setData((res.data)));
    }, [counter])

    console.log(data)


    return (<>
        <h3 className="title">Menu restauracji</h3>
        <div className='EditMenuPnl'>
            {data?.map((el, i) => (
                <MenuEl data={el} key={i} counter={counter} setCounter={setCounter} restId={id} />
            ))}
            <NewElForm counter={counter} setCounter={setCounter} restId={id} />

        </div>
    </>)
}

export default EditMenuPnl;