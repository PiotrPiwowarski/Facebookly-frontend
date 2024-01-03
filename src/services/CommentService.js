import axios from "axios";

const BASE_URL = "http://localhost:8080/comments";

export function addComment(comment) {
  try {
    return axios.post(BASE_URL, comment);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export function getALlPostComments(postId) {
  try {
    return axios.get(`${BASE_URL}/post/${postId}/all`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}