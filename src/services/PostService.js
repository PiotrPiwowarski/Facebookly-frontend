import axios from "axios";

const BASE_URL = "http://localhost:8080/posts";

export const addPost = (post) => {
  try {
    return axios.post(BASE_URL, post);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}

export const getAllPosts = () => {
  try{
    return axios.get(`${BASE_URL}/all`);
  } catch(e) {
    console.error(`Error: ${e.message}`);
  }
}