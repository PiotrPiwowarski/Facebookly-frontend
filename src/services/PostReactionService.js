import axios from "axios";

const BASE_URL = "http://localhost:8080/posts";

export const addPostLike = (postReactionData) => {
  try {
    return axios.post(`${BASE_URL}/like`, postReactionData);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const addPostDislike = (postId) => {
  try {
    return axios.post(`${BASE_URL}/dislike`, postId);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const removePostReaction = (postId, userId) => {
  try {
    return axios.delete(`${BASE_URL}/${postId}/user/${userId}/reactions`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getAllPostLikes = (postId) => {
  try {
    return axios.get(`${BASE_URL}/${postId}/likes`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getAllPostDislikes = (postId) => {
  try {
    return axios.get(`${BASE_URL}/${postId}/dislikes`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}