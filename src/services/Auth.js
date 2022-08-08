import axios from "axios";
import variables from "../assets/variables.json";

export const logInUser = (email, password) => {
  return axios.post(`/auth/signIn`, {
    email: email,
    password: password,
  });
};
export const logOutUser = () => {
  axios.post(`/auth/logout`);
};
export const refreshToken = () => {};
export const getUserRole = (token) => {
  return axios.get(`/auth/role`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const registerUser = (email, password, password2) => {
  return axios.post(`/public/account/register`, {
    email: email,
    password: password,
    confirmationPassword: password2,
  });
};
export const verifyEmail = (code) => {
  axios.post(`/public/account/verify/${code}`);
};
