import axios from "axios";

const BASE_URL = 'http://localhost:8080/users';

export const addUser = (user) => {
  return axios.post(BASE_URL, user);
}

export const getAllUsers = () => {
  return axios.get(`${BASE_URL}/all`);
}

export const deleteUser = (userId) => {
  return axios.delete(`${BASE_URL}/${userId}`);
}