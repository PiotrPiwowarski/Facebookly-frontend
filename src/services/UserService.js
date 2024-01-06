import axios from "axios";

const BASE_URL = 'http://localhost:8080/users';

export const addUser = (user) => {
  try {
    return axios.post(BASE_URL, user);
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getAllUsers = () => {
  try {
    return axios.get(`${BASE_URL}/all`);
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getUserById = (userId) => {
  try{
    return axios.get(`${BASE_URL}/${userId}`)
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}