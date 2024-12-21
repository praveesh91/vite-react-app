import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // API Base URL from environment variables
  timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add Authorization header if a token exists
    console.log('Request Interceptor:', config);
    const token = localStorage.getItem('authToken'); // Example: Fetch token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response Interceptor:', response);

    // Any custom response logic
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server-side errors
      if (error.response.status === 401) {
        console.error('Unauthorized! Redirecting to login...');
        // Example: Redirect to login
        window.location.href = '/login';
      }
      if (error.response.status === 500) {
        console.error('Server error! Please try again later.');
      }
    } else if (error.request) {
      // Network errors
      console.error('Network error! Please check your connection.');
    } else {
      // Other errors
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
