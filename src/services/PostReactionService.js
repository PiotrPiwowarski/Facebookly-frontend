import axios from "axios";

const BASE_URL = "http://localhost:8080/posts";

export const addPostLike = (postReactionData) => {
  try {
    return axios.post(`${BASE_URL}/like`, postReactionData);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const addPostDislike = (postReactionData) => {
  try {
    return axios.post(`${BASE_URL}/dislike`, postReactionData);
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

export const getAllPostLikesCount = (postId) => {
  try {
    return axios.get(`${BASE_URL}/${postId}/likesCount`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getAllPostDislikesCount = (postId) => {
  try {
    return axios.get(`${BASE_URL}/${postId}/dislikesCount`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}