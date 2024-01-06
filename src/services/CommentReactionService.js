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

export const removeCommentReaction = (commentId, userId) => {
  try {
    return axios.delete(`${BASE_URL}/${commentId}/user/${userId}/reactions`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getAllCommentLikesCount = (commentId) => {
  try {
    return axios.get(`${BASE_URL}/${commentId}/likesCount`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getAllCommentDislikesCount = (commentId) => {
  try {
    return axios.get(`${BASE_URL}/${commentId}/dislikesCount`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}