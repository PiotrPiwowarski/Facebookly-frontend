import axios from "axios";

const BASE_URL = "http://localhost:8080/posts";

export const addPost = (post) => {
  return axios.post(BASE_URL, post);
}

export const getAllPosts = () => {
  return axios.get(`${BASE_URL}/allWithData`);
}

export const deletePost = (postId, userId) => {
  return axios.delete(`${BASE_URL}/${postId}/user/${userId}`);
}