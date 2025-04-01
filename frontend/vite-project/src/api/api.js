import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
    
  });

api.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  

//   api.interceptors.response.use(
//     (response) => response.data,
//     (error) => {
//       if (error.response?.status === 401) {

//         Cookies.remove('token');
//         window.location.href = '/login?session=expired';
//       }
//       return Promise.reject(error);
//     }
//   );
  
  export const authAPI = {
    login: (credentials) => api.post('/auth/login', credentials),
    logout: () => api.post('/auth/logout'),
    getMe: () => api.get('/auth/me')
  };
  
  export default api;
