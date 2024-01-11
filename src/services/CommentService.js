import axios from "axios";

const BASE_URL = "http://localhost:8080/comments";

export const addComment = (comment) => {
  return axios.post(BASE_URL, comment);
}

export const getALlPostComments = (postId) => {
  return axios.get(`${BASE_URL}/post/${postId}/allWithData`);
}

export const deleteComment = (commentId, userId) => {
  return axios.delete(`${BASE_URL}/${commentId}/user/${userId}`);
}