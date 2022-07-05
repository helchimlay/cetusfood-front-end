import axios from "axios";
export const getRestaurants = async ()=>{
    return await axios.get('/restaurants');
}
export const getRestaurantsByName = async (name)=>{
    return await axios.get(`/restaurants/name/${name}`);
}
export const deleteRestaurant = async (id)=>{
    await axios.delete(`/restaurants/${id}`);
}
export const addRestaurant = async (data)=>{
    if(data.name && data.url && data.email){
        await axios.post('/restaurants', data);
    }
}