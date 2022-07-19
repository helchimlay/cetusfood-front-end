import React from 'react';
import './MenuPnl.scss';
import { useParams } from 'react-router-dom';
import { GlobalCtx } from '../../../../App';
import { getRestaurantsById } from '../../../../services/RestaurationsList';
import MenuEl from './MenuEl';
import NewElForm from './NewElForm';

const EditMenuPnl = () => {
    const { id } = useParams();
    const [data, setData] = React.useState([
        {name: 'jabłuszko', price: 112, imageUrl: 'https://alternatywnie.files.wordpress.com/2011/12/z-masc582em.png?w=584'},
        {name: 'buła', price: 2137, imageUrl: 'https://alternatywnie.files.wordpress.com/2011/12/buc582ka.png?w=584'}
    ]);
    const { user } = React.useContext(GlobalCtx);

    React.useEffect(() => {
        // getRestaurantsById(id, user.accessToken).then(res => setData(res.data));
    }, [])

    console.log(data)


    return (<>
        <h3 className="title">Menu restauracji</h3>
        <div className='EditMenuPnl'>
            {data?.map((el, i) => (
                <MenuEl data={el} key={i} />
            ))}
            <NewElForm />

        </div>
    </>)
}

export default EditMenuPnl;