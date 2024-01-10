import axios from "axios";

const BASE_URL = "http://localhost:8080/comments";

export const addCommentLike = (commentReactionData) => {
  try {
    return axios.post(`${BASE_URL}/like`, commentReactionData);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const addCommentDislike = (commentReactionData) => {
  try {
    return axios.post(`${BASE_URL}/dislike`, commentReactionData);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}