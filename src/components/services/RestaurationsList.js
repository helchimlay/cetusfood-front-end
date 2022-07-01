import axios from "axios";
export const getRestaurants = async ()=>{
    return await axios.get('http://192.168.0.195:3000/restaurants');
}
export const deleteRestaurant = async (id)=>{
    await axios.delete(`http://192.168.0.195:3000/restaurants/${id}`);
}   