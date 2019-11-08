import { create } from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

const api = create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  responseType: 'json',
  timeout: 30000,
});

api.interceptors.request.use(
  async config => {

    const token = await AsyncStorage.getItem('@Zodio:auth_token');

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  config => config,
  error => {

    return Promise.reject(error);
  }
);

export default api;
