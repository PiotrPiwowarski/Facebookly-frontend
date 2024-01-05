import axios from "axios";

const BASE_URL = "http://localhost:8080/authentication";

export const login = (loginData) => {
  try {
    return axios.post(BASE_URL + "/login", loginData);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const logout = (id) => {
  try{
    return axios.put(BASE_URL + "/" + id + "/logout", {})
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}