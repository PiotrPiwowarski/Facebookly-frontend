import axios from "axios";

const BASE_URL = "http://localhost:8080/authentication";

export function login(loginData) {
  try {
    return axios.post(BASE_URL + "/login", loginData);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export function logout(id) {
  try{
    return axios.put(BASE_URL + "/" + id + "/logout", {})
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}