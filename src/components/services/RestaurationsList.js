import axios from "axios";
export const getRestaurants = async ()=>{
    return await axios.get('http://192.168.0.197:3000/restaurants');
}
export const deleteRestaurant = async (id)=>{
    await axios.delete(`http://192.168.0.197:3000/restaurants/${id}`);
}
export const addRestaurant = async (data)=>{
    if(data.name && data.url && data.email){
        await axios.post('http://192.168.0.197:3000/restaurants', data);
    }
    console.log(data)
}