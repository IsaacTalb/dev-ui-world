import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Update with your backend URL
  headers: { 'Content-Type': 'application/json' },
});

export const getAuthenticatedUser = async () => {
  const response = await api.get('/user');
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/logout');
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/register', userData);
  return response.data;
};

export default api; // This allows importing `axios` as default
