import axios from "axios";

export const API_URL = "https://reqres.in/api/";

export const Api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
