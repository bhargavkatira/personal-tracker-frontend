import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/categories`;

const getToken = () => localStorage.getItem('token');

export const getCategories = async () => {
  return await axios.get(API_URL, { headers: { Authorization: `Bearer ${getToken()}` } });
};

export const addCategory = async (name) => {
  return await axios.post(API_URL, { name }, { headers: { Authorization: `Bearer ${getToken()}` } });
};

export const editCategory = async (id, name) => {
  return await axios.put(`${API_URL}/${id}`, { name }, { headers: { Authorization: `Bearer ${getToken()}` } });
};

export const deleteCategory = async (id) => {
  return await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } });
};