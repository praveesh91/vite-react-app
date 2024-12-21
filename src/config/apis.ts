const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
  USERS: `${API_BASE_URL}${import.meta.env.VITE_API_USERS_ENDPOINT}`,
  POSTS: `${API_BASE_URL}${import.meta.env.VITE_API_POSTS_ENDPOINT}`,
  AUTH: `${API_BASE_URL}/auth`, // Example of hardcoding a relative path
};

export default API_ENDPOINTS;
