import axios from 'axios';

// Base API client for React App 2
const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getPublicData = async () => {
  try {
    const response = await api.get('/public');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getApp2Data = async () => {
  try {
    const response = await api.get('/app2');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
