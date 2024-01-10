import axios from "axios";

const BASE_URL = "http://localhost:8080/comments";

export const addComment = (comment) => {
  try {
    return axios.post(BASE_URL, comment);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getALlPostComments = (postId) => {
  try {
    return axios.get(`${BASE_URL}/post/${postId}/allWithData`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const deleteComment = (commentId, userId) => {
  try {
    return axios.delete(`${BASE_URL}/${commentId}/user/${userId}`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}