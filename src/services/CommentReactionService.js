import axios from "axios";

const BASE_URL = "http://localhost:8080/comments";

export const addCommentLike = (commentReactionData) => {
  return axios.post(`${BASE_URL}/like`, commentReactionData);
}

export const addCommentDislike = (commentReactionData) => {
  return axios.post(`${BASE_URL}/dislike`, commentReactionData);
}