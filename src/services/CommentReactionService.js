import axios from "axios";

const BASE_URL = "http://localhost:8080/comments";

export const addCommentLike = (commentReactionData) => {
  try {
    return axios.post(`${BASE_URL}/like`, commentReactionData);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const addCommentDislike = (commentId) => {
  try {
    return axios.post(`${BASE_URL}/dislike`, commentId);
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

export const getAllCommentLikes = (commentId) => {
  try {
    return axios.get(`${BASE_URL}/${commentId}/likes`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getAllCommentDislikes = (commentId) => {
  try {
    return axios.get(`${BASE_URL}/${commentId}/dislikes`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}