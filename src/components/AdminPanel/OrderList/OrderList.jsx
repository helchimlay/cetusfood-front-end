import React from "react";
import { GlobalCtx } from "../../../App";
import "./OrderList.scss";
import { useParams } from "react-router-dom";
import { getOrder } from "../../../services/Users";

const OrderList = () => {
  const { userId } = useParams();
  const { user } = React.useContext(GlobalCtx);
  const [data, setData] = React.useState([]);

  // setData([{
  //     ID: 0,
  //     order_dat
  // }])

  React.useEffect(() => {
    getOrder(user.accessToken).then((res) => setData(res.data));
    console.log(data);
  }, []);
  const ordersData = [
    {
      id: 1,
      data: "11.09.2022",
      product: "McFlurry",
      restaurant: "MCDonald",
      state: "dostarczono",
    },
    {
      id: 2,
      data: "11.09.2022",
      product: "McFlurry",
      restaurant: "MCDonald",
      state: "dostarczono",
    },
    {
      id: 2,
      data: "11.09.2022",
      product: "McFlurry",
      restaurant: "MCDonald",
      state: "dostarczono",
    },
  ];

  return (
    <div>
      <table className="tb">
        <tr>
          <th>ID Użytkownika</th>
          <th>Data zamówienia</th>
          <th> Produkt</th>
          <th>Restauracja</th>
          <th>Status zamówienia</th>
        </tr>
        {ordersData.map((orderData) => (
          <tr>
            <td>{orderData.id}</td>
            <td>{orderData.data}</td>
            <td>{orderData.product}</td>
            <td>{orderData.restaurant}</td>
            <td className={orderData.state}>{orderData.state}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default OrderList;
