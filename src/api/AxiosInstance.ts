import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/products.json`,
});
