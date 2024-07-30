import axios from "axios";

export const API_URL = "https://arnia-kanban.vercel.app/";

export const Api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
  },
  timeout: 10000,
});
