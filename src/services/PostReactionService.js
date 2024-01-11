import axios from "axios";

const BASE_URL = "http://localhost:8080/posts";

export const addPostLike = (postReactionData) => {
  return axios.post(`${BASE_URL}/like`, postReactionData);
}

export const addPostDislike = (postReactionData) => {
  return axios.post(`${BASE_URL}/dislike`, postReactionData);
}