import Axios from 'axios';
import { API_ENDPOINT } from './config';
import { auth } from './firebase';

const request = Axios.create({
  baseURL: API_ENDPOINT,
});

request.interceptors.request.use(async (config) => {
  const user = auth.currentUser;

  if (user) {
    const token = await user.getIdToken();
    config.headers.authentication = token;
  } else {
    config.headers.authentication = null;
  }

  return config;
});

export { request };
