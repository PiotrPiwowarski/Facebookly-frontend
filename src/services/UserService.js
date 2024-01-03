import axios from "axios";

const BASE_URL = 'http://localhost:8080/users';

export function addUser(user) {
  try {
    return axios.post(BASE_URL, user);
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }
}

export function getAllUsers() {
  try {
    return axios.get(`${BASE_URL}/all`);
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }
}