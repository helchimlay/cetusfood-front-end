import axios from "axios";

export const logInUser = (email, password) => {
  return axios.post("https://api.foodapp.academy.st.cetuspro.com/auth/signIn", {
    email: email,
    password: password,
  });
};
export const logOutUser = () => {
    axios.post('https://api.foodapp.academy.st.cetuspro.com/auth/logout')
};
export const refreshToken = () => {};
export const getUserRole = (token) => {
    return axios.get('https://api.foodapp.academy.st.cetuspro.com/auth/role', 
    {headers: {'Authorization': `Bearer ${token}`}}
    )
};
export const registerUser = (email, password, password2) => {
  return axios.post(
    "https://api.foodapp.academy.st.cetuspro.com/public/account/register",
    { email: email, password: password, confirmationPassword: password2 }
  );
};
