import axios from "axios";
import variables from "../assets/variables.json";

export const getAccounts = async (token) => {
  return await axios.get(`${variables.proxy}/admin/account`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getAccountById = async (id, token) => {
  return await axios.get(`${variables.proxy}/admin/account/${id}`, {
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
