import axios from "axios";
import variables from "../assets/variables.json";


export const getOrder = async (token) => {
  return await axios.get(`${variables.proxy}/admin/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getAccounts = async (token) => {
  return await axios.get(`${variables.proxy}/admin/account`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getAccountById = async (id, token) => {
  return await axios.get(`${variables.proxy}/admin/account/id/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getAccountsByEmail = async (email, token) => {
  return await axios.get(`${variables.proxy}/admin/account/email/${email}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const deleteAccount = async (id, token) => {
  return await axios.delete(`${variables.proxy}/admin/account/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const editAccount = async (id, data, token) => {
  return await axios.put(
    `${variables.proxy}/admin/account/${id}`,
    {
      email: data.email,
      role: data.role,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
export const getNotAcceptedAccounts = async (token) => {
  return await axios.get(`${variables.proxy}/admin/account/isVerified`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const acceptAccount = async (id, token) => {
  await axios.post(`${variables.proxy}/admin/account/accept/${id}`, 
  { headers: { Authorization: `Bearer ${token}` } }
  );
};
