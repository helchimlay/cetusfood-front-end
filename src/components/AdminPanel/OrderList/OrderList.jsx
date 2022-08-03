import React from 'react';
import { GlobalCtx } from '../../../App';
import './OrderList.css';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../../services/Users';

const OrderList = () => {
    const { userId } = useParams();
    const { user } = React.useContext(GlobalCtx);
    const [data, setData] = React.useState([]);

    // console.log(userId);

     React.useEffect(() => {
         getOrder(user.accessToken).then(res => setData(res.data))
         console.log(data);
     }, [])

  return (
   <div >
   <table className='tb'>
        <tr>
            <th>ID Użytkownika</th>
            <th>Data zamówienia</th>
            <th>Produkt</th>
            <th>Restauracja</th>
            <th>Status zamówienia</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
        <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
        <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
        <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
        <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
     </table>
     <div className='list'>   
         <button value="Następna strona"><span>&larr;</span> </button>
         <button value="Następna strona"><span>&rarr;</span> </button>
     </div> 
    </div>
    
    
  )
}

export default OrderList;