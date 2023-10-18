import axios, { type AxiosResponse } from "axios";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};
const apiClient = axios.create({
  baseURL: import.meta.env.BASE_API_URL,
  headers: {
    ...defaultHeaders,
  },
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export { apiClient, responseBody }