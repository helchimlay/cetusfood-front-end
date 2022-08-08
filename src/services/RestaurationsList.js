import axios from "axios";
import variables from "../assets/variables.json";

export const getRestaurants = async (token) => {
  return await axios.get(`/user/restaurants`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getRestaurantsByName = async (name, token) => {
  return await axios.get(`/user/restaurants/name/${name}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getRestaurantsById = async (id, token) => {
  return await axios.get(`/user/restaurants/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const deleteRestaurant = async (id, token) => {
  await axios.delete(`/admin/restaurants/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const addRestaurant = async (data, token) => {
  if (data.name && data.url && data.email) {
    await axios.post(`/admin/restaurants`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
};
export const editRestaurant = async (id, data, token) => {
  if (id && data.name && data.url && data.email) {
    await axios.put(`/admin/restaurants/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
};
export const addOrder = async (input, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios.post(
        `./user/orders`,
        input,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      resolve();
    } catch {
      reject();
    }
  })
};
export const getProducts = async (restId, token) => {
  return await axios.get(
    `/user/restaurants/products/${restId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
export const deleteProduct = async (productId, token) => {
  await axios.delete(
    `/admin/restaurants/product/${productId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
export const addProduct = async (data, token) => {
  await axios.post(`/admin/restaurants/product`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const editProduct = async (data, prodId, token) => {
    console.log(data)
    await axios.put(
        `/admin/restaurants/product/${prodId}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
    )
}