import axios from "axios";
export const getRestaurants = async () => {
    return await axios.get('https://api.foodapp.academy.st.cetuspro.com/restaurants');
}
export const getRestaurantsByName = async (name) => {
    return await axios.get(`https://api.foodapp.academy.st.cetuspro.com/restaurants/name/${name}`);
}
export const getRestaurantsById = async (id) => {
    return await axios.get(`https://api.foodapp.academy.st.cetuspro.com/restaurants/${id}`);
}
export const deleteRestaurant = async (id) => {
    await axios.delete(`https://api.foodapp.academy.st.cetuspro.com/restaurants/${id}`);
}
export const addRestaurant = async (data) => {
    if(data.name && data.url && data.email){
        await axios.post('https://api.foodapp.academy.st.cetuspro.com/restaurants', data);
    }
}
export const editRestaurant = async (id, data) => {
    if(id && data.name && data.url && data.email){
        await axios.put(`https://api.foodapp.academy.st.cetuspro.com/restaurants/${id}`, data)
    }
}