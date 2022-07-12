import axios from "axios";
export const getRestaurants = async (token) => {
  return await axios.get(
    "https://api.foodapp.academy.st.cetuspro.com/user/restaurants",
    {
      'Authorization': `Bearer ${token}` 
    }
  );
};
export const getRestaurantsByName = async (name, token) => {
  return await axios.get(
    `https://api.foodapp.academy.st.cetuspro.com/user/restaurants/name/${name}`,
    {
      'Authorization': `Bearer ${token}` 
    }
  );
};
export const getRestaurantsById = async (id, token) => {
  return await axios.get(
    `https://api.foodapp.academy.st.cetuspro.com/user/restaurants/${id}`,
    {
      'Authorization': `Bearer ${token}` 
    }
  );
};
export const deleteRestaurant = async (id, token) => {
  await axios.delete(
    `https://api.foodapp.academy.st.cetuspro.com/admin/restaurants/${id}`,
    {
      'Authorization': `Bearer ${token}` 
    }
  );
};
export const addRestaurant = async (data, token) => {
  if (data.name && data.url && data.email) {
    await axios.post(
      "https://api.foodapp.academy.st.cetuspro.com/admin/restaurants",
      data,
      {
        'Authorization': `Bearer ${token}` 
      }
    );
  }
};
export const editRestaurant = async (id, data, token) => {
  if (id && data.name && data.url && data.email) {
    await axios.put(
      `https://api.foodapp.academy.st.cetuspro.com/admin/restaurants/${id}`,
      data,
      {
        'Authorization': `Bearer ${token}` 
      }
    );
  }
};
