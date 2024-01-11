import axios from "axios";

const BASE_URL = "http://localhost:8080/authentication";

export const login = (loginData) => {
  return axios.put(BASE_URL + "/login", loginData);
}

export const logout = (id) => {
  return axios.put(BASE_URL + "/" + id + "/logout");
}