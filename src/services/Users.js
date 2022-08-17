import axios from "axios";
axios.defaults.baseURL= process.env.PROXY_1;

export const getAccounts = async (token) => {
  return await axios.get(`/admin/account`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getAccountById = async (id, token) => {
  return await axios.get(`/admin/account/id/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getAccountsByEmail = async (email, token) => {
  return await axios.get(`/admin/account/email/${email}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const deleteAccount = async (id, token) => {
  return await axios.delete(`/admin/account/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const editAccount = async (id, data, token) => {
  return await axios.put(`${variables.proxy}/admin/account/${id}`,
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
  return await axios.get(`/admin/account/isVerified`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const acceptAccount = async (id, token) => {
  await axios.post(`/admin/account/accept/${id}`, 
  { headers: { Authorization: `Bearer ${token}` } }
  );
};
